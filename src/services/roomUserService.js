const roomUserRepository = require("../models/roomUser/roomUserRepository");

const roomUserService = {
    create: async(data) => {
        return await roomUserRepository.create(data);
    }
}

module.exports = roomUserService;