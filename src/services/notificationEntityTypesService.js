const NotificationEntityTypesRepository = require("../models/notificationEntityTypes/notificationEntityTypesRepository")

const NotificationEntityTypesService = {
    create: async (data) => {
        return await NotificationEntityTypesRepository.create(data);
    }
}

module.exports = NotificationEntityTypesService;