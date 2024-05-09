const sequelize = require("../../db/configDB");
const { DataTypes} = require('sequelize');
const NotificationEntityTypes = require("../notificationEntityTypes/notificationEntityTypes");
const NotificationObjects = sequelize.define('notification_objects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status:{
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
    },
    url:{
        type: DataTypes.STRING,
        allowNull: true
    },
    entity_id:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

NotificationObjects.belongsTo(NotificationEntityTypes,{
    foreignKey: 'entity_type_id'
})

NotificationEntityTypes.hasMany(NotificationObjects,{
    foreignKey: 'entity_type_id'
})

module.exports = NotificationObjects;

