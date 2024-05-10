const { DataTypes } = require("sequelize");
const sequelize = require("../../db/configDB");
const School = require("../school/school");

const Faculty = sequelize.define('faculties',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Faculty.belongsTo(School,{
    foreignKey: 'school_id'
})

School.hasMany(Faculty,{
    foreignKey: 'school_id'
})

sequelize.sync().then(() => {
    console.log('faculties table created successfully!');
}).catch((error) => {
    console.error('Unable to create table faculties : ', error);
});



module.exports = Faculty;