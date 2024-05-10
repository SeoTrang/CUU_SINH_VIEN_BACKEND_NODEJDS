const express = require("express");
const https = require("https"); // Import https module
const http = require("http"); // Import http module
const fs = require("fs"); // Import file system module
const cors = require("cors");
const bodyParser = require("body-parser");
const {Server}   = require('socket.io');
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');


require("dotenv").config();

const port = process.env.PORT || 5000;
const port_socket = process.env.PORT_SOCKET || 5001;
const route = require("./router/index");
const socketManager = require("./sockets/socketManager");
const path = require("path");
const socketModule = require("./sockets/socketModule");

// connect to db

require("./db/configDB");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Configure CORS for Express
app.use(cors({ origin: '*' }));

// Routes
route(app);

// Socket.IO - Configure CORS for Socket.IO
const ioCorsOptions = {
  origin: (origin, callback) => {
    callback(null, true);
  },
  methods: ["GET", "POST"],
  credentials: true,
};

const server = process.env.NODE_ENV == 'production' ? (
            https.createServer({
                key : fs.readFileSync(path.join(__dirname, '../../../../conf/web/trang-dev.ictu.vn/ssl/trang-dev.ictu.vn.key')),
                cert: fs.readFileSync(path.join(__dirname, '../../../../conf/web/trang-dev.ictu.vn/ssl/trang-dev.ictu.vn.crt')),
                ca  : fs.readFileSync(path.join(__dirname, '../../../../conf/web/trang-dev.ictu.vn/ssl/trang-dev.ictu.vn.ca')),
            }, app)
        )
        :
        http.createServer(app)

const serverIo =  process.env.NODE_ENV == 'production' ? 
        (
            https.createServer({
                key : fs.readFileSync(path.join(__dirname, '../../../../conf/web/trang-dev.ictu.vn/ssl/trang-dev.ictu.vn.key')),
                cert: fs.readFileSync(path.join(__dirname, '../../../../conf/web/trang-dev.ictu.vn/ssl/trang-dev.ictu.vn.crt')),
                ca  : fs.readFileSync(path.join(__dirname, '../../../../conf/web/trang-dev.ictu.vn/ssl/trang-dev.ictu.vn.ca')),
              }, app)
        ):
        (
            http.createServer(app)
        )


const ioServer         = new Server(serverIo, {
  transports       : ['polling', 'websocket'],
  cors             : {
      origin     : '*',
      methods    : ['GET', 'POST'],
      credentials: true,
  },
});



// const ioServer = Server(server, {
//   cors: {
//     origin: "*",
//   }
// });

// Socket.IO event handling
socketManager(ioServer);



// socket io start 
serverIo.listen(port_socket, () => {
  console.log(`Socket.IO server is running on ${process.env.NODE_ENV == 'production' ? 'wss' : 'ws'}://localhost:${port_socket}`);
});

// swagger 123

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




server.listen(port, () => {
  console.log(`app running on ${process.env.NODE_ENV == 'production' ? 'https' : 'http'}://localhost:${port}`);
});

