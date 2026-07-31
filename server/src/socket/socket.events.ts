import { Socket, Server } from "socket.io";
import z from "zod";
import { msgShema } from "./socket.types";

export const chatEvents = (io: Server, socket: Socket) => {
  socket.on("join", (data: { user: string }) => {
    const res = {
      type : "join" ,
      user: data.user
    }
    socket.broadcast.emit("join",res );
  });


  socket.on("send-msg", (data: z.infer<typeof msgShema>) => {
    const res = {
      type: "msg",
      user: data.user,
      message: data.message,
      date: data.date
    }
    socket.broadcast.emit("get-msg", res)
  });

  socket.on("leave", (data: { user: string })=>{
    const res = {
      type: 'leave',
      user: data.user,

    }
    socket.broadcast.emit("leave", res)
  })
  socket.on("typing", (data: {user:string}) =>{
    const res = {
      type: "typing",
      active: true,
      user: data.user
    }
    socket.broadcast.emit("typing", res)
  })
socket.on("stop-typing", (data: {user: string}) =>{
  const res = {
    type: "typing",
    active: false,
    user:data.user
  }
  socket.broadcast.emit("typing", res)
})
};
