import { create } from "zustand";
import { socket } from "../services/socket";
import type { EventType, MsgType } from "../types";

type ChatStore = {
  user: string;
  msgs: (MsgType | EventType)[];
  typingEvent: string[];

  getUser: () => void;
  setUser: (name: string) => void;
  initializeSocket: () => void;
  send: (msg: string) => void;
  disconnect: () => void;
  startTyping: () => void;
  stopTyping: () => void;
};

const useChatStore = create<ChatStore>((set, get) => ({
  user: "",
  msgs: [],
  typingEvent: [],
  getUser: () => {
    const localUser = localStorage.getItem("user");
    if (!localUser) return;
    set({ user: localUser });
  },
  setUser: (name) => {
    localStorage.setItem("user", name);
    set({ user: name });
  },
  initializeSocket: () => {
    socket.connect();
    socket.off("join");
    socket.off("connect");
    socket.off("receive-msg");
    socket.off("typing");
    socket.off("stop-tying");

    socket.on("connect", () => {
      socket.emit("join", {
        type: "event",
        user: get().user,
        event: "join",
      });
    });
    socket.on("leave", (data: EventType) => {
      set((s) => ({
        msgs: [...s.msgs, data],
      }));
    });

    socket.on("join", (data: EventType) => {
      set((s) => ({
        msgs: [...s.msgs, data],
      }));
    });

    socket.on("receive-msg", (msg: MsgType) => {
      set((s) => ({ msgs: [...s.msgs, msg] }));
    });

    socket.on("typing", (data: { username: string }) => {
      set((s) => ({ typingEvent: [...s.typingEvent, data.username] }));
    });

    socket.on("stop-typing", (data: { username: string }) => {
      set((s) => ({
        typingEvent: s.typingEvent.filter((d) => d !== data.username),
      }));
    });

  },
  send: (message: string) => {
    const msgObj: MsgType = {
      type: "msg",
      user: get().user,
      msg: message,
    };
    socket.emit("send-msg", msgObj);
    console.log("send ", message);
    set((s) => ({ msgs: [...s.msgs, msgObj] }));
  },
  startTyping: () => {
    socket.emit("typing", {
      user: get().user,
    });
  },
  stopTyping: () => {
    socket.emit("stop-typing", {
      user: get().user,
    });
  },
  disconnect: () => {
    socket.disconnect();
  },
}));

export { useChatStore };
