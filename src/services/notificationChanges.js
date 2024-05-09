const NotificationChangesRepository = require("../models/notificationChanges/notificationChangesRepository")

const NotificationChangesService = {
    create: async (data) => {
        return await NotificationChangesRepository.create(data);
    }
}

module.exports = NotificationChangesService;