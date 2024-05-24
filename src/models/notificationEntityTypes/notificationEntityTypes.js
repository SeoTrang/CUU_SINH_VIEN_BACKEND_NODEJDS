const sequelize = require("../../db/configDB");
const { DataTypes } = require('sequelize');
const NotificationEntityTypes = sequelize.define('notification_entity_types',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    entity_table:{
        type: DataTypes.STRING,
        allowNull: false
    },
    notification_type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = NotificationEntityTypes;