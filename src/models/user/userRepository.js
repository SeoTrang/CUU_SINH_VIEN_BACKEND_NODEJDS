const { Op } = require("sequelize");
const User = require("./user");
const sequelize = require("../../db/configDB");
const userRepository = {
  create: async (data) => {
    try {
      let result = await User.create(data);
      if (result?.id) return true;
      throw new Error("Could not create");
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  update: async (data, user_id) => {
    try {
      const result = await User.update(data, {
        where: {
          id: user_id,
        },
      });
      if (result[0] === 1) return true; // Kiểm tra số lượng bản ghi đã được cập nhật
      throw new Error("Could not update"); // Ném ra một lỗi nếu không cập nhật được bản ghi nào
    } catch (error) {
      console.error("Lỗi khi cập nhật người dùng:", error);
      return false; // Trả về false nếu có lỗi xảy ra
    }
  },
  findByPhone: async (data) => {
    try {
      const user = await User.findOne({
        where: {
          phone: data,
        },
      });

      if (user) return user;
      return false;
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },
  findById: async (id) => {
    try {
      const user = await User.findByPk(id);

      if (user) return user;
      return false;
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  search: async (search) => {
    try {
      const user = await User.findAll({
        attributes: ["id", "user_name", "phone", "avatar"],
        where: {
          [Op.or]: [
            {
              user_name: {
                [Op.like]: `%${search}%`,
              },
            },
            {
              phone: search,
            },
          ],
        },
      });

      if (user) return { success: user };
      return false;
    } catch (error) {
      console.log(error);
      return { error: error };
    }
  },

  getAllUsers: async () => {
    try {
      let result = await User.findAll();
      if (result) return { success: result };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },

  getImgLibrary: async (items_per_page,skip_items) => {
    try {
      let result = await sequelize.query(
        `
            SELECT users.id AS user_id, posts.id AS post_id, post_contents.content, posts.is_public 
            FROM users
            JOIN posts ON posts.user_id = users.id
            JOIN post_contents ON post_contents.post_id = posts.id
            WHERE users.id = ${user_id} AND is_public = 1
            ORDER BY posts.createdAt DESC
            LIMIT ${items_per_page} OFFSET ${skip_items};
            `,
        { type: sequelize.QueryTypes.SELECT }
      );
      return { success: result };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },

  getMyImgLibrary: async (items_per_page,skip_items,user_id) => {
    try {
      let result = await sequelize.query(
        `
            SELECT users.id AS user_id, posts.id AS post_id, post_contents.content, posts.is_public 
            FROM users
            JOIN posts ON posts.user_id = users.id
            JOIN post_contents ON post_contents.post_id = posts.id
            WHERE users.id = ${user_id}
            ORDER BY posts.createdAt DESC
            LIMIT ${items_per_page} OFFSET ${skip_items};
            `,
        { type: sequelize.QueryTypes.SELECT }
      );
      return { success: result };
    } catch (error) {
      console.log(error);
      return { error: error.message };
    }
  },
};

module.exports = userRepository;
