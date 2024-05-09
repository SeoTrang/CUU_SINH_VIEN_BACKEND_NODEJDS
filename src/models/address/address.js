const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');

const Address = sequelize.define('address', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// Hàm kiểm tra và chèn dữ liệu tỉnh thành
const seedProvinces = async () => {
    try {
        const rowCount = await Address.count();

        if (rowCount === 0) {
            const provinces = [
                "An Giang",
                "Bà Rịa - Vũng Tàu",
                "Bắc Giang",
                "Bắc Kạn",
                "Bạc Liêu",
                "Bắc Ninh",
                "Bến Tre",
                "Bình Định",
                "Bình Dương",
                "Bình Phước",
                "Bình Thuận",
                "Cà Mau",
                "Cao Bằng",
                "Đắk Lắk",
                "Đắk Nông",
                "Điện Biên",
                "Đồng Nai",
                "Đồng Tháp",
                "Gia Lai",
                "Hà Giang",
                "Hà Nam",
                "Hà Tĩnh",
                "Hải Dương",
                "Hậu Giang",
                "Hòa Bình",
                "Hưng Yên",
                "Khánh Hòa",
                "Kiên Giang",
                "Kon Tum",
                "Lai Châu",
                "Lâm Đồng",
                "Lạng Sơn",
                "Lào Cai",
                "Long An",
                "Nam Định",
                "Nghệ An",
                "Ninh Bình",
                "Ninh Thuận",
                "Phú Thọ",
                "Quảng Bình",
                "Quảng Nam",
                "Quảng Ngãi",
                "Quảng Ninh",
                "Quảng Trị",
                "Sóc Trăng",
                "Sơn La",
                "Tây Ninh",
                "Thái Bình",
                "Thái Nguyên",
                "Thanh Hóa",
                "Thừa Thiên Huế",
                "Tiền Giang",
                "Trà Vinh",
                "Tuyên Quang",
                "Vĩnh Long",
                "Vĩnh Phúc",
                "Yên Bái",
                "Phú Yên",
                "Cần Thơ",
                "Đà Nẵng",
                "Hải Phòng",
                "Hà Nội",
                "Hồ Chí Minh",
                "Các đơn vị khác",
              ];

              
            // Bảng rỗng, chèn dữ liệu tỉnh thành
            const provincesData = provinces.map(province => ({ name: province }));
            await Address.bulkCreate(provincesData);
            console.log('Dữ liệu tỉnh thành đã được chèn thành công.');
        } else {
            console.log('Bảng không rỗng, không cần chèn dữ liệu tỉnh thành.');
        }
    } catch (error) {
        console.error('Lỗi khi kiểm tra và chèn dữ liệu tỉnh thành:', error);
    }
};

// Đảm bảo bảng tồn tại trước khi kiểm tra và chèn dữ liệu
// sequelize.sync()
//     .then(() => {
//         console.log('Bảng đã được tạo hoặc tồn tại.');
//         seedProvinces(); // Gọi hàm kiểm tra và chèn dữ liệu tỉnh thành
//     })
//     .catch((error) => {
//         console.error('Lỗi khi tạo hoặc đảm bảo tồn tại bảng:', error);
//     });

module.exports = Address;
