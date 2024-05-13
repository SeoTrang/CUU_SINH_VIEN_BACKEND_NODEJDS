const { Op } = require("sequelize");
const School = require("../school/school");
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
    },

    findBySchoolName: async (school_name) => {
        try {
            const schoolName = school_name.toString();
            // console.log(typeof(addressName));
            // console.log(addressName);
            const school = await School.findOne({
                where:{
                    name: {
                        [Op.like]: `%${schoolName}%`
                    }
                }
            })

            // const addressAll = await Address.findAll();
            // console.log(addressAll);

            // console.log(address);
            // console.log(address.id);
            const result = await Faculty.findAll({
                where:{
                    school_id: school.dataValues.id
                }
            });
            if(result) return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = facultyRepository;