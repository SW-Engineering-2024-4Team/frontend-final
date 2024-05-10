const { Server: NetServer } = require("http");
const { Server: ServerIO } = require("socket.io");

const ioHandler = (req, res) => {
    if (!res.socket.server.io) {
        const path = "/api/socket/io";
        const httpServer = res.socket.server;
        const io = new ServerIO(httpServer, {
            path: path,
            addTrailingSlash: false
        });
        res.socket.server.io = io;
    }
};

module.exports = ioHandler;
