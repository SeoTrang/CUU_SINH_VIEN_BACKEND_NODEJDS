const facultyService = require("../services/facultyService");

const facultyController = {
    create: async (req,res) => {
        try{
            const {school_id, name} = req.body.data;
            if(!school_id || !name) return res.status(400).json('missing data');
            const result = await facultyService.create(req.body.data);
            if(result) return res.status(200).json('success');
        }catch(error){
            console.log(error);
            return res.status(500).json({
                error: error.message
            })
        }
    },

    getAllBySchoolName: async (req,res ) => {
        try{
            const school_name = req.params.school_name;
            if(!school_name) return res.status(400).json('missing data');
            const dataResult = await facultyService.findBySchoolName(school_name);
            if(dataResult.length < 1) return res.status(404).json('not found');
            return res.status(200).json(dataResult);
        }catch(error){
            console.log(error);
            return res.status(500).json({errr: error.message});
        }
    },

    getAllFaculty: async (req,res) => {
        try {
            const data = await facultyService.getAllFaculty();
            return res.status(200).json(data);
        } catch (error) {
            console.log(error);
            return res.status(404).json({errr: error.message});
        }
    },

    acceptStatus: async (req,res) => {
        try {
            const faculty_id = req.params.faculty_id;
            const result = await facultyService.acceptStatus(faculty_id);
            if(result) return res.status(200).json('success');
        } catch (error) {
            console.log(error);
            return res.status(500).json({error: error.message});
        }
    }
}

module.exports = facultyController;