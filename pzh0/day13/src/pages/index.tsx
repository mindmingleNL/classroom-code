const Page = () => {
  return (
    <div className="bg-pink-600 md:bg-blue-600">
      <nav>
        <ul className="flex flex-col md:flex-row justify-center gap-0 md:gap-16 py-8 text-center">
          <li className="text-xl text-white hover:bg-pink-700 border-b-pink-700 border-b md:border-none">
            <a className="py-4 w-full inline-block" href="#">
              Home
            </a>
          </li>
          <li className="text-xl text-white hover:bg-pink-700 md:hover:bg-blue-700 border-b-pink-700 border-b md:border-none">
            <a className="py-4 w-full inline-block" href="#">
              About
            </a>
          </li>
          <li className="text-xl text-white hover:bg-pink-700">
            <a className="py-4 w-full inline-block" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className=" h-screen w-screen flex justify-center items-center">
        <h1 className="text-pink-200 md:text-[#AEF0FE] text-3xl md:text-5xl font-bold">
          Hello World 👋
        </h1>
      </div>
    </div>
  );
};

export default Page;
