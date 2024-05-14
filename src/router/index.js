const routes = require('./routes');
const routesAuth = require('./auth');
const routesFile = require('./file');
const admin = require('./admin');
const { checkLogin, checkAdmin } = require('../middlewares/middleware');

const route = (app) => {
    app.use('/api/auth',routesAuth)
    app.use('/api/file',routesFile)
    app.use('/api/admin',checkLogin,checkAdmin,admin)
    app.use('/api',routes)
}


module.exports = route;