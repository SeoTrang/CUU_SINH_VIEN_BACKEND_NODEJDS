const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');
const Message = require('../message/message');
const Conversation = require('../conversation/conversation');

const Seen = sequelize.define('seens',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

})

Seen.belongsTo(User,{
    foreignKey: 'user_id'
})

Seen.belongsTo(Message,{
    foreignKey: 'message_id'
})

Seen.belongsTo(Conversation,{
    foreignKey: 'conversation_id'
})

module.exports = Seen;