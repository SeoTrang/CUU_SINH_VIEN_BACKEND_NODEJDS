const NotificationObjectsRepository = require("../models/notificationObjects/notificationObjectsRepository");

const NotificationObjectsService = {
    create: async (data) => {
        return await NotificationObjectsRepository.create(data);
    }
}

module.exports = NotificationObjectsService;