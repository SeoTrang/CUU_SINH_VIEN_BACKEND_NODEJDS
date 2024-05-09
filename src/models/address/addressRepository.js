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
    }
}

module.exports = addressRepository;