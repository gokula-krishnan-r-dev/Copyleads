import React, { useState } from "react"

const Setting = () => {
  const [comfirmation, setConfirmation] = useState(false)
  return (
    <div className=" flex items-center  justify-center md:px-0 px-6  ">
      <div className="bg-white w-full sm:w-[80%] md:w-[80%] xl:w-[621px] py-5 rounded-lg px-4 md:px-8">
        <h3 className="text-[20px] font-semibold leading-8 text-[#48535F]">
          Account Settings
        </h3>
        <div className="">
          <h4 className="text-[18px] font-medium leading-[27px] py-2 text-[#48535F]">
            Subscription
          </h4>
          <p className="text-[14px] font-normal leading-[21px] w-[100%] md:w-[50%] text-[#48535F]">
            Your workspace was created on Mar 18, 2023. You are currently on the
            monthly Free Plan plan.
          </p>
          <div className="flex items-center justify-between mt-3">
            <h5 className="text-[14px] font-normal leading-[21px] py-2 text-[#48535F]">
              Credits Spent
            </h5>
            <h6 className="text-[14px] font-normal leading-[21px]  py-2 text-[#48535F]">
              <span>944</span> / <span>2,000</span>
            </h6>
          </div>
          <div className="flex">
            <div className="bg-[#F3F3F2] w-full h-3 rounded-[3px] relative">
              <div className="absolute top-0 bg-[#8AB6A2] h-3 rounded-[3px] !w-[60%] left-0" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="md:text-[14px] text-[12px] font-normal leading-[21px] py-2 text-[#48535F]">
              Credits usage resets on Apr 18, 2023
            </h5>
            <h6 className="underline">
              <a
                className="md:text-[14px] text-[12px] font-normal leading-[21px] py-2 text-[#48535F]"
                href="#"
              >
                View Credit history
              </a>
            </h6>
          </div>
          <button className="py-3 rounded-[6px] text-base leading-5 font-medium text-white bg-[#8AB6A2] px-6">
            Upgrade Plan
          </button>
        </div>
        <div className="">
          <h4 className="text-[18px] mt-4 font-medium leading-[27px]  text-[#48535F]">
            Change Password
          </h4>
          <div className="">
            <input
              placeholder="Password"
              type="text"
              className="my-2 bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg pl-4  block w-full p-2.5 "
            />
          </div>
          <div className="">
            <input
              placeholder="Confirm Password"
              type="text"
              className="my-2 pl-4 bg-[#F3F3F2] outline-none text-[#48535FAD] text-sm rounded-lg   block w-full p-2.5 "
            />
          </div>
          <button className="py-3 mt-1 rounded-[6px] text-base leading-5 font-medium text-white bg-[#8AB6A2] px-6">
            Save Changes
          </button>
        </div>
        <div className="">
          <h4 className="text-[18px] mt-2 font-medium leading-[27px] py-2 text-[#48535F]">
            Delete Account
          </h4>
          <p className="text-[14px] font-normal leading-[21px] w-[90%] text-[#48535F]">
            This cannot be undone. This will permanently delete your account,
            files, and personal data from our systems.
          </p>
          <button
            onClick={() => setConfirmation(!comfirmation)}
            className="py-3 mt-2 rounded-[6px] text-[14px] leading-5 font-normal text-[#FF0000] bg-[#FF69692B] px-6"
          >
            Delete my account
          </button>
          {comfirmation && (
            <div className="fixed flex z-50 bg-[#3d3c3c3b] items-center justify-center mx-auto top-0 left-0 right-0 bottom-0">
              <div className="bg-white rounded-[10px] px-6 py-6 w-[80%] lg:w-[400px] md:w-[30%]">
                <div className="flex items-center justify-between">
                  <h4>Demo</h4>
                  <svg
                    className="cursor-pointer"
                    onClick={() => setConfirmation(false)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#37404A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 9L9 15"
                      stroke="#37404A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 9L15 15"
                      stroke="#37404A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="py-3">
                  <p className="text-[12px] font-normal">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Porro adipisci, ullam commodi repellendus inventore modi
                    delectus rerum atque unde incidunt illo sit temporibus nulla
                    voluptatem, quisquam illum? Labore, molestiae nostrum.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-[#48535F] text-[14px] font-medium">
                    Cancel
                  </button>
                  <button
                    onClick={() => setConfirmation(false)}
                    className="text-[#fff] text-[14px] font-medium bg-[#8AB6A2] px-8 rounded-lg py-1"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Setting
