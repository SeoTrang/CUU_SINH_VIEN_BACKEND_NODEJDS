const NotificationEntityTypesService = require("../services/notificationEntityTypesService");
const NotificationsService = require("../services/notificationsService");

const Notificationcontroller = {
    createNotificationEntityTypes: async (req,res) => {
        try {
            const data = req.body.data;
            const result = await NotificationEntityTypesService.create(data);
            if(result) return res.status(200).json(result);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    getAllNotificationByUserId: async (req, res) => {
        try {
            const user_id = req.body.decode.id;
            const result = await NotificationsService.getAllNotificationByUserId(user_id);
            if(result.success) return res.status(200).json(result.success);

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    deleteNotification: async (req,res) => {
        try {
            const notification_id = req.params.notification_id;
            
            const resultDelete = await NotificationsService.deleteNotificationById(notification_id);
            if(resultDelete.success) return res.status(200).json(resultDelete.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    updateNotification: async (req, res) => {
        try {
            const notification_id = req.params.notification_id;
            const resultUpdate = await NotificationsService.updateNotificationById(notification_id);
            if(resultUpdate.success) return res.status(200).json(resultUpdate.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    updateAllNotificationByUserID: async (req, res) => {
        try {
            const user_id = req.body.decode.id;
            const resultUpdate = await NotificationsService.updateAllNotificationByUserID(user_id);
            if(resultUpdate.success) return res.status(200).json(resultUpdate.success);
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }
}

module.exports = Notificationcontroller;