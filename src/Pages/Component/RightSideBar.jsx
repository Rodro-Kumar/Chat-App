import React from "react";
import img from "../../assets/chris-lee-70l1tDAI6rM-unsplash 2.png";

const RightSideBar = () => {
  return (
    <div className="w-[25%] bg-[#f3e0bf] h-full pb-8 relative">
      <div className="pt-14">
        <div className="flex flex-col items-center justify-center">
          {/* user img */}
          <div className="size-36 rounded-full overflow-hidden">
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
          {/* user name */}
          <div className="flex flex-col items-center justify-center gap-y-1 pb-6 pt-4 border-b-2 border-b-[#5c403357] w-full">
            {" "}
            <h4 className="font-popppins font-medium text-lg text-[#5C4033] leading-none">
              Rodro Karmakar
            </h4>
            <p className="leading-none font-popppins font-normal text-xs text-[#5C4033]">
              Hey, There i am using chat app
            </p>
          </div>
        </div>

        {/* media */}
        <div className="flex flex-col items-start justify-start px-5 pt-4">
          <h5 className="font-popppins font-medium text-sm text-[#5C4033] pb-2">
            Media
          </h5>
          {/* all img */}
          <div className="grid grid-cols-4 gap-2">
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
            <img
              src={img}
              alt=""
              className="size-20 rounded-md cursor-pointer"
            />
          </div>
        </div>
        {/* log out */}
        <div className="px-5 absolute bottom-5 w-full">
          <button className="font-popppins font-normal transition-all active:scale-95 hover:bg-[#704e3e] bg-[#5C4033] text-white py-2 rounded-2xl w-full">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
