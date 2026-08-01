import type React from "react";
import type { HtmlHTMLAttributes } from "react";
interface Props extends HtmlHTMLAttributes<HTMLInputElement> {
  val?: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({ val, handler, className, ...props}: Props) => {
  return (
    <input
      className={`focus:bg-fuchsia-800/10 transition-all duration-150 border  border-purple-200 text-zinc-200 focus:border-purple-500 focus:caret-purple-400 rounded-full outline-0 grow  h-full px-5 py-3 ${className}`}
      onChange={handler}
      autoComplete="off"
      value={val}
      type="text"
      {...props}
    />
  );
};

export default Input;
