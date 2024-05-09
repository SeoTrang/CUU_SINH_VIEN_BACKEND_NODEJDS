const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Post = require('../post/post');
const User = require('../user/user');

const PostTag = sequelize.define('post_tags',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
})

PostTag.belongsTo(Post,{
    foreignKey: 'post_id'
})

PostTag.belongsTo(User,{
    foreignKey: 'user_tag_id'
})

Post.hasMany(PostTag,{
    foreignKey: 'post_id',
})


module.exports = PostTag;