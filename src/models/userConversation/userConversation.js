const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');
const Conversation = require('../conversation/conversation');
const UserConversation = sequelize.define('user_conversations',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    is_admin:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    status: {
        type: DataTypes.ENUM(['pending','accept']),
        allowNull: false,
        defaultValue: 'accept'
    }
})

/*
// Add foreign key for User
UserConversation.belongsTo(User, {
    foreignKey: {
        allowNull: false,
        name: 'userId', // or any other name you prefer for the foreign key column
    },
});

// Add foreign key for Conversation
UserConversation.belongsTo(Conversation, {
    foreignKey: {
        allowNull: false,
        name: 'conversationId', // or any other name you prefer for the foreign key column
    },
});

*/

// Thiết lập quan hệ nhiều-nhiều giữa User và Room thông qua bảng trung gian RoomUser
// User.belongsToMany(Conversation, { through: UserConversation });
// Conversation.belongsToMany(User, { through: UserConversation });


User.belongsToMany(Conversation, {
    through: {
        model: UserConversation,
        unique: false, // Set to true if the combination (User, Conversation) should be unique
    },
    foreignKey: 'user_id', // Specify the foreign key column name
});

Conversation.belongsToMany(User, {
    through: {
        model: UserConversation,
        unique: false, // Set to true if the combination (User, Conversation) should be unique
    },
    foreignKey: 'conversation_id', // Specify the foreign key column name
});

module.exports = UserConversation;