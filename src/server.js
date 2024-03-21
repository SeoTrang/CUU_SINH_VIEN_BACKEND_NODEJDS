const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const socketIO = require("socket.io");
const server = http.createServer(app);
// const io = socketIO(server);
const morgan = require("morgan");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml');

require("dotenv").config();

const port = process.env.PORT || 5000;
const route = require("./router/index");
const socketManager = require("./sockets/socketManager");

// connect to db
require("./db/configDB");

// create "middleware"
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Configure CORS for Express
// Cho phép tất cả các origin truy cập
app.use(cors({ origin: '*' }));

// Routes
route(app);

// Socket.IO - Configure CORS for Socket.IO
const ioCorsOptions = {
  origin: "http://localhost:5173", // Replace with the actual origin of your frontend app
  methods: ["GET", "POST"],
  credentials: true,
};

// Create Socket.IO server with CORS options
const ioServer = socketIO(server, {
  cors: ioCorsOptions,
});

// Socket.IO event handling
socketManager(ioServer);


// swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

server.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
