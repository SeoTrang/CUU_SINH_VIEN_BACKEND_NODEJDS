const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Post = require('../post/post');
const User = require('../user/user');

const PostComment = sequelize.define('post_comments',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

PostComment.belongsTo(Post,{
    foreignKey: 'post_id',
})

PostComment.belongsTo(User,{
    foreignKey: 'user_id',
})

Post.hasMany(PostComment,{
    foreignKey: 'post_id',
})

module.exports = PostComment;