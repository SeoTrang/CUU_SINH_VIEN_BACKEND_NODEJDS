const { Op } = require("sequelize");
const School = require("../school/school");
const Faculty = require("./faculty");
const User = require("../user/user");
const sequelize = require("../../db/configDB");



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
    },

    getAllFaculty: async () => {
        try {
            const data = await Faculty.findAll(
                {
                    include: [
                        {
                            model: User
                        },
                        {
                            model: School,
                            where: {
                                status: 'accept'
                            }
                        }
                    ],
                    attributes: {
                        include: [
                            [sequelize.literal(`(
                                SELECT COUNT(*)
                                FROM users AS users
                                WHERE
                                users.faculty_id  = faculties.id
                            )`), 'userCount'],
    
                            [sequelize.literal(`(
                                SELECT COUNT(*)
                                FROM conversations AS conversations
                                WHERE
                                conversations.faculty_id  = faculties.id
                            )`), 'conversationCount']
                        ]
                    },
                }
            );

            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    acceptStatus: async (faculty_id) => {
        try{
            let faculty = await Faculty.findByPk(faculty_id);
            faculty.status = 'accept';
            faculty.save();
            return true;
        }catch(error){
            console.log(error);
            throw error;
        }
    },

    getByName: async (faculty,school_id) => {
        try {
            const facultyExist = await Faculty.findOne({
                where: {
                    name: faculty,
                    school_id: school_id
                }
            })
            if(facultyExist) return facultyExist;

        } catch (error) {
            throw error;
        }
    }
}

module.exports = facultyRepository;