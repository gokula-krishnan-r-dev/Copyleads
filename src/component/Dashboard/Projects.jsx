import React from "react"
import { Link } from "react-router-dom"

const Projects = () => {
  return (
    <div className="mt-6">
      <div className="flex px-6 md:px-12 items-center justify-between">
        <h4 className="text-[#434B54] text-[20px] font-medium leading-8">
          Projects
        </h4>
        <div className="flex items-center space-x-2">
          <h6 className="text-[#434B54] text-[14px] font-normal leading-5">
            All Projects
          </h6>
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
            <svg
              className="absolute top-3 right-3"
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
