const NotificationChanges = require("./notificationChanges");

const NotificationChangesRepository = {
    create: async (data) => {
        try {
            const result = await NotificationChanges.create(data);
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    }
}

module.exports = NotificationChangesRepository;