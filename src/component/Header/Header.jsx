import React, { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import Modal from "react-modal"
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
  const [InviteOpen, setInviteOpen] = useState()
  const [fbHover, setGbHover] = useState(false)
  const [instaHover, setinstaHover] = useState(false)
  const [TweetHover, settweetHover] = useState(false)
  const copyToClipboard = (text) => {
    const tempInput = document.createElement("input")
    tempInput.value = text
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
    handleClick()
  }
  const [copySuccess, setCopySuccess] = useState(false)

  const handleClick = () => {
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 3000)
  }
  const copyText = "copyleads.ai/invite/542364"
  const wrapperRef = useRef(null)
  function openModal() {
    setInviteOpen(true)
  }
  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
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
        className=" mr-2 md:hidden  bg-[#8AB6A2] w-12 max-[425px]:w-[65px] max-[373px]:w-[88px] max-[357px]:w-[70px] h-12 flex items-center justify-center rounded-full"
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
                      <div onClick={openModal} className="flex  items-center">
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
        <div className="relative bg-white pl-3 focus:outline-none focus:shadow-outline rounded-full py-2 px-4 block  appearance-none leading-normal">
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
            <div className="absolute border duration-500 transition-all z-[999]  scroll-bar overflow-y-scroll max-h-[35%] right-6 max-w-[314px] bg-white rounded-[18px] py-4 top-[75px]">
              <div className="">
                <h3 className="text-[#434B54] px-4 py-1  text-[18px] font-normal leading-6">
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
        <Modal
          shouldCloseOnOverlayClick={true}
          center
          overlayClassName=""
          className="bg-transparent flex items-center justify-center mx-auto fixed right-0 left-0 z-50 bottom-0 top-0"
          isOpen={InviteOpen}
          onRequestClose={() => setInviteOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgb(0 0 0 / 12%)",
            },
            content: customStyles,
          }}
          contentLabel="upgrade Modal"
        >
          <div className="flex z-50 items-center justify-center mx-auto">
            <div className="bg-[#F3F3F2] rounded-[18px] px-6 py-6 w-[100%] lg:w-[400px] md:w-[400px]">
              <div className="flex items-center mt-2 justify-between">
                <h4 className=" text-base font-medium leading-6 text-[#48535F]">
                  Invite Friends and earn credits
                </h4>

                <svg
                  className="cursor-pointer"
                  onClick={() => setInviteOpen(false)}
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
              <h3 className="font-normal text-sm leading-[21px] text-[#48535F] ">
                Share on Social Media
              </h3>
              <div className="py-2 flex space-x-2 mt-4">
                <a
                  onMouseLeave={() => setGbHover(false)}
                  onMouseEnter={() => setGbHover(true)}
                  target="black"
                  href="https://www.facebook.com/"
                  className="bg-[#8AB6A2] hover:border-[#8AB6A2] hover:border-[1.5px] border-[1.5px] border-[#8AB6A2] hover:bg-white  duration-500 px-5 py-3 rounded-[6px]"
                >
                  <svg
                    width="13"
                    height="22"
                    viewBox="0 0 13 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z"
                      stroke={fbHover ? "black" : "white"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  onMouseLeave={() => setinstaHover(false)}
                  onMouseEnter={() => setinstaHover(true)}
                  target="black"
                  href="https://www.facebook.com/"
                  className="bg-[#8AB6A2] hover:border-[#8AB6A2] hover:border-[1.5px] border-[1.5px] border-[#8AB6A2] hover:bg-white duration-500 px-4 py-3 rounded-[6px]"
                >
                  <svg
                    className=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke={instaHover ? "black" : "white"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                      stroke={instaHover ? "black" : "white"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke={instaHover ? "black" : "white"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
                <a
                  onMouseLeave={() => settweetHover(false)}
                  onMouseEnter={() => settweetHover(true)}
                  target="black"
                  href="https://www.facebook.com/"
                  className="bg-[#8AB6A2] hover:border-[#8AB6A2] hover:border-[1.5px] border-[1.5px] border-[#8AB6A2] hover:bg-white duration-500 px-4 py-3 rounded-[6px]"
                >
                  <svg
                    width="24"
                    height="21"
                    viewBox="0 0 24 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 2C22.0424 2.67548 20.9821 3.19211 19.86 3.53C19.2577 2.83751 18.4573 2.34669 17.567 2.12393C16.6767 1.90116 15.7395 1.9572 14.8821 2.28445C14.0247 2.61171 13.2884 3.1944 12.773 3.95372C12.2575 4.71303 11.9877 5.61234 12 6.53V7.53C10.2426 7.57557 8.50127 7.18581 6.93101 6.39545C5.36074 5.60508 4.01032 4.43864 3 3C3 3 -1 12 8 16C5.94053 17.398 3.48716 18.0989 1 18C10 23 21 18 21 6.5C20.9991 6.22145 20.9723 5.94359 20.92 5.67C21.9406 4.66349 22.6608 3.39271 23 2Z"
                      stroke={TweetHover ? "black" : "white"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <h4 className="font-medium text-base leading-6 text-[#48535F]">
                Or
              </h4>
              <div className="flex mt-2 flex-col ">
                <h4 className="font-normal text-sm leading-[21px] text-[#48535F]">
                  Copy link directly :
                </h4>
                <div className="bg-white mt-2 flex items-center justify-between py-1 px-4 rounded-md ">
                  <h4 className="font-light text-sm leading-[21px] text-[#48535F]">
                    copyleads.ai/invite/542364
                  </h4>
                  <button
                    onClick={() => copyToClipboard(copyText)}
                    className="bg-[#8AB6A2] px-3 py-2 rounded-md"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_39_396)">
                        <path
                          d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33331 10H2.66665C2.31302 10 1.97389 9.85953 1.72384 9.60949C1.47379 9.35944 1.33331 9.0203 1.33331 8.66668V2.66668C1.33331 2.31305 1.47379 1.97392 1.72384 1.72387C1.97389 1.47382 2.31302 1.33334 2.66665 1.33334H8.66665C9.02027 1.33334 9.35941 1.47382 9.60946 1.72387C9.8595 1.97392 9.99998 2.31305 9.99998 2.66668V3.33334"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_39_396">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <a
                  className="font-light text-center mt-3 text-[10px] leading-[15px] text-[#48535F]"
                  href=""
                >
                  Read Terms & conditions carefully
                </a>
              </div>
            </div>
          </div>
        </Modal>
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
