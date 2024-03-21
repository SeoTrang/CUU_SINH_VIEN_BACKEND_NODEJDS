const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');

const Post = sequelize.define('posts',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    caption:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})

Post.belongsTo(User,{
    foreignKey: 'user_id'
})

User.hasMany(Post,{
    foreignKey: 'user_id'
})

module.exports = Post;