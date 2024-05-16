
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
    },

    getAllSchool: async () => {
        try{
            return await schoolRepository.getAllSchools();
        }catch(err){
            throw err;
        }
    },

    acceptStatus: async (school_id) => {
        try{
            return await schoolRepository.acceptStatus(school_id);
        }catch(error){
            throw error;
        }
    }
}

module.exports = schoolService;