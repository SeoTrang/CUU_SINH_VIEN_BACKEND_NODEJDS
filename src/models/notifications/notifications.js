const sequelize = require("../../db/configDB");
const { DataTypes } = require('sequelize');
const NotificationObjects = require("../notificationObjects/notificationObjects");
const User = require("../user/user");

const Notifications = sequelize.define('notifications',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status:{
        type: DataTypes.ENUM(['unread','read']),
        allowNull: false,
        defaultValue: 'unread'
    }
    
})

Notifications.belongsTo(NotificationObjects,{
    foreignKey: 'notification_object_id'
})

Notifications.belongsTo(User,{
    foreignKey: 'receiver_id'
})

NotificationObjects.hasMany(Notifications,{
    foreignKey: 'notification_object_id'
})

User.hasMany(Notifications,{
    foreignKey: 'receiver_id'
})

module.exports = Notifications;