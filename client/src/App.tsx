import UserName from "./components/AskUser/UserName";
import ChatScreen from "./components/ChatScreen/ChatScreen";
import Header from "./components/Header/Header";
import MessageBox from "./components/MessageBox/MessageBox";

function App() {
  const username = false
  return (
    <>
    <div className="bg-black/40 fixed -z-10 inset-0"></div>
    {
      !username &&
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
