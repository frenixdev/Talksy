import { useShallow } from "zustand/shallow";
import UserName from "./components/AskUser/UserName";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import MessageBox from "./components/MessageBox/MessageBox";
import { useChatStore } from "./store/chat.store";
import { useEffect } from "react";
import Header from "./components/header/Header";

function App() {
  const {user ,initalizeSocket , getUser, disconnectSocket} = useChatStore(useShallow(s =>({
    user: s.user,
    initalizeSocket: s.initializeSocket,
    getUser: s.getUser,
    disconnectSocket: s.disconnect
  })))

  useEffect(()=> {
    initalizeSocket()
    getUser()
    return disconnectSocket
  },[])
  return (
    <>
    <div className="bg-black/40 fixed -z-10 inset-0"></div>
    {
      !user &&
      <UserName/>
    }
    <main className=" h-screen max-w-2xl mx-auto flex flex-col relative">
      <Header />
      <ChatScreen />
      <MessageBox />
    </main>
    </>
  );
}

export default App;
