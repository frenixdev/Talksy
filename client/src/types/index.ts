export interface MsgType {
  type: "msg"
  user: string;
  msg: string;
}
export interface EventType {
  type: "event"
  event: "join" | "left" ;
  user: string;
}


