const NotificationEntityTypes = require("./notificationEntityTypes");

const NotificationEntityTypesRepository = {
    create: async (data) => {
        try {
            const result = await NotificationEntityTypes.create(data);
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },
    findById: async (id) => {
        try {
            const result = await NotificationEntityTypes.findOne({
                where: {
                    id: id
                }
            })

            if(result) return {success: result} 
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    }
}

module.exports = NotificationEntityTypesRepository;