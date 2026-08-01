import type { MsgType } from "../../types";
import "./style.css";
type Props = {
  isAuthor: boolean;
} & MsgType;
const Message = ({ user, msg, isAuthor }: Props) => {
  return (
    <li
      className={`msg relative bg-purple-900/40 border-fuchsia-700 border  flex flex-col grow-0  w-fit max-w-2/3 rounded-[10% 20%] select-none ${isAuthor ? "self-end px-3 py-2 " : "pr-4 pt-1 pb-2 pl-2"}`}
    >{
      !isAuthor &&
      <p className="text-xs text-rose-600 italic tracking-wide font-semibold  w-fit  ">
        {user}
      </p>
      }
      <p className={`font-semibold text-md tracking-tight  w-fit ${isAuthor ? "":"ml-4"}`}>{msg}</p>
    </li>
  );
};

export default Message;
