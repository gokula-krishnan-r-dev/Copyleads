import React from "react"

const Signup = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row">
      <div className="flex-1 md:flex hidden relative w-full h-full  ">
        <img className="h-screen w-full" src="/Image/SiginCover.png" alt="" />
        <div className="absolute text-white px-4 lg:px-24 md:px-8  bottom-24">
          <h6 className="text-center text-[22px] leading-[42px] font-medium">
            Welcome
          </h6>
          <p className="md:text-lg text-[16px] font-normal text-center md:text-justify">
            CopyLeads.ai is a Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse porta tristique velit, volutpat commodo sapien
            sagittis vitae. Sed sagittis, justo eget ornare commodo, felis ex
            porta lectus, eu feugiat purus augue vitae massa. Aenean cursus
            suscipit dictum. Vivamus finibus tellus faucibus justo gravida.
          </p>
        </div>
      </div>
      <div className="flex-1">
        <h5 className="not-italic p-8 ml-3 font-medium text-2xl leading-9 text-gray-700">
          COPYLEADS.AI
        </h5>
        <div className="flex items-center justify-center mx-auto  w-full flex-col">
          <div className="md:w-[80%] lg:w-[60%] md:px-0 px-6 w-full mt-2">
            <h3 className=" font-normal py-2 text-center text-xl leading-7 text-gray-700">
              Login or Signup
            </h3>
            <div className="mt-2">
              <button className="bg-[#2FA2F5]  flex items-center justify-between w-full  py-2.5 rounded-[6px] px-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_58_1203)">
                    <path
                      d="M19.5312 10.2266C19.5312 15.7539 15.7461 19.6875 10.1562 19.6875C4.79688 19.6875 0.46875 15.3594 0.46875 10C0.46875 4.64062 4.79688 0.3125 10.1562 0.3125C12.7656 0.3125 14.9609 1.26953 16.6523 2.84766L14.0156 5.38281C10.5664 2.05469 4.15234 4.55469 4.15234 10C4.15234 13.3789 6.85156 16.1172 10.1562 16.1172C13.9922 16.1172 15.4297 13.3672 15.6562 11.9414H10.1562V8.60938H19.3789C19.4688 9.10547 19.5312 9.58203 19.5312 10.2266Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_58_1203">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h5 className="not-italic font-normal text-base leading-6 uppercase text-white">
                  Google
                </h5>
                <div />
              </button>
              <button className="bg-[#005CB0]  mt-2  flex items-center justify-between w-full py-2.5 rounded-[6px] px-6">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_58_1207)">
                    <path
                      d="M19.6875 10C19.6875 4.64844 15.3516 0.3125 10 0.3125C4.64844 0.3125 0.3125 4.64844 0.3125 10C0.3125 14.8352 3.85508 18.843 8.48633 19.5703V12.8004H6.02539V10H8.48633V7.86562C8.48633 5.43789 9.93164 4.09687 12.1453 4.09687C13.2055 4.09687 14.3141 4.28594 14.3141 4.28594V6.66875H13.0922C11.8891 6.66875 11.5137 7.41562 11.5137 8.18164V10H14.2004L13.7707 12.8004H11.5137V19.5703C16.1449 18.843 19.6875 14.8352 19.6875 10Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_58_1207">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h5 className="not-italic font-normal text-base leading-6 uppercase text-white">
                  Facebook
                </h5>
                <div />
              </button>
              <button className="bg-[#151515] mt-2 flex items-center justify-between w-full py-2.5 rounded-[6px] px-6">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9492 9.49609C12.9414 8.0625 13.5898 6.98047 14.9023 6.18359C14.168 5.13281 13.0586 4.55469 11.5938 4.44141C10.207 4.33203 8.69141 5.25 8.13672 5.25C7.55078 5.25 6.20703 4.48047 5.15234 4.48047C2.97266 4.51562 0.65625 6.21875 0.65625 9.68359C0.65625 10.707 0.84375 11.7643 1.21875 12.8555C1.71875 14.2891 3.52344 17.8047 5.40625 17.7461C6.39062 17.7227 7.08594 17.0469 8.36719 17.0469C9.60938 17.0469 10.2539 17.7461 11.3516 17.7461C13.25 17.7188 14.8828 14.5234 15.3594 13.0859C12.8125 11.8867 12.9492 9.57031 12.9492 9.49609ZM10.7383 3.08203C11.8047 1.81641 11.707 0.664062 11.6758 0.25C10.7344 0.304688 9.64453 0.890625 9.02344 1.61328C8.33984 2.38672 7.9375 3.34375 8.02344 4.42188C9.04297 4.5 9.97266 3.97656 10.7383 3.08203Z"
                    fill="white"
                  />
                </svg>

                <h5 className="not-italic font-normal text-base leading-6 uppercase text-white">
                  Apple
                </h5>
                <div />
              </button>
            </div>{" "}
            <h3 className=" font-normal py-8 text-center text-xl leading-7 text-gray-700">
              OR
            </h3>
            <div className="relative pb-1">
              <label
                for="first_name"
                class="block ml-1 mb-2 text-sm font-medium text-[#48535F] "
              >
                Sign Up
              </label>
              <input
                type="text"
                id="FullName"
                className=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                placeholder="Full Name"
              />
            </div>
            <div className="relative mt-2 pb-1">
              <input
                type="email"
                id="email"
                className=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                placeholder="Email"
              />
            </div>
            <div className="relative pb-1 mt-2">
              <input
                type="password"
                id="password"
                class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                placeholder="Password"
              />
            </div>
            <div className="relative pb-1 mt-2">
              <input
                type="password"
                id="password"
                class="text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                placeholder="Confirm Password"
              />
            </div>
            <div className="py-2 space-x-2 flex px-1 items-center">
              <input className="w-[14px] h-[14px]" type="checkbox" />
              <span className="not-italic font-light leading-4 text-justify text-gray-600">
                Remember Me
              </span>
            </div>
            <button
              type="submit"
              className="py-2 mb-3 mt-3 rounded-[6px] w-full text-base leading-5 font-normal text-white bg-[#48535F] px-6"
            >
              Submit
            </button>
            <div className="flex items-center justify-between">
              <div />
              <button className="not-italic font-normal underline text-base leading-6 text-justify text-gray-600">
                Forgot Password?
              </button>
            </div>
            <div className="h-[1px] border md:my-4 my-2 border-[#525D6966]" />
            <h4 className="not-italic mt-2 mb-0 text-center font-normal text-sm leading-5  text-gray-700">
              Don’t have an account?{" "}
              <button className="text-[#48535F] font-semibold">
                Create a new
              </button>{" "}
              one for Free.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
