const Address = require("./address");

const addressRepository = {
    getAll: async () => {
        try {
            const result = await Address.findAll();
            if(result) return {
                success: result
              }
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    getById: async (id) => {
        try {
            const result = await Address.findByPk(id);
            if(result) return {
                "success": result
            }
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    getByName: async (address) => {
        try {
            console.log(address);
            const addressExist = await Address.findOne({
                where: {
                    name: address
                }
            })
            return addressExist;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = addressRepository;