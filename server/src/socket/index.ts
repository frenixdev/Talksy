import { Socket , Server} from "socket.io";
import { chatEvents } from "./socket.events";

export const registerSocket = (io:Server) =>{
  io.on("connection", (socket: Socket)=>{
    console.log("a new user connected")

    chatEvents(io, socket)
  })

}
