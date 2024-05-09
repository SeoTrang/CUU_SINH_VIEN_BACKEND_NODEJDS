const { Sequelize } = require('sequelize');
const syncDatabase = require('./sync');

const sequelize = new Sequelize(
  process.env.DB_NAME, //name db
  process.env.DB_USER_NAME, // user
  process.env.DB_USER_PASS, //pass
  {
    host: process.env.DB_HOST, // host
    dialect: 'mysql',
    port: process.env.DB_PORT,  // port
    logging: false
  }
);

(async () => {
  try {
    // console.log(process.env.DB_NAME);
    await sequelize.authenticate();
    // await syncDatabase();
    console.log('Kết nối thành công!');
  } catch (error) {
    console.error('Không thể kết nối đến cơ sở dữ liệu:', error);
  }
})();

module.exports = sequelize;