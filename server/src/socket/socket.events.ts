import { Socket, Server } from "socket.io";
import z from "zod";
import { msgShema } from "./socket.types";
type Event = {
  type: string,
  user: string,
  event: "join" | "leave"
}
export const chatEvents = (io: Server, socket: Socket) => {

  socket.on("join", (data: Event) => {
    socket.data.user = data.user;

    const res = {
      type: "event",
      user: data.user,
      event: "join",
    };
    io.emit("join", res);
  });
  socket.on("disconnect", ()=>{
    socket.broadcast.emit("leave", {
      type:'event',
      user: socket.data.user,
      event: "leave"
    })
  })
  socket.on("send-msg", (data: z.infer<typeof msgShema>) => {
    console.log(data);
    const res = {
      type: "msg",
      user: data.user,
      msg: data.msg,
    };
    socket.broadcast.emit("receive-msg", res);
  });

  socket.on("leave", (data: Event) => {
    socket.broadcast.emit("leave", data);
  });

  socket.on("typing", (data: { user: string }) => {
    const res = {
      type: "typing",
      active: true,
      user: data.user,
    };
    socket.broadcast.emit("typing", res);
  });

  socket.on("stop-typing", (data: { user: string }) => {
    const res = {
      type: "typing",
      active: false,
      user: data.user,
    };
    socket.broadcast.emit("typing", res);
  });
};
