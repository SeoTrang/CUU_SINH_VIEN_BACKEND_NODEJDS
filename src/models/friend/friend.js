const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');


const Friend = sequelize.define('friends', {
    friendship_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.ENUM('pending', 'accepted', 'rejected'),
        allowNull: false,
        defaultValue: 'pending',
    },
});


User.hasMany(Friend, { foreignKey: 'user_id', as: 'sentFriendRequests' });
User.hasMany(Friend, { foreignKey: 'friend_id', as: 'receivedFriendRequests' });

Friend.belongsTo(User, { foreignKey: 'user_id', as: 'sender' });
Friend.belongsTo(User, { foreignKey: 'friend_id', as: 'receiver' });

// sequelize.sync().then(() => {
//     console.log('Friend table created successfully!');
 
// }).catch((error) => {
//     console.error('Unable to create table Friend : ', error);
// });

module.exports = Friend;
