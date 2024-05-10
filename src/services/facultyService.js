const facultyRepository = require("../models/faculty/facultyRepository");

const facultyService = {
    create: async (data) => {
        try {
            return await facultyRepository.create(data);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = facultyService;