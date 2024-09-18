import React from "react";
import chatLogo from "../../assets/chatlogo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

const LeftSideBar = () => {
  return (
    <div className="w-[25%] h-full bg-[#16423C] pb-4">
      <div className="flex items-center justify-between py-4 px-3">
        <div className="flex items-center gap-x-1">
          <img src={chatLogo} alt={chatLogo} className="w-[60px]" />
          <h5 className="font-popppins font-medium text-white text-xl capitalize">
            Chatapp
          </h5>
        </div>
        <div>
          <span className="text-white text-2xl cursor-pointer">
            <BsThreeDotsVertical />
          </span>
        </div>
      </div>
      {/* serach bar */}
      <div className="mb-5">
        <div className="relative">
          <span className="text-white text-2xl absolute top-[50%] -translate-y-[50%] left-2">
            <IoMdSearch />
          </span>
          <input
            type="text"
            className="w-full py-3 pl-10 font-popppins placeholder:text-sm placeholder:font-popppins text-sm border-y-[2px] border-y-[#2d8579] placeholder:font-normal bg-[#225c54] text-white"
            placeholder="search here..."
          />
        </div>
      </div>

      {/* user */}
      <div id="user" className="overflow-y-scroll h-[70%]">
        <div className="flex flex-col">
          {Array(12)
            .fill("")
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-x-2 px-3 py-3 cursor-pointer hover:bg-[#6A9C89]"
              >
                <div className="w-[40px] rounded-full overflow-hidden bg-red-500">
                  <img src={chatLogo} alt="" className="w-full" />
                </div>
                <div className="leading-none text-white font-popppins">
                  <h3 className="text-sm">Rodro Karmakar</h3>
                  <p className="text-xs text-[#d1d1d1]">Hi</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
