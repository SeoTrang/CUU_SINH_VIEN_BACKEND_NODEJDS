const sequelize = require("../../db/configDB");
const Notifications = require("./notifications");

const NotificationsRepository = {
  create: async (data) => {
    try {
      const result = await Notifications.create(data);
      if (result) return { success: result };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },

  getAllNotificationByUserId: async (user_id) => {
    try {
      const result = await sequelize.query(
        `
                SELECT
                n.id AS notification_id,
                n.status AS notification_status,
                no.id AS notification_object_id,
                no.entity_type_id,
                no.entity_id,
                et.entity_table,
                et.notification_type,
                u.user_name AS user_receiver_name,
                u.email AS actor_email,
                
                n.receiver_id,
                notification_changes.actor_id as actor_id,
                u2.user_name as actor_name,
                u2.avatar AS actor_avatar
                
            FROM
                notifications n
            JOIN
                notification_objects as no ON n.notification_object_id = no.id
            JOIN
                notification_entity_types as et ON no.entity_type_id = et.id
            JOIN
                users u ON u.id = n.receiver_id 
            JOIN
                notification_changes ON no.id = notification_changes.notification_object_id
            JOIN 
                users as u2 on u2.id = actor_id
            
            WHERE
                n.receiver_id = ${user_id};
                `,
        {
          type: sequelize.QueryTypes.SELECT,
          // logging: true,
        }
      );

      if (result) return { success: result };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },

  deleteNotificationById: async (notification_id) => {
    try {
      const resultDelete = await Notifications.destroy({
        where: {
          id: notification_id,
        },
      });
      // console.log(resultDelete);
      if (resultDelete > 0) {
        return {
          success: `Successfully deleted ${resultDelete} notification(s).`,
        };
      } else {
        return {
          error: `Notification with id ${notification_id} not found or already deleted.`,
        };
      }
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
  updateNotificationById: async (notification_id) => {
    try {
      const result = await Notifications.update(
        { status: "read" },
        {
          where: { id: notification_id }, // Sử dụng 'id' thay vì 'notification_id'
        }
      );

      if (result[0] > 0) {
        return {
          success: `Successfully updated status for notification with id ${notification_id}.`,
        };
      } else {
        return {
          error: `Notification with id ${notification_id} not found or status remains unchanged.`,
        };
      }
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
  updateAllNotificationByUserID: async (user_id) => {
    try {
      const result = await Notifications.update(
        { status: "read" },
        {
          where: { receiver_id: user_id }, 
        }
      );

      if (result[0] > 0) {
        return {
          success: `Successfully updated status for notification with id ${result[0]}.`,
        };
      } 
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
};

module.exports = NotificationsRepository;
