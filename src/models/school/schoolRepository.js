const sequelize = require("../../db/configDB");
const Address = require("../address/address");
const User = require("../user/user");
const School = require("./school");
const { Op, where } = require("sequelize");

const schoolRepository = {
    create: async (data) => {
        try {
            const result = await School.create(data);
            if(result) return {success: result};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },
    getByAddress: async (address_id) => {
        try {
            const result = await School.findAll({
                where:{
                    address_id: address_id
                }
            });
            if(result) return {success: result};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    },

    getByAddressname: async (address_name) => {
        try {

            const addressName = address_name.toString();
            // console.log(typeof(addressName));
            // console.log(addressName);
            const address = await Address.findOne({
                where:{
                    name: {
                        [Op.like]: `%${addressName}%`
                    }
                }
            })

            // const addressAll = await Address.findAll();
            // console.log(addressAll);

            // console.log(address);
            // console.log(address.id);
            const result = await School.findAll({
                where:{
                    address_id: address.dataValues.id,
                    status: 'accept'
                }
            });
            if(result) return {success: result};
        } catch (error) {
            console.log(error);
            throw error;
        }
    },


    // admin

    getAllSchools: async() => {
        try{
            const schools = await School.findAll({
                attributes: {
                    include: [
                        [sequelize.literal(`(
                            SELECT COUNT(*)
                            FROM users AS users
                            WHERE
                            users.school_id  = schools.id
                        )`), 'userCount'],

                        [sequelize.literal(`(
                            SELECT COUNT(*)
                            FROM conversations AS conversations
                            WHERE
                            conversations.school_id  = schools.id
                        )`), 'conversationCount']
                    ]
                },
                include: [
                    {
                        model: User
                    },
                    {
                        model: Address
                    }
                ]
            });
            return schools;
        }catch(error){
            console.log(error);
            throw error;
        }
    },

    acceptStatus: async (school_id) => {
        try{
            let school = await School.findByPk(school_id);
            school.status = 'accept';
            school.save();
            return true;
        }catch(error){
            console.log(error);
            throw error;
        }
    },

    getByName: async (school) => {
        try {
            let schoolExist = await School.findOne({
                where: {
                    name: school
                }
            })

            if(schoolExist) return schoolExist;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = schoolRepository;