const database = require('./database');
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    },
});
const net = require("net");

const HOST = "127.0.0.1";
const PORT_TRAFFIC = 50000;

// Connect to the server socket
const network_client = new net.Socket();
network_client.connect(PORT_TRAFFIC, HOST, () => {
    console.log("Conectado ao provedor de tráfego.");
});

io.on("connection", (socket) => {
    network_client.on("data", async (data) => {
        //socket.emit("data", JSON.parse(data));
        const userID = socket.data.userID;
        if (userID) {
            const res = await database.updateUserData(userID, JSON.parse(data));
            console.log(res);
        }
    });

    socket.on("send_id", (userID) => {
        socket.data.userID = userID;
        console.log(`ID RECEIVED: ${socket.data.userID}`);
    });
});
// Start the server
http.listen(8000, () => {
    console.log("Server iniciou na porta 8000");
});
