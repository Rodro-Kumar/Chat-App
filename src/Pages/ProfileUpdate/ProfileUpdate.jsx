import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
const ProfileUpdate = () => {
  const [image, setimage] = useState("");

  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-center flex-col h-[100vh]">
          <div className="bg-[#5C4033]  p-12 rounded-lg w-[75%]">
            <div className="flex items-center justify-between gap-x-16">
              {/* left side profile details */}
              <div className="w-full">
                <h5 className="font-popppins font-medium text-white capitalize text-2xl">
                  Profile details
                </h5>
                <div className="py-3">
                  <label className="flex items-center gap-x-1">
                    <div className="size-12 rounded-full overflow-hidden">
                      <img
                        src={image ? URL.createObjectURL(image) : avatar}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <input
                      type="file"
                      accept=".png,.jpg,.jpeg"
                      hidden
                      onChange={(event) => {
                        const file = event.target.files[0];
                        if (file) {
                          setimage(file);
                        }
                      }}
                    />
                    <span className="font-popppins font-normal text-md text-[#c2c2c2]">
                      upload profile image
                    </span>
                  </label>
                </div>
                {/* input field */}
                <div className="flex flex-col gap-y-3">
                  <input
                    type="text"
                    placeholder="your name"
                    className="bg-transparent py-3 px-3 border-[1px] border-white text-white placeholder:font-popppins placeholder:text-[#d3d3d3]"
                  />
                  <textarea
                    placeholder="write your bio"
                    maxLength={"150"}
                    className="max-h-40 min-h-20 bg-transparent border-[1px] border-white py-3 px-2 text-white placeholder:text-[#d3d3d3] placeholder:font-popppins"
                  ></textarea>
                  <button className="font-popppins font-medium text-md text-[#5C4033] bg-[#f3e0bf] py-3 w-full hover:bg-[#fcdfad] transition-all">
                    {" "}
                    Save
                  </button>
                </div>
              </div>
              {/* right side profile img show */}
              <div>
                <div className="size-40 rounded-full overflow-hidden border-2 border-[#fcdfad]">
                  <img
                    src={image ? URL.createObjectURL(image) : avatar}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
