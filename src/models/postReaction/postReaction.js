const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Post = require('../post/post');
const User = require('../user/user');

const PostReaction = sequelize.define('post_reactions',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

PostReaction.belongsTo(Post,{
    foreignKey: 'post_id'
})
PostReaction.belongsTo(User,{
    foreignKey: 'user_id'
})

Post.hasMany(PostReaction,{
    foreignKey: 'post_id'
})

module.exports = PostReaction;