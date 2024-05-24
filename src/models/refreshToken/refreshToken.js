const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');

const RefreshToken = sequelize.define('refreshtokens',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    refreshToken:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

RefreshToken.belongsTo(User,{
    foreignKey: 'user_id'
})

User.hasMany(RefreshToken,{
    foreignKey: 'user_id'
})

// sequelize.sync().then(() => {
//     console.log('refreshTokens table created successfully!');
 
// }).catch((error) => {
//     console.error('Unable to create table refreshTokens : ', error);
// });

module.exports = RefreshToken;