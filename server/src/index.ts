import app from "./app";
import { createServer } from "node:http";
import { Server } from "socket.io";
import { registerSocket } from "./socket";

const httpServer = createServer(app);
const SERVER_PORT = 3000;
const io = new Server(httpServer, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:5174",
      "https://talksy.frenix.space"
    ]
  },
});

httpServer.listen(SERVER_PORT, () => console.log("Chat app is ready! "));

registerSocket(io);
