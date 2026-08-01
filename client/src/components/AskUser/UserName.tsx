import Input from "../Input/Input";

const UserName = () => {
  
  const setNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="fixed z-999 bg-black/70 inset-0 grid place-items-center">
      <div className="max-w-100 w-4/5 border border-violet-700 rounded-md p-3 bg-purple-950/60 space-y-5">
        <h2 className="text-xl md:text-2xl text-center font-bold tracking-wider ">
          Enter username
        </h2>
        <div className="w-full px-5">
          <Input className="w-full" handler={setNameHandler} />
        </div>
        <button className="px-10 py-2 bg-violet-700/80 rounded-3xl text-md font-semibold mx-auto block border cursor-pointer hover:bg-violet-600 active:bg-violet-900 transition-all duration-150 ease-in-out border-violet-400">Join</button>
      </div>
    </div>
  );
};

export default UserName;
