const sequelize = require("../../db/configDB");
const { DataTypes } = require('sequelize');
const NotificationObjects = require("../notificationObjects/notificationObjects");
const User = require("../user/user");
const NotificationChanges = sequelize.define('notification_changes',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    entity_affected_type:{
        type: DataTypes.ENUM(['users','groups']),
        allowNull: true
    }
})

NotificationChanges.belongsTo(NotificationObjects,{
    foreignKey: 'notification_object_id'
})
NotificationChanges.belongsTo(User,{
    foreignKey: 'actor_id'
})

User.hasMany(NotificationChanges,{
    foreignKey: 'actor_id'
})

module.exports = NotificationChanges;
