const addressRepository = require("../models/address/addressRepository");

const addressService = {
    getAll: async () => {
        return await addressRepository.getAll();
    },
    getById: async (id) => {
        return await addressRepository.getById(id);
    }
}

module.exports = addressService;