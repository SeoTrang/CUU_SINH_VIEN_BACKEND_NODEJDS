
const schoolRepository = require("../models/school/schoolRepository");

const schoolService = {
    create: async(data) => {
        return await schoolRepository.create(data);
    },
    getByAddress: async(address_id) => {
        return await schoolRepository.getByAddress(address_id);
    },
    getByAddressName: async(address_name) => {
        return await schoolRepository.getByAddressname(address_name);
    }
}

module.exports = schoolService;