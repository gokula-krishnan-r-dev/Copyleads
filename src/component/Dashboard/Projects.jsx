import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"
const Projects = () => {
  const [Options, setOptions] = useState(false)
  const [RenameProject, setRenameProject] = useState(false)

  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
  return (
    <div className="mt-6">
      <div className="flex px-6 md:px-12 items-center justify-between">
        <h4 className="text-[#434B54] text-[20px] font-medium leading-8">
          Projects
        </h4>
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="text-[#434B54] text-[14px] font-normal leading-5"
          >
            All Projects
          </Link>
          <svg
            width="32"
            height="8"
            viewBox="0 0 32 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5L1 3.5ZM31.3536 4.35356C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464468C27.9763 0.269206 27.6597 0.269206 27.4645 0.464468C27.2692 0.659731 27.2692 0.976313 27.4645 1.17158L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53554C27.6597 7.7308 27.9763 7.7308 28.1716 7.53554L31.3536 4.35356ZM1 4.5L31 4.5L31 3.5L1 3.5L1 4.5Z"
              fill="#434B54"
            />
          </svg>
        </div>
      </div>
      <div className="grid px-6 md:px-12 mt-2  md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)] grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-4">
        {Array(1, 2, 3, 4, 5, 6, 7, 8).map((value, index) => (
          <Link
            href="#"
            class="block max-w-full relative md:max-w-sm p-6 bg-white border border-[#8AB6A266] rounded-[18px] "
          >
            <button
              onClick={() => setOptions(Options === index ? null : index)}
              className="absolute hover:bg-[#D2D2D2] rounded-[5px] top-2.5 right-2.5"
            >
              <svg
                className="absolute top-3 hover:bg-[#D2D2D2] rounded-md right-3"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8.5" cy="4.75" r="1.5" fill="#46515C" />
                <circle cx="8.5" cy="9.75" r="1.5" fill="#46515C" />
                <circle cx="8.5" cy="14.75" r="1.5" fill="#46515C" />
              </svg>
            </button>
            {Options === index && (
              <div className=" right-0 absolute top-9 bg-white rounded-[6px] px-2 py-2 z-[1] border">
                <ul className="space-y-1  not-italic font-normal text-xs leading-[18px] text-[#46515C]">
                  <li className="hover:bg-[#EAEAEA] duration-300 px-6 py-1 rounded-lg">
                    <button
                      onClick={() => {
                        setRenameProject(!RenameProject)
                        setOptions(null)
                      }}
                    >
                      Rename
                    </button>
                  </li>
                  <li className="hover:bg-[#EAEAEA] duration-300 px-6 py-1 rounded-md">
                    Delete
                  </li>
                </ul>
              </div>
            )}
            <Modal
              shouldCloseOnOverlayClick={true}
              center
              overlayClassName=""
              className="bg-transparent flex items-center justify-center mx-auto fixed right-0 left-0 z-[999] bottom-0 top-0"
              isOpen={RenameProject}
              onRequestClose={() => setRenameProject(false)}
              style={{
                overlay: {
                  backgroundColor: "rgb(0 0 0 / 10%)",
                },
                content: customStyles,
              }}
              contentLabel="upgrade Modal"
            >
              <div className="flex z-[999]  items-center justify-center mx-auto">
                <div className="bg-white rounded-[10px] px-6 py-6 w-[100%] lg:w-[400px] md:w-[400px]">
                  <div className="flex items-center mt-2 justify-between">
                    <h4>Rename</h4>
                    <svg
                      className="cursor-pointer"
                      onClick={() => setRenameProject(false)}
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
                  <div className="py-2 mt-4">
                    <div className="relative">
                      <label
                        for="Quiz_Type"
                        class="block mb-2 text-sm font-medium text-[#48535F] "
                      >
                        Folder Name
                      </label>
                      <input
                        type="text"
                        id="New_Folder"
                        class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                        placeholder="old Folder "
                      />
                    </div>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <button
                      type="submit"
                      className="py-2  mt-5 border-[#8AB6A2] border-[1.5px] hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] duration-300 hover:text-[#000] rounded-[6px]  text-base leading-5 font-normal text-white bg-[#8AB6A2] px-3"
                    >
                      Create Folder
                    </button>
                    <button
                      onClick={() => setRenameProject(false)}
                      type="submit"
                      className="py-2 mt-5 hover:border-[1.5px] hover:border-[#8AB6A2]  duration-300 hover:text-[#fff] rounded-[6px]  text-base leading-5 font-normal text-black hover:bg-[#8AB6A2] px-6"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
            <div className="">
              <div className=" flex items-center w-full">
                <div className="flex items-center w-full justify-between ">
                  <div className="">
                    <span className="not-italic px-3 rounded-[6px] py-1 bg-[#8AB6A2] font-normal text-[12px] leading-3 text-white ">
                      Quiz
                    </span>
                  </div>
                  {/* <div className="px-3 rounded-[6px] py-1 border border-[#8AB6A266]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.25 7H1.75C1.6125 7 1.5 7.1125 1.5 7.25V7.75C1.5 7.8875 1.6125 8 1.75 8H8.25C8.3875 8 8.5 7.8875 8.5 7.75V7.25C8.5 7.1125 8.3875 7 8.25 7ZM9.25 2C8.83594 2 8.5 2.33594 8.5 2.75C8.5 2.86094 8.525 2.96406 8.56875 3.05938L7.4375 3.7375C7.19688 3.88125 6.88594 3.8 6.74687 3.55625L5.47344 1.32812C5.64062 1.19062 5.75 0.984375 5.75 0.75C5.75 0.335938 5.41406 0 5 0C4.58594 0 4.25 0.335938 4.25 0.75C4.25 0.984375 4.35938 1.19062 4.52656 1.32812L3.25312 3.55625C3.11406 3.8 2.80156 3.88125 2.5625 3.7375L1.43281 3.05938C1.475 2.96563 1.50156 2.86094 1.50156 2.75C1.50156 2.33594 1.16562 2 0.751562 2C0.3375 2 0 2.33594 0 2.75C0 3.16406 0.335938 3.5 0.75 3.5C0.790625 3.5 0.83125 3.49375 0.870313 3.4875L2 6.5H8L9.12969 3.4875C9.16875 3.49375 9.20938 3.5 9.25 3.5C9.66406 3.5 10 3.16406 10 2.75C10 2.33594 9.66406 2 9.25 2Z"
                          fill="#F1C31D"
                        />
                      </svg>
                    </div> */}
                </div>
              </div>
              <div className="mt-2">
                <h5 className="not-italic py-2 font-medium text-xs leading-[18px] text-[#434B54]">
                  Compelling Offer Headlines
                </h5>
                <p className="not-italic pb-2 font-normal text-[10px] leading-[15px] text-[#434B54]">
                  Write attention-grabbing headlines for your offers to excite
                  your leads
                </p>
              </div>
              <div className="flex text-[9px] leading-[15px] font-light items-center gap-1">
                <p className="text-[#434B54]">Last Modified :</p>
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_19_210)">
                    <path
                      d="M7.91667 1.66666H2.08333C1.6231 1.66666 1.25 2.03975 1.25 2.49999V8.33332C1.25 8.79356 1.6231 9.16666 2.08333 9.16666H7.91667C8.3769 9.16666 8.75 8.79356 8.75 8.33332V2.49999C8.75 2.03975 8.3769 1.66666 7.91667 1.66666Z"
                      stroke="#434B54"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66667 0.833344V2.50001"
                      stroke="#434B54"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33333 0.833344V2.50001"
                      stroke="#434B54"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.25 4.16666H8.75"
                      stroke="#434B54"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19_210">
                      <rect width="10" height="10" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#434B54B2]">03.22.2023,</span>
                <span className="text-[#434B54B2]">07:55:23 PM</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects
