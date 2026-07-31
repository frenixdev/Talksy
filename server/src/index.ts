import app from "./app";
import { createServer } from "node:http";
import { Server } from "socket.io";

const httpServer = createServer(app);
const SERVER_PORT = 3000;
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

httpServer.listen(SERVER_PORT, ()=> console.log("Chat app is ready! "))

export default io
