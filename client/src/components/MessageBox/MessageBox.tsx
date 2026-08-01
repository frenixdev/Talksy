import { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";
import { useChatStore } from "../../store/chat.store";
import { useShallow } from "zustand/shallow";

const MessageBox = () => {
  const [msg, setMsg] = useState("");
  const {send} = useChatStore(useShallow(s =>({
    send: s.send
  })))
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };
  const handlerBtnClick = ()=>{
    if(!msg) return
    send(msg)
    setMsg("")
  }
  return (
    <div className="  flex px-2 items-center justify-center gap-5 ">
      <input
        className="focus:bg-fuchsia-800/10 transition-all duration-150 border  border-purple-200 text-zinc-200 focus:border-purple-500 focus:caret-purple-400 rounded-full outline-0 flex-1  h-full px-5 py-3"
        type="text"
        autoComplete="off"
        value={msg}
        onChange={onchangeHandler}
      />

      <button
      onClick={handlerBtnClick}
      className="bg-purple-600 hover:bg-purple-800 transition-all duration-150 ease-in-out rounded-full overflow-hidden h-full aspect-square text-2xl text-zinc-200 flex items-center justify-center cursor-pointer ">
        <GoPaperAirplane className="tracking-tighter" />
      </button>
    </div>
  );
};

export default MessageBox;
