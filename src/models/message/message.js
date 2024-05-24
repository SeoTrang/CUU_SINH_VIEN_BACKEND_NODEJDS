const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User =  require('../user/user');
const Conversation = require('../conversation/conversation');
// messages

const Message = sequelize.define('messages',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    reply_to:{
        type: DataTypes.INTEGER,
        allowNull: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Message.belongsTo(User,{
    foreignKey: 'user_id'
})

Message.belongsTo(Conversation,{
    foreignKey: 'conversation_id'
})

Conversation.hasMany(Message,{
    foreignKey: 'conversation_id'
})


module.exports = Message;