const NotificationChanges = require("../notificationChanges/notificationChanges");
const Notifications = require("../notifications/notifications");
const NotificationObjects = require("./notificationObjects");

const NotificationObjectsRepository = {
    create: async (data) => {
        try {
            const result = await NotificationObjects.create(data);
            if(result) return {success: result}
        } catch (error) {
            console.log(error);
            return {error: error.message}
        }
    },

    delete: async (id) => {
        try {
            
            await Notifications.destroy({
                where:{
                    notification_object_id : id
                }
            });
            await NotificationChanges.destroy({
                where:{
                    notification_object_id: id
                }
            })

            await NotificationObjects.destroy({
                where:{
                    id: id
                }
            })

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

module.exports = NotificationObjectsRepository;