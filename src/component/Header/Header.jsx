import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
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
const Header = () => {
  const location = useLocation()
  const [sidebaropen, setSidebarOpen] = useState()
  const [Notificationopen, setNotificationOpen] = useState()
  const wrapperRef = useRef(null)

  // below is the same as componentDidMount and componentDidUnmount
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }
  }, [])

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSidebarOpen(false)
      setNotificationOpen(false)
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="flex items-center px-6 py-4 justify-between"
    >
      <div className="hidden md:block" />
      <div
        onClick={() => {
          setSidebarOpen(!sidebaropen)
          setNotificationOpen(false)
        }}
        className=" mr-2 md:hidden  bg-[#8AB6A2] w-12 max-[425px]:w-[65px] h-12 flex items-center justify-center rounded-full"
      >
        <svg
          width={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Menu_Alt_03">
              {" "}
              <path
                id="Vector"
                d="M5 17H13M5 12H19M5 7H13"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>
      {sidebaropen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="bg-[#00000046] !duration-500 !transition-transform absolute block z-30 md:hidden top-0 w-full right-0 bottom-0 left-0"
        >
          <div
            data-aos={sidebaropen ? "fade-right" : "fade-left"}
            className="absolute !duration-500 !transition-all block z-50 md:hidden top-0 w-[250px] right-0 bottom-0 left-0"
          >
            <div className=" flex h-screen bg-[#636D78]">
              <div className="flex flex-col h-full">
                <div className="flex flex-col flex-grow pt-5 overflow-y-autoborder-r border-gray-50">
                  <div className="flex flex-col items-center flex-shrink-0 px-4">
                    <a href="/" className="px-8 text-left focus:outline-none">
                      <h2 className="block p-2 text-2xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-gray-900">
                        CopyLeads
                      </h2>
                    </a>
                  </div>
                  <div className="flex flex-col flex-grow px-0 ml-6 mt-14">
                    <nav className="flex-1 space-y-1 ">
                      <ul>
                        {sidebardata.map((value, index) => (
                          <li key={index}>
                            <a
                              href={value.link}
                              className={`inline-flex hover:border-l-2 hover:bg-[#D9D9D912] hover:border-[#37404A] items-center  w-full px-4 py-3 mt-1 text-base text-gray-900 ${
                                location.pathname === value.link
                                  ? "bg-[#D9D9D912] border-[#37404A]  border-l-2"
                                  : null
                              }  rounded-r-lg  focus:shadow-outline`}
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
                  <div className="flex items-center border px-5 hover:bg-[#8AB6A2] transition-all hover:border-none  rounded-[6px] justify-center py-2 mx-auto">
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
                    <a
                      href="setting"
                      className="flex-shrink-0 block w-full group"
                    >
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
        </div>
      )}

      <div className="flex items-center gap-2">
        <div className="relative bg-white pl-3 focus:outline-none focus:shadow-outline rounded-full py-2 px-4 block w-full appearance-none leading-normal">
          <svg
            className="absolute top-3 z-10 left-3"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
              stroke="#8AB6A2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.2625 15.75L13 12.4875"
              stroke="#8AB6A2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            className="ml-7 md:w-auto w-[50%] outline-none border-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="">
          <div
            onClick={() => {
              setNotificationOpen(!Notificationopen)
              setSidebarOpen(false)
            }}
            className="bg-[#8AB6A2] cursor-pointer w-12 h-12 flex items-center justify-center rounded-full"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 6C13.5 4.80653 13.0259 3.66193 12.182 2.81802C11.3381 1.97411 10.1935 1.5 9 1.5C7.80653 1.5 6.66193 1.97411 5.81802 2.81802C4.97411 3.66193 4.5 4.80653 4.5 6C4.5 11.25 2.25 12.75 2.25 12.75H15.75C15.75 12.75 13.5 11.25 13.5 6Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2975 15.75C10.1657 15.9773 9.9764 16.166 9.74868 16.2971C9.52097 16.4283 9.2628 16.4973 9.00001 16.4973C8.73723 16.4973 8.47906 16.4283 8.25134 16.2971C8.02363 16.166 7.83437 15.9773 7.70251 15.75"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {Notificationopen && (
            <div className="absolute duration-500 transition-all z-[999]  scroll-bar overflow-y-scroll max-h-[35%] right-6 max-w-[314px] bg-white rounded-[18px] py-4 top-[75px]">
              <div className="">
                <h3 className="text-[#434B54] px-4  text-[18px] font-normal leading-6">
                  Notifications
                </h3>
                {Array(1, 2, 3, 4, 5, 6, 7, 8).map((value, index) => (
                  <div className="hover:bg-[#F3F3F2] duration-300 mx-4 cursor-pointer rounded-xl p-2">
                    <p className="text-[14px] font-normal leading-[126%] text-[#434B54]">
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint.{" "}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#434B54B5] gap-1 flex items-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_41_641)">
                            <path
                              d="M3.99996 7.33329C5.84091 7.33329 7.33329 5.84091 7.33329 3.99996C7.33329 2.15901 5.84091 0.666626 3.99996 0.666626C2.15901 0.666626 0.666626 2.15901 0.666626 3.99996C0.666626 5.84091 2.15901 7.33329 3.99996 7.33329Z"
                              stroke="#434B54"
                              stroke-opacity="0.71"
                              stroke-width="0.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M4 2V4L5.33333 4.66667"
                              stroke="#434B54"
                              stroke-opacity="0.71"
                              stroke-width="0.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_41_641">
                              <rect width="8" height="8" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>5m</span>
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.66671 1.66663H8.33337C8.79171 1.66663 9.16671 2.04163 9.16671 2.49996V7.49996C9.16671 7.95829 8.79171 8.33329 8.33337 8.33329H1.66671C1.20837 8.33329 0.833374 7.95829 0.833374 7.49996V2.49996C0.833374 2.04163 1.20837 1.66663 1.66671 1.66663Z"
                          stroke="#434B54"
                          stroke-width="0.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.16671 2.5L5.00004 5.41667L0.833374 2.5"
                          stroke="#434B54"
                          stroke-width="0.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="">
          <Link to="/profile">
            <div className="w-12 h-12">
              <img
                class="w-12 h-12 rounded-full"
                src="/Image/Avator.png"
                alt="Rounded avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
