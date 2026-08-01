import logo from "../../assets/meetme.png";

const Header = () => {
  const user = "frenix";
  const username = user;
  return (
    <header className="relative top-0 flex  justify-between p-3 md:p-3">
      <div className="left flex gap-5 ">
        <div className="md:w-15 md:h-15 w-10 h-10">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-.5 md:gap-2">
          <p className="md:text-2xl text-xl font-semibold playwrite text-purple-300 leading-6 md:leading-8">
            Talksy
          </p>
          <p className="text-xs ml-2 italic text-stone-300">
            {user ? `${user} is typing...` : ""}
          </p>
        </div>
      </div>

      <div className="right   flex  flex-col items-center justify-center">
        <div className="w-6 h-6 overflow-hidden rounded-full">
          <img
            className="object-cover "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIi3UeJL4nT89uRQbd2XpeTDGpnNarwrqVLyBtVuOa9jSMVxkt28coOYE&s=10"
          />
        </div>
        <p className="font-bold text-stone-300 text-sm ">{username}</p>
      </div>
    </header>
  );
};

export default Header;
