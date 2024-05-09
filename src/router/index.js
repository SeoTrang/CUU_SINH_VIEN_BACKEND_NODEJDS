const routes = require('./routes');
const routesAuth = require('./auth');
const routesFile = require('./file');

const route = (app) => {
    app.use('/api/auth',routesAuth)
    app.use('/api/file',routesFile)
    app.use('/api',routes)
}


module.exports = route;