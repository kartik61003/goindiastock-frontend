import StoriesCard from "./StoriesCard";
import StoriesApi from "../assets/storiesApi.js";
import { useState } from "react";

const Stories = () => {
  const [stories, setStories] = useState(StoriesApi);
  return (
    <>
      <div className="relative flex flex-col basis-2/5 h-[100vh] ">
        <h3 className="max-md:hidden text-red-300 text-3xl font-bold bg-slate-300 w-[50%] max-md:w-[80%] p-2 items-center text-center ml-4 mt-4 shadow-lg">
          Market Stories
        </h3>
        <div className=" flex flex-col overflow-y-scroll max-h-screen gap-9">
          <StoriesCard stories={stories} />
        </div>
      </div>
    </>
  );
};

export default Stories;
