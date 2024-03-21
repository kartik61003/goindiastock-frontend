import Image from "next/image";

const StoriesCard = ({ stories }) => {
  return (
    <>
      {stories.map((curElem) => {
        const { id, storyImage, heading, content } = curElem;
        return (
          <>
            <div
              key={id}
              className="max-md:w-full w-2/3  md-max:h-3/6 h-3/9 p-4 flex flex-col shadow-lg items-center md:mx-5 "
            >
              <Image
                className=" max-md:w-full w-4/6 "
                src={storyImage}
                width={70}
                height={70}
                alt="image"
              ></Image>

              <div className="content max-md:w-full w-1/2">
                <h1 className="font-bold text-base">{heading}</h1>
                <p className=" text-sm  text-stone-800 max-md:text-base text-justify">
                  {content} 
                </p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default StoriesCard;
