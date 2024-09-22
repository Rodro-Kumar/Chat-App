import React from "react";
import LeftSideBar from "../Component/LeftSideBar";
import ChatBar from "../Component/ChatBar";
import RightSideBar from "../Component/RightSideBar";

const Chat = () => {
  return (
    <div className="min-h-[100vh] w-full">
      <div className="">
        {/* parent */}
        <div className="flex items-center justify-center h-[100vh]">
          <div className="flex w-full h-full">
            {/* child */}
            <LeftSideBar />
            <ChatBar />
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
