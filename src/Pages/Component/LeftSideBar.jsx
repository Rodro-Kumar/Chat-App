import React, { useState } from "react";
import chatLogo from "../../assets/chatlogo.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { FaHandLizard } from "react-icons/fa";

const LeftSideBar = () => {
  const [popupOpen, setpopupOpen] = useState(false);
  const HandlePopUp = () => {
    setpopupOpen(!popupOpen);
  };
  return (
    <div className="w-[25%] h-full bg-[#f3e0bf] pb-4">
      <div className="flex items-center justify-between py-4 px-3">
        <div className="flex items-center gap-x-1">
          <img src={chatLogo} alt={chatLogo} className="w-[60px]" />
          <h5 className="font-popppins font-medium text-[#5C4033] text-xl capitalize">
            Chatapp
          </h5>
        </div>
        <div className="relative">
          <span
            className="text-[#5C4033] text-2xl cursor-pointer"
            onClick={HandlePopUp}
          >
            <BsThreeDotsVertical />
          </span>
          {popupOpen && (
            <div className="absolute top-9 left-[-80px] z-[999] bg-[#5C4033] flex flex-col  text-white font-popppins font-normal text-sm py-3 px-4">
              <h4 className="pb-1 whitespace-nowrap hover:bg-[#7e5643] cursor-pointer">
                Edit profile
              </h4>
              <hr />
              <h4 className="pt-1 hover:bg-[#7e5643] cursor-pointer">Logout</h4>
            </div>
          )}
        </div>
      </div>
      {/* serach bar */}
      <div className="mb-5">
        <div className="relative">
          <span className="text-[#5C4033] text-2xl absolute top-[50%] -translate-y-[50%] left-2">
            <IoMdSearch />
          </span>
          <input
            type="text"
            className="w-full py-3 pl-10 font-popppins placeholder:text-sm placeholder:font-popppins text-sm border-y-[2px] border-y-[#ddb673] placeholder:font-normal bg-[#f0d8ae] text-[#5C4033]"
            placeholder="search here"
          />
        </div>
      </div>

      {/* user */}
      <div id="user" className="overflow-y-scroll h-[82%]">
        <div className="flex flex-col">
          {Array(12)
            .fill("")
            .map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-x-2 px-3 py-3 cursor-pointer hover:bg-[#ddb673]"
              >
                <div className="w-[40px] rounded-full overflow-hidden">
                  <img src={chatLogo} alt="" className="w-full object-cover" />
                </div>
                <div className="leading-none text-[#5C4033] font-popppins">
                  <h3 className="text-sm">Rodro Karmakar</h3>
                  <p className="text-xs text-[#5C4033]">Hi</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
