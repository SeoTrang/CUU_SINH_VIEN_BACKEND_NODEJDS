const Address = require("../address/address");
const School = require("./school");
const { Op } = require("sequelize");

const schoolRepository = {
    create: async (data) => {
        try {
            const result = await School.create(data);
            if(result) return {success: true};
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
                },
                logging: true
            })

            // const addressAll = await Address.findAll();
            // console.log(addressAll);

            // console.log(address);
            // console.log(address.id);
            const result = await School.findAll({
                where:{
                    address_id: address.dataValues.id
                }
            });
            if(result) return {success: result};
        } catch (error) {
            console.log(error);
            return {error: error}
        }
    }
}

module.exports = schoolRepository;