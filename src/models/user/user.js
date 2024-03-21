const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../db/configDB');


const User = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    pass:{
        type: DataTypes.STRING,
        allowNull: false
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: true
    },
    role:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})


sequelize.sync().then(() => {
    console.log('users table created successfully!');
 
}).catch((error) => {
    console.error('Unable to create table users : ', error);
});



module.exports = User;