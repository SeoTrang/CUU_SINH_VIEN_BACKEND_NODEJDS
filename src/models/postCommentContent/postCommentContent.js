const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const PostComment = require('../postComment/postComment');

const PostCommentContent = sequelize.define('post_comment_contents',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false
    },
    type:{
        type: DataTypes.ENUM('video','img')
    }
})

PostCommentContent.belongsTo(PostComment,{
    foreignKey: 'comment_id',
    onDelete: 'cascade',
    hooks: true
})

PostComment.hasMany(PostCommentContent,{
    foreignKey: 'comment_id'
})

module.exports = PostCommentContent;