import React from "react"
import { useLocation } from "react-router-dom"
const sidebardata = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 2.25H2.25V7.5H7.5V2.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.75 2.25H10.5V7.5H15.75V2.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.75 10.5H10.5V15.75H15.75V10.5Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.5 10.5H2.25V15.75H7.5V10.5Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Templates",
    link: "/template",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.25 2.25H3.75C2.92157 2.25 2.25 2.92157 2.25 3.75V14.25C2.25 15.0784 2.92157 15.75 3.75 15.75H14.25C15.0784 15.75 15.75 15.0784 15.75 14.25V3.75C15.75 2.92157 15.0784 2.25 14.25 2.25Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.25 6.75H15.75"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.75 15.75V6.75"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
]
const Sidebar = () => {
  const location = useLocation()
  return (
    <div className="flex overflow-hidden h-full">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col h-full">
          <div className="flex flex-col flex-grow pt-5 overflow-y-autoborder-r border-gray-50">
            <div className="flex flex-col items-center flex-shrink-0 px-4">
              <a
                href="./index.html"
                className="px-8 text-left focus:outline-none"
              >
                <h2 className="block p-2 text-2xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900">
                  CopyLeads
                </h2>
              </a>
            </div>
            <div className="flex flex-col flex-grow px-0 ml-6 mt-14">
              <nav className="flex-1 space-y-1 ">
                <ul>
                  {console.log(location.pathname)}
                  {sidebardata.map((value, index) => (
                    <li key={index}>
                      <a
                        href={value.link}
                        className={`inline-flex items-center  w-full px-4 py-3 mt-1 text-base text-gray-900 ${
                          location.pathname === value.link
                            ? "bg-[#D9D9D912] border-[#37404A]  border-l-2"
                            : null
                        } transition duration-500 ease-in-out transform rounded-r-lg  focus:shadow-outline`}
                      >
                        {value.icon}
                        <span className="ml-4 text-white text-base font-medium leading-6">
                          {" "}
                          {value.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-center mx-auto">
                  <h4 className="text-[12px] font-[400] text-center text-white mt-4 leading-[18px]  w-[70%] rounded-[6px] py-2 bg-[#48535F]">
                    Tokens Used: <span>0</span>
                  </h4>
                </div>
              </nav>
            </div>
            <div className="flex items-center border px-5  rounded-[6px] justify-center py-2 mx-auto">
              <a href="#" className="flex-shrink-0 block w-full group">
                <div className="flex  items-center">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15.75V14.25C12 13.4544 11.6839 12.6913 11.1213 12.1287C10.5587 11.5661 9.79565 11.25 9 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.375 8.25C8.03185 8.25 9.375 6.90685 9.375 5.25C9.375 3.59315 8.03185 2.25 6.375 2.25C4.71815 2.25 3.375 3.59315 3.375 5.25C3.375 6.90685 4.71815 8.25 6.375 8.25Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 6V10.5"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.25 8.25H12.75"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-normal text-base leading-6 text-white">
                      Invite Friends
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center py-2 mx-auto">
              <a href="setting" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 15.75V10.5"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 7.5V2.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 15.75V9"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 6V2.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 15.75V12"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 9V2.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.75 10.5H5.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.75 6H11.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.75 12H17.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-normal text-base leading-6 text-white">
                      Settings
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="flex items-center justify-center mx-auto mb-2 py-4 ">
              <a href="#" className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.75 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H6.75"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 12.75L15.75 9L12 5.25"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 9H6.75"
                        stroke="white"
                        stroke-opacity="0.8"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="font-normal text-base leading-6 text-white">
                      Logout
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
