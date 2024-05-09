const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Room = require('../conversation/conversation');
const User = require('../user/user');

const RoomUser = sequelize.define('room_users',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    
})

User.belongsToMany(Room, { through: RoomUser, foreignKey: 'user_id' });
Room.belongsToMany(User, { through: RoomUser, foreignKey: 'room_id' });


module.exports = RoomUser;