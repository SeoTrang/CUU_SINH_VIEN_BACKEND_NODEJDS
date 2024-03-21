const socketidRepository = require("../models/socketid/socketidRepository");

const socketService = {
    create: async (data) => {
        return await socketidRepository.create(data);
    },
    delete: async (id) => {
        return await socketidRepository.delete(id);
    },
    getByUserId: async (id) => {
        return await socketidRepository.getByUserId(id);
    }
}

module.exports = socketService;