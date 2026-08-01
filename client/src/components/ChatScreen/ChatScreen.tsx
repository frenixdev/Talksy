import { msgs } from "../../dummy/data.ts";
import Message from "../Message/Message.js";
const ChatScreen = () => {
  return (
    <div className=" relative overflow-scroll w-full p-3  h-4/5 ">
      <ul className="w-full flex flex-col gap-3 overflow-scroll">
      {msgs.map((m) => (
        <Message key={m.user + Math.floor(Math.random() * 889348)} {...m} isAuthor={m.user === "frenix"}/>
      ))}
      </ul>
    </div>
  );
};

export default ChatScreen;
