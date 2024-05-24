const { Op } = require("sequelize");
const User = require("./user");
const sequelize = require("../../db/configDB");
const School = require("../school/school");
const Faculty = require("../faculty/faculty");
const friendRepository = require("../friend/friendRepository");
const Address = require("../address/address");
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
  findByEmail: async (data) => {
    try {
      console.log(data);
      const user = await User.findOne({
        where: {
          email: data,
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
      const user = await User.findByPk(id,{
        include: [
          {
            model: School
          },
          {
            model: Faculty
          }
        ]
      });
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

  getAllUsersDetail: async () => {
    try {
      let result = await User.findAll({
        include: [
          {
            model: School,
          },
          {
            model: Address
          }
        ]
      });
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

  verifyEmail: async (user_id) => {
    try {
      const user = await User.findByPk(user_id);
      if(!user) return { error: 'User not found' };
      user.verifyEmail = true;
      await user.save(); // Sử dụng await để đợi phương thức save() hoàn thành

      return { success: 'Email verified successfully' };

    } catch (error) {
      console.error("Lỗi khi cập nhật người dùng:", error);
      return false; // Trả về false nếu có lỗi xảy ra
    }
  },

  saveNewPass: async (data) => {
    try {
      const {email, pass} = data;
      const user = await User.findOne({
        where: {
          email: email
        }
      });
      if(!user) return { error: 'User not found' };
      user.pass = pass;
      await user.save(); // Sử dụng await để đợi phương thức save() hoàn thành

      return { success: 'success' };

    } catch (error) {
      console.error("Lỗi khi cập nhật người dùng:", error);
      return false; // Trả về false nếu có lỗi xảy ra
    }
  },

  searchByMultipleParam: async (data) => {
    try{
      const {address, school, faculty, userName} = data;
      const modifiedName = userName.replace(/\s+/g, ' ');
      const queryString = `
      SELECT users.*, addresses.name AS address_name, schools.name AS school_name, faculties.name AS faculty_name 
      FROM users 
      JOIN addresses ON users.address_id = addresses.id
      JOIN schools ON users.school_id = schools.id
      JOIN faculties ON users.faculty_id = faculties.id
      WHERE users.user_name LIKE '%${modifiedName}%' AND addresses.name LIKE '%${address}%' AND schools.name LIKE '%${school}%' AND faculties.name LIKE '%${faculty}%';
      `;
      let result = await sequelize.query(queryString, { type: sequelize.QueryTypes.SELECT });
            
      if(result.length > 0) return {success: result}
    }catch(error){
      console.log(error);
      return {error: error}
    }
  },


  recommendFriend: async (user_id) => {
    try {
      let array_non_friends = await friendRepository.getRecomendFriendIds(user_id);
      let user = await User.findByPk(user_id);
        let queryString = `
        SELECT users.* 
        FROM users
        WHERE users.id IN (${array_non_friends}) AND (users.address_id = ${user.address_id} OR users.school_id = ${user.school_id})
        `;
        let friendRecomends = sequelize.query(queryString, { type: sequelize.QueryTypes.SELECT });

      return friendRecomends;

    } catch (error) {
      console.log(error);
      return {error: error}
    }
  },

  deleteUser: async(user_email)=> {
    try {
        return await User.destroy({
          where: {
            email: user_email
          }
        })
    } catch (error) {
        throw error;
    }
  }
};

module.exports = userRepository;
