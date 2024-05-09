const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Address = require('../address/address');

const School = sequelize.define('schools',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    }
})

School.belongsTo(Address,{
    foreignKey: 'address_id'
})
Address.hasMany(School,{
    foreignKey: 'address_id'
})


module.exports = School;