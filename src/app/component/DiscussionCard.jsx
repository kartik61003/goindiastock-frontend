import Image from "next/image";

const DiscussionCard = ({ discussions }) => {
  return (
    <>
      {discussions.map((curElem) => {
        const { id, accImg, name, comment } = curElem;
        return (
          <>
            <div key={id} className="shadow-lg mt-5 mx-2"  >
              <div className="userDetails flex items-center gap-6 ">
                <Image
                  className={`rounded-md duration-150 ml-2 mt-2`}
                  src={accImg}
                  alt="downarrow"
                  height={40}
                  width={40}
                />
                <h3 className="max-md:text-sm max-sm:text-[14px]">{name}</h3>
                <p
                  className={`bg-blue-500 rounded-xl px-3 text-sm text-white max-md:text-sm max-sm:text-[10px] `}
                >
                  Sector 2
                </p>
                <p className={`text-blue-500`}>2 mins ago</p>
              </div>
              <p className="commentSection mx-14 w-[70%] text-wrap max-md:text-sm">
                {comment}
              </p>
              <div className="shareLike flex items-center gap-10 ml-10  max-md:text-[10px] max-md:gap-9">
                <div className=" mt-3  gap-2 max-md:gap-1   flex items-center">
                  <Image
                    className={`cursor-pointer rounded-md duration-150 `}
                    src={"/heart.png"}
                    alt="downarrow"
                    height={20}
                    width={20}
                  />
                  <p>Likes</p>
                </div>
                <div className=" mt-3 gap-1 max-md:gap-1  flex items-center">
                  <Image
                    className={`cursor-pointer rounded-md duration-150 `}
                    src={"/eye.jpg"}
                    alt="downarrow"
                    height={20}
                    width={20}
                  />
                  <p>2k</p>
                </div>
                <div className=" mt-3 gap-1 max-md:gap-1  flex items-center">
                  <Image
                    className={`cursor-pointer rounded-md duration-150 `}
                    src={"/comment.jpg"}
                    alt="downarrow"
                    height={20}
                    width={20}
                  />
                  <p>2k comments</p>
                </div>
                <div className=" mt-3 gap-1 max-md:gap-1  flex items-center">
                  <Image
                    className={`cursor-pointer rounded-md duration-150 `}
                    src={"/share.png"}
                    alt="downarrow"
                    height={20}
                    width={20}
                  />
                  <p>Shares</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default DiscussionCard;
