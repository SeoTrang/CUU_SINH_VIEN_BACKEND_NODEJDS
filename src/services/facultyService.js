const facultyRepository = require("../models/faculty/facultyRepository");

const facultyService = {
    create: async (data) => {
        try {
            return await facultyRepository.create(data);
        } catch (error) {
            throw error;
        }
    },

    findBySchoolName: async (school_name) => {
        try {
            return await facultyRepository.findBySchoolName(school_name);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = facultyService;