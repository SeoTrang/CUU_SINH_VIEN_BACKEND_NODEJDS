const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Message = require('../message/message');

const MessageContent = sequelize.define('content_messages',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

MessageContent.belongsTo(Message,{
    foreignKey: 'message_id'
})

Message.hasMany(MessageContent,{
    foreignKey: 'message_id'
})


module.exports = MessageContent;
