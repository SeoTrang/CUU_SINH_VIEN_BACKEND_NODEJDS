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



module.exports = Faculty;