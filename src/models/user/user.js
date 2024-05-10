const { DataTypes, QueryTypes } = require('sequelize');
const sequelize = require('../../db/configDB');
const School = require('../school/school');
const Faculty = require('../faculty/faculty');


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
    },
    address:{
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date_of_birth:{
        type: DataTypes.STRING,
        allowNull: true
    },
    background: {
        type: DataTypes.STRING,
        allowNull: true
    },
    is_public_birth:{
        type: DataTypes.INTEGER,
        allowNull: false, 
        defaultValue: 1
        
    },
    verifyEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

User.belongsTo(School,{
    foreignKey: 'school_id'
})

School.hasMany(User,{
    foreignKey: 'school_id'
})

User.belongsTo(Faculty,{
    foreignKey: 'faculty_id'
})

Faculty.hasMany(User,{
    foreignKey: 'faculty_id'
})
// sequelize.sync().then(() => {
//     console.log('users table created successfully!');
 
// }).catch((error) => {
//     console.error('Unable to create table users : ', error);
// });



module.exports = User;