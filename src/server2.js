const express = require("express");
const app = express();
const http = require("http");


require("dotenv").config();



console.log(process.env.DB_PORT);