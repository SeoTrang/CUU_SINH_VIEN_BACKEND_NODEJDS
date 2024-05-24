
const schoolRepository = require("../models/school/schoolRepository");

const schoolService = {
    create: async(data) => {
        return await schoolRepository.create(data);
    },
    getByAddress: async(address_id) => {
        return await schoolRepository.getByAddress(address_id);
    },
    getByAddressName: async(address_name) => {
        try {
            return await schoolRepository.getByAddressname(address_name);
        } catch (error) {
            throw error;
        }
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
    },

    getByName: async (school) => {
        try {
            return await schoolRepository.getByName(school);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = schoolService;