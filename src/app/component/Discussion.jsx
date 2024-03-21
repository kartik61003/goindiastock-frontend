import DiscussionCard from "./DiscussionCard";
import { useState } from "react";
import DiscussionApi from "../assets/DiscussionApi";

const Discussion = () => {
  const [discussions, setDiscussion] = useState(DiscussionApi);
  return (
    <div className="relative flex flex-col basis-2/4 px-7 h-[100vh]">
      <h2 className="max-md:hidden text-red-300 text-4xl font-bold w-[50%] max-md:w-[80%] bg-slate-300 p-2 items-center text-center ml-4 mt-4 shadow-lg">
        Discussion Forum
      </h2>
      <div className="overflow-y-scroll max-h-screen ">
        <DiscussionCard discussions={discussions} />
      </div>
    </div>
  );
};

export default Discussion;
