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
    },
    getAllFaculty: async () => {
        try {
            return await facultyRepository.getAllFaculty();
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    acceptStatus: async (faculty_id) => {
        try {
            return await facultyRepository.acceptStatus(faculty_id);
        } catch (error) {
            throw error;
        }
    },

    getByName: async (faculty,school_id) => {
        try {
            return await facultyRepository.getByName(faculty,school_id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = facultyService;