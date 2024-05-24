const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const User = require('../user/user');
const PostComment = require('../postComment/postComment');

const CommentReaction = sequelize.define('comment_reactions',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
})

CommentReaction.belongsTo(PostComment,{
    foreignKey: 'comment_id'
})
CommentReaction.belongsTo(User,{
    foreignKey: 'user_id'
})

PostComment.hasMany(CommentReaction,{
    foreignKey: 'comment_id'
})

module.exports = CommentReaction;