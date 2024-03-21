"use client";

import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [isSidebar, setisSidebar] = useState(false);
  const sidebar = () => {
    setisSidebar((prev) => !prev);
  };
  return (
    <>
      <div
        className={`sidebar w-0 max-md: max-md:fixed relative top-0 z-50 bg-[#1e375f] max-md:w-0 h-[100vh] ${
          isSidebar && "w-[35%] duration-150 max-md:w-[70%] max-sm:w-[80%]"
        } duration-150 z-50`}
      >
        <div
          className={`mt-7 flex op opacity-0 justify-between px-5 items-center ${
            isSidebar && "opacity-100"
          }`}
        >
          <Image
            className="rounded-full"
            src={"/user-acc.jpg"}
            alt=""
            height={40}
            width={40}
          />
          <h2 className="font-bold text-2xl absolute ml-12 text-white">
            Hello, User
          </h2>
          <Image
            className="rounded-full"
            src={"/notification.png"}
            alt="notification"
            height={40}
            width={40}
          />
        </div>
        <hr className="mt-3" />
        <div
          className={`flex opacity-0 items-center gap-6 mt-4 ml-5 ${
            isSidebar && "opacity-100"
          }`}
        >
          <Image
            className="rounded-md"
            src={"/message.png"}
            alt="message"
            height={30}
            width={30}
          />
          <h2 className="text-white text-xl font-bold">Discussion Form</h2>
          <Image
            className="rounded-md ml-20 cursor-pointer"
            src={"/downarrow.png"}
            alt="downarrow"
            height={20}
            width={20}
          />
        </div>
        <div
          className={`flex opacity-0 items-center gap-6 mt-4 ml-5  ${
            isSidebar && "opacity-100"
          }`}
        >
          <Image
            className="rounded-full bg-white"
            src={"/dollar.png"}
            alt="dollar"
            height={30}
            width={30}
          />
          <h2 className="text-white text-xl font-bold ">Discussin Form</h2>
        </div>
        <div
          className={`flex opacity-0 flex-col  gap-3 mt-5 ml-20  ${
            isSidebar && "opacity-100"
          }`}
        >
          <h5 className="text-[17px] text-white cursor-pointer font-semibold ">
            Sentiment
          </h5>
          <h5 className="text-[17px] text-white cursor-pointer font-semibold ">
            Market
          </h5>
          <h5 className="text-[17px] text-white cursor-pointer font-semibold ">
            Sector
          </h5>
          <h5 className="text-[17px] text-white cursor-pointer font-semibold ">
            Watchlist
          </h5>
          <h5 className="text-[17px] text-white cursor-pointer font-semibold ">
            Events
          </h5>
          <h5 className="text-[17px] text-white cursor-pointer font-semibold ">
            News/Interview
          </h5>
        </div>
      </div>
      <div
        className={`sidebarArrow z-10 fixed top-[44%]  left-0 bg-[#1e375f] w-4 h-20 cursor-pointer ${
          isSidebar &&
          "md:ml-[27.5%] max-md:ml-[70%] max-sm:ml-[80%] max-md:top-[44%] duration-200"
        } `}
        onClick={sidebar}
      >
        <Image
          className={`rounded-md -rotate-90 duration-150 mt-6  ${
            isSidebar && "rotate-90 duration-150"
          }`}
          src={"/downarrow.png"}
          alt="downarrow"
          height={40}
          width={40}
        />
      </div>
    </>
  );
};

export default Sidebar;
