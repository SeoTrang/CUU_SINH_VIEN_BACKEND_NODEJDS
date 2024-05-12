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

    getAllBySchool: async (req,res ) => {
        try{
            // const school_id = req.params.
        }catch(error){
            console.log(error);
            return res.status(500).json({errr: error.message});
        }
    }
}

module.exports = facultyController;