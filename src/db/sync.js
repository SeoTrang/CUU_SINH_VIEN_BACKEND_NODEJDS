const sequelize = require('./configDB');

const User = require('../models/address/address');
// const Room = require('../models/room/room');
// const Address = require('../models/address/address');
// const UserRoom = require('../models/roomUser/roomUser');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.log(error);
    }
}

module.exports = syncDatabase;
