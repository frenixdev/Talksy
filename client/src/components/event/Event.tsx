import type { EventType } from "../../types";
type Props = {
  client: string;
} & EventType;

const Event = ({ event, user, client }: Props) => {
  return (
    <li className=" w-full ">
      <p className="text-center tracking-wide bg-zinc-800 text-sm italic w-fit rounded-2xl mx-auto px-5 py-1">
        {user === client ? "You" : user} {event === "join" ? "joined" : "left"}
      </p>
    </li>
  );
};

export default Event;
