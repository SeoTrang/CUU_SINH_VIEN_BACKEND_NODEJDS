const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');

const Socketid = sequelize.define('socketids',{
    socketid: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    }
})

Socketid.belongsTo(User,{
    foreignKey: 'user_id'
})

module.exports = Socketid;