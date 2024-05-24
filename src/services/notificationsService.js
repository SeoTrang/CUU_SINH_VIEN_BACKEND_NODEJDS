const NotificationsRepository = require("../models/notifications/notificationsRepository")

const NotificationsService = {
    create: async (data) => {
        return await NotificationsRepository.create(data);
    },
    getAllNotificationByUserId: async(user_id) => {
        return await NotificationsRepository.getAllNotificationByUserId(user_id);
    },
    deleteNotificationById: async (notification_id) => {
        return await NotificationsRepository.deleteNotificationById(notification_id);
    },
    updateNotificationById: async (notification_id) => {
        return await NotificationsRepository.updateNotificationById(notification_id);
    },
    updateAllNotificationByUserID: async (user_id) => {
        return await NotificationsRepository.updateAllNotificationByUserID(user_id);
    }
}

module.exports = NotificationsService;