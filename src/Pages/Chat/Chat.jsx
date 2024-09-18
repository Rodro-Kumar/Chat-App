import React from "react";
import LeftSideBar from "../Component/LeftSideBar";
import ChatBar from "../Component/ChatBar";
import RightSideBar from "../Component/RightSideBar";

const Chat = () => {
  return (
    <div className="min-h-[100vh] w-full bg-gradient-to-r from-[#640D5F] from-10% via-[#800f7a] via-30% to-[#880f82] to-90%">
      <div className="container">
        {/* parent */}
        <div className="flex items-center justify-center h-[100vh]">
          <div className="flex w-[95%] max-w-[2000px] h-[75vh] bg-red-600">
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
