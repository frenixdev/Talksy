// import { msgs } from "../../dummy/data.ts";
import { useShallow } from "zustand/shallow";
import { useChatStore } from "../../store/chat.store";
import Message from "../Message/Message";
import Event from "../event/Event";
const ChatScreen = () => {
  const { user } = useChatStore(
    useShallow((s) => ({
      user: s.user,
    })),
  );
  const { msgs } = useChatStore(
    useShallow((s) => ({
      msgs: s.msgs,
    })),
  );
  if(!user ) return<></>
  return (
    <div className=" relative overflow-scroll w-full p-3  h-4/5 ">
      <ul className="w-full flex flex-col gap-2 overflow-scroll">
        {msgs.map((m) =>
          m.type === "msg" ? (
            <Message
              key={m.user + Math.floor(Math.random() * 889348)}
              {...m}
              isAuthor={m.user === user}
            />
          ) :  (
            <Event key={m.user + Math.floor(Math.random() * 889348)} {...m} client={user} />
          ),
        )}
      </ul>
    </div>
  );
};

export default ChatScreen;
