const { DataTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const Post = require('../post/post');

const PostContent = sequelize.define('post_contents',{
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

PostContent.belongsTo(Post,{
    foreignKey: 'post_id'
})

Post.hasMany(PostContent,{
    foreignKey: 'post_id'
})

module.exports = PostContent;