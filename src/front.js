const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");


const app = express();
const server = http.createServer(app);

const io = socketio(server);

require("dotenv").config();

const port = process.env.FRONT_PORT || 5000;
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
