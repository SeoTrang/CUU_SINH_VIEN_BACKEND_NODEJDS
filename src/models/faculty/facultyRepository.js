const Faculty = require("./faculty")



const facultyRepository = {
    create: async (data) => {
        try {
            
            const result = await Faculty.create(data);
            if(result) return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = facultyRepository;