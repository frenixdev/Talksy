import { useState } from "react";
import { GoPaperAirplane } from "react-icons/go";

const MessageBox = () => {
  const [msg, setMsg] = useState("");
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };
  return (
    <div className="w-full  h-15 p-2 absolute left-0 bottom-0 right-0  flex px-10 items-center justify-center gap-5">
      <input
        className="border border-zinc-700 text-zinc-200 focus:border-purple-500 focus:caret-purple-400 rounded-full focus:outline-0 w-1/2 h-full px-5 py-2"
        type="text"
        value={msg}
        onChange={onchangeHandler}
      />

      <button className="bg-purple-600 hover:bg-purple-800 transition-all duration-150 ease-in-out rounded-full overflow-hidden h-full aspect-square text-2xl text-zinc-200 flex items-center justify-center cursor-pointer ">
        <GoPaperAirplane className="tracking-tighter"/>
      </button>
    </div>
  );
};

export default MessageBox;
