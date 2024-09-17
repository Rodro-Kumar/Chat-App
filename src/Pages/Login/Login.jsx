import React, { useState } from "react";
import googleLogo from "../../assets/google.png";

const Login = () => {
  const [check, setcheck] = useState(false);
  const [signIn, setsignIn] = useState(false);

  const HandleCheckBox = () => {
    setcheck(!check);
  };

  const HandleLogin = () => {
    setsignIn(!signIn);
  };
  return (
    <div id="login">
      <div className="container">
        <div
          className={`flex items-center justify-between h-[100vh] rounded-lg p-5`}
        >
          <div id="logiLeftBg" className={` h-full w-[50%]`}></div>

          <div
            className={`w-[45%] flex flex-col items-start justify-center h-full    rounded-r-xl`}
          >
            <form action="#" className="w-full">
              {signIn ? (
                <div>
                  <h3 className="font-popppins font-medium text-[32px] text-black">
                    Welcome back!
                  </h3>
                  <p className="font-popppins font-medium text-base text-black">
                    Enter your Credentials to access your account
                  </p>
                </div>
              ) : (
                <h3 className="font-popppins font-medium text-[32px] text-black">
                  Get Started Now
                </h3>
              )}

              <div className="pt-11 w-[75%]">
                {signIn ? (
                  <div>
                    {/* email */}
                    <h5 className="font-popppins font-medium text-sm text-black pb-1 pt-6">
                      Email address
                    </h5>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      className="w-full placeholder:text-sm placeholder:font-popppins placeholder:font-medium placeholder:text-[#D9D9D9] bg-transparent py-2 pl-[10px] rounded-xl border-2 border-[#D9D9D9] font-popppins"
                    />
                    {/* password */}
                    <div className="flex items-center pt-6 justify-between">
                      <h5 className="font-popppins font-medium text-sm text-black pb-1">
                        Password
                      </h5>
                      <h5 className="cursor-pointer hover:underline font-popppins font-medium text-[10px] text-[#0C2A92]">
                        forgot password
                      </h5>
                    </div>
                    <input
                      type="text"
                      placeholder="password"
                      name="password"
                      id="password"
                      className="w-full placeholder:text-sm placeholder:font-popppins placeholder:font-medium placeholder:text-[#D9D9D9] bg-transparent py-2 pl-[10px] rounded-xl border-2 border-[#D9D9D9] font-popppins"
                    />
                  </div>
                ) : (
                  <div>
                    {/* name */}
                    <h5 className="font-popppins font-medium text-sm text-black pb-1">
                      Name
                    </h5>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      className="w-full placeholder:text-sm placeholder:font-popppins placeholder:font-medium placeholder:text-[#D9D9D9] bg-transparent py-2 pl-[10px] rounded-xl border-2 border-[#D9D9D9] font-popppins"
                    />
                    {/* email */}
                    <h5 className="font-popppins font-medium text-sm text-black pb-1 pt-6">
                      Email address
                    </h5>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      className="w-full placeholder:text-sm placeholder:font-popppins placeholder:font-medium placeholder:text-[#D9D9D9] bg-transparent py-2 pl-[10px] rounded-xl border-2 border-[#D9D9D9] font-popppins"
                    />
                    {/* password */}
                    <div className="flex items-center pt-6 justify-between">
                      <h5 className="font-popppins font-medium text-sm text-black pb-1">
                        Password
                      </h5>
                      <h5 className="cursor-pointer hover:underline font-popppins font-medium text-[10px] text-[#0C2A92]">
                        forgot password
                      </h5>
                    </div>
                    <input
                      type="text"
                      placeholder="password"
                      name="password"
                      id="password"
                      className="w-full placeholder:text-sm placeholder:font-popppins placeholder:font-medium placeholder:text-[#D9D9D9] bg-transparent py-2 pl-[10px] rounded-xl border-2 border-[#D9D9D9] font-popppins"
                    />
                  </div>
                )}

                {/* term */}
                <div className="flex items-center gap-x-2 pt-5">
                  <div className="relative">
                    <div
                      onClick={HandleCheckBox}
                      className="bg-transparent border-2 border-black w-[14px] h-[14px] rounded"
                    ></div>
                    <div
                      className={`absolute top-0 left-0 rounded -z-10 w-full h-full bg-[#3A5B22] ${
                        check
                          ? "opacity-100 transition-all"
                          : "opacity-0 transition-all"
                      }`}
                    ></div>
                  </div>

                  <span className="font-popppins font-medium text-black text-sm">
                    I agree to the terms & policy
                  </span>
                </div>
                {/* sign up button */}
                <button className="w-full py-[6px] font-popppins font-bold text-sm text-white text-center rounded-md mt-7 bg-[#3A5B22] transition-all hover:bg-[#477029]">
                  {signIn ? "Login" : "Signup"}
                </button>
                {/* or */}
                <div className="pt-14 pb-7 flex items-center gap-x-1">
                  <div className="h-[2px] bg-[#D9D9D9] w-full"></div>
                  <span className="font-popppins font-medium text-sm text-black">
                    Or
                  </span>
                  <div className="h-[2px] bg-[#D9D9D9] w-full"></div>
                </div>

                {/* Sign in with Google */}
                <div className="flex cursor-pointer justify-center transition-all hover:bg-[#D9D9D9] items-center gap-x-2 py-[7px] px-5 border-2 border-[#D9D9D9] rounded-lg">
                  <img src={googleLogo} alt={googleLogo} />
                  <span className="font-popppins font-medium text-xs text-black">
                    {signIn ? "  Sign in with Google" : "  Sign up with Google"}
                  </span>
                </div>
                {/* Have an account?  Sign In */}
                <div className="flex pt-5 justify-center items-center gap-x-3 font-popppins font-medium text-sm">
                  <h4 className="text-black">
                    {" "}
                    {signIn ? "Don’t have an account?" : "Have an account?"}
                  </h4>
                  <span
                    onClick={HandleLogin}
                    className="text-[#0F3DDE] hover:underline cursor-pointer"
                  >
                    {signIn ? "Sign Up" : "Sign In "}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
