const { DataTypes } = require("sequelize");
const sequelize = require("../../db/configDB");

// Hàm tính toán thời gian hết hạn 20 phút sau thời điểm tạo mới
function getDefaultExp() {
    const currentTime = new Date();
    currentTime.setMinutes(currentTime.getMinutes() + 20); // Thêm 20 phút vào thời gian hiện tại
    return currentTime;
}

const OTPModel = sequelize.define('otps',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    otp: {
        type: DataTypes.STRING,
        allowNull: false
    },
    exp:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: getDefaultExp() // Sử dụng hàm getDefaultExp() để thiết lập giá trị mặc định
    }
})


// sequelize.sync().then(() => {
//     console.log('opts table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table opts : ', error);
// });

module.exports = OTPModel;
