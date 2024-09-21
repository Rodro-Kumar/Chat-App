import React from "react";
import img from "../../assets/google.png";
import img2 from "../../assets/chris-lee-70l1tDAI6rM-unsplash 2.png";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { IoImage } from "react-icons/io5";

const ChatBar = () => {
  return (
    <div className="w-[50%] bg-purple-50 h-full relative overflow-hidden">
      {/* top */}
      <div className="border-b-2 py-3 px-3 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <div className="size-[40px] rounded-full overflow-hidden">
            <img src={img} alt="" className="w-full h-full" />
          </div>
          <div>
            <h4 className="text-base font-popppins font-medium text-black">
              Rodro Karmakar
            </h4>
            <div className="flex items-center gap-x-1">
              <h5 className="text-[10px] font-popppins font-normal text-black leading-none">
                Active
              </h5>
              <div className="size-[6px] rounded-full bg-green-600"></div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-green-700 text-2xl cursor-pointer">
            <HiOutlineDotsVertical />
          </span>
        </div>
      </div>
      {/* chat message */}
      <div className="px-3 absolute bottom-16 w-full">
        {/* reciver */}
        <div className="flex items-center gap-x-3">
          <div>
            <div className=" size-[25px] rounded-full overflow-hidden leading-none">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <h5 className="text-[10px] font-popppins font-normal text-green-600">
              2:00 PM
            </h5>
          </div>
          <div className="py-2 bg-green-500 px-2 rounded-t-lg rounded-br-lg">
            <h4 className="leading-none">message</h4>
          </div>
        </div>
        {/* sender */}
        <div className="flex items-center gap-x-3 flex-row-reverse">
          <div>
            <div className=" size-[25px] rounded-full overflow-hidden leading-none">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <h5 className="text-[10px] font-popppins font-normal text-green-600">
              2:00 PM
            </h5>
          </div>
          <div className="py-2 bg-green-500 px-2 rounded-t-lg rounded-bl-lg">
            <h4 className="leading-none">message</h4>
          </div>
        </div>
        {/* sender  img*/}
        <div className="flex items-end gap-x-3 flex-row-reverse">
          <div>
            <div className=" size-[25px] rounded-full overflow-hidden leading-none">
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
            <h5 className="text-[10px] font-popppins font-normal text-green-600">
              2:00 PM
            </h5>
          </div>
          <div className="rounded-t-lg rounded-bl-lg size-[187px] overflow-hidden">
            <img src={img2} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      {/* chat input */}
      <div className="flex items-center absolute bottom-0 left-0 w-full">
        <div className="w-full relative">
          <input
            type="text"
            className="bg-slate-200 w-full pl-4 pr-[110px] py-3 placeholder:font-popppins placeholder:text-sm"
            placeholder="Send a message"
          />
          <div className="flex items-center gap-x-3 absolute right-5 top-[50%] -translate-y-[50%]">
            <span className="text-yellow-500 text-3xl cursor-pointer">
              <IoImage />
            </span>
            <span className="text-sky-600 text-3xl cursor-pointer">
              <FaTelegramPlane />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
