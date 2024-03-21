const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Address = require('../address/address');
const School = require('../school/school');

const Conversation = sequelize.define('conversations',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    type:{
        type: DataTypes.ENUM('user','room'),
        allowNull: false,
        defaultValue: 'user'
    },
    status:{
        type: DataTypes.ENUM('pending','accept','cancelled'),
        allowNull: false,
        defaultValue: 'accept'
    }


})

Conversation.belongsTo(School,{
    foreignKey: 'school_id'
})

School.hasMany(Conversation,{
    foreignKey: 'school_id'
})

// sequelize.sync().then(() => {
//     console.log('Conversation table created successfully!');
 
// }).catch((error) => {
//     console.error('Unable to create table Conversation : ', error);
// });


module.exports = Conversation;
