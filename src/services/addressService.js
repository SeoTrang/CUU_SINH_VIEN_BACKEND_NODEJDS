const addressRepository = require("../models/address/addressRepository");

const addressService = {
    getAll: async () => {
        return await addressRepository.getAll();
    },
    getById: async (id) => {
        return await addressRepository.getById(id);
    },

    getByName: async (address) => {
        try {
            return await addressRepository.getByName(address);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = addressService;