const roomRepository = require("../models/room/roomRepository")

const roomService = {
    create: async (data) => {
        return await roomRepository.create(data);
    }
}

module.exports = roomService;