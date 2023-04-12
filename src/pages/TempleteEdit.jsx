import React, { useEffect, useRef, useState } from "react"
import TextEditor from "../component/TextEditor/TextEditor"
const optionsData2 = [
  { option: "Frameworks1" },
  { option: "Frameworks2" },
  { option: "Frameworks3" },
  { option: "Frameworks4" },
  { option: "Frameworks5" },
]
const TempleteEdit = () => {
  const [copySuccess, setCopySuccess] = useState(false)
  const [Frameworksvisibility, setFrameworksVisibility] = useState(false)
  const [FrameworkselectedOption, FrameworksetSelectedOption] = useState("")
  const [Beforevisibility, setBeforeVisibility] = useState(false)
  const [BeforeselectedOption, BeforesetSelectedOption] = useState("")
  const [Voicevisibility, setVoiceVisibility] = useState(false)
  const [VoiceselectedOption, VoicesetSelectedOption] = useState("")
  const copyText =
    "Morbi varius aliquam semper pulvinar etiam metus. Facilisis felis ultrices ipsum enim elit malesuada tristique. Nunc sit risus risus tortor. Purus habitant sagittis facilisi nulla tempus mauris dui vitae. Volutpat tristique odio ultrices tellus aliquam odio."

  const handleClick = () => {
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 3000)
  }

  const copyToClipboard = (text) => {
    const tempInput = document.createElement("input")
    tempInput.value = text
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
    handleClick()
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVoiceVisibility(false)
          setBeforeVisibility(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <div className="overflow-y-scroll h-[85%] md:mb-0 md:h-[85%]">
      <form action="">
        <div className=" px-6 md:px-9 md:absolute top-6">
          <div className="">
            <input
              type="text"
              className="outline-none py-2 rounded-lg px-6 text-[#48535F] text-sm leading-6 font-normal border-none"
              placeholder="Project Name"
            />
          </div>
        </div>
        <div className="flex px-6 md:px-9 items-center justify-between w-full md:w-[50%] space-x-6 mt-2">
          {" "}
          <div className="bg-white rounded-2xl w-[100%]">
            {" "}
            <div
              className=" relative cursor-pointer block bg-[#fff]  w-full px-[16px]   !rounded-[6px]    h-[45px]"
              onClick={(e) => {
                setFrameworksVisibility(!Frameworksvisibility)
              }}
            >
              <div className="selected-option pl-2 h-full flex items-center relative justify-between  ">
                <span
                  className="flex not-italic font-normal text-xs leading-[18px] text-[#434B54] gap-4 items-center"
                  title={
                    FrameworkselectedOption === ""
                      ? "Frameworks"
                      : FrameworkselectedOption
                  }
                >
                  {FrameworkselectedOption === ""
                    ? "Frameworks"
                    : FrameworkselectedOption.length <= 20
                    ? FrameworkselectedOption
                    : `${FrameworkselectedOption.slice(0, 20)}...`}
                </span>
                <svg
                  className={`${Frameworksvisibility ? "rotate-180" : ""}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#48535F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {Frameworksvisibility && (
                <div className="options absolute overflow-y-scroll rounded-xl  px-3 top-[50px] left-0 w-full max-h-[209px]  border z-[999]  bg-white  rounded-br-[10px] rounded-bl-[10px] ">
                  <ul>
                    {optionsData2.map(({ option }, index) => (
                      <li
                        key={index}
                        className={
                          FrameworkselectedOption === option
                            ? " h-[37px] mt-3 justify-start pl-2 items-start flex   w-[100%]  not-italic font-normal text-xs leading-[18px] text-[#434B54] "
                            : " h-[37px] mt-3 justify-start pl-2 items-start flex   w-[100%]  not-italic font-normal text-xs leading-[18px] text-[#434B54] "
                        }
                        onClick={() => {
                          FrameworksetSelectedOption(option)
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="bg-white rounded-2xl w-[100%]">
            {" "}
            <div
              className="select relative rounded-[6px] cursor-pointer block bg-[#fff]  w-full px-[16px]       h-[45px]"
              onClick={(e) => {
                setBeforeVisibility(!Beforevisibility)
              }}
            >
              <div className="selected-option pl-2 h-full flex items-center relative justify-between  ">
                <span
                  className="flex  not-italic font-normal text-xs leading-[18px] text-[#434B54] gap-4 items-center"
                  title={
                    BeforeselectedOption === ""
                      ? "Before-After-B..."
                      : BeforeselectedOption
                  }
                >
                  {BeforeselectedOption === ""
                    ? "Before-After-B..."
                    : BeforeselectedOption.length <= 20
                    ? BeforeselectedOption
                    : `${BeforeselectedOption.slice(0, 20)}...`}
                </span>{" "}
                <svg
                  className={`${Beforevisibility ? "rotate-180" : ""}`}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="#48535F"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {Beforevisibility && (
                <div className="options absolute rounded-xl  px-3 top-[50px] left-0 w-full max-h-[209px] overflow-y-scroll  border z-[999]  bg-white  rounded-br-[10px] rounded-bl-[10px] ">
                  <ul>
                    {optionsData2.map(({ option }, index) => (
                      <li
                        key={index}
                        className={
                          BeforeselectedOption === option
                            ? " h-[37px] mt-3 justify-start pl-2 items-start flex   w-[100%]  not-italic font-normal text-xs leading-[18px] text-[#434B54] "
                            : " h-[37px] mt-3 justify-start pl-2 items-start flex   w-[100%]  not-italic font-normal text-xs leading-[18px] text-[#434B54] "
                        }
                        onClick={() => {
                          BeforesetSelectedOption(option)
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>{" "}
        <div className="mt-6 ">
          <div className=" px-6 md:px-9 flex-col md:flex-row flex mt-2 space-x-0 md:space-x-6">
            <div className="bg-white flex-1 rounded-[18px] px-6">
              <h4 className="text-[18px] mt-2 font-medium leading-[27px] py-3 text-[#48535F]">
                Template
              </h4>
              <h4 className="text-[16px]  font-medium leading-[27px] py-1 text-[#48535F]">
                Design Quiz Questions & Answers
              </h4>
              <p className="text-[14px] font-normal leading-[21px] text-[#48535F]">
                Create questions and answers for your quiz
              </p>
              <div className="relative py-2">
                <label
                  for="Product"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Quiz Title
                </label>
                <input
                  type="text"
                  id="Quiz"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="Title of the Quiz in your mind"
                />
              </div>
              <div className="relative pb-2">
                <label
                  for="Product"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Product Description
                </label>

                <textarea
                  id="Product"
                  cols="30"
                  className="block p-2.5 w-full outline-none text-sm bg-[#F3F3F2] rounded-lg border"
                  placeholder="Enter description"
                />
              </div>
              <div className="relative pb-1">
                <label
                  for="Quiz_Type"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Quiz Type
                </label>
                <input
                  type="text"
                  id="Quiz_Type"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="Eg. Personality Quiz"
                />
              </div>
              <div className="relative pb-1">
                <label
                  for="Answer_Type"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Answer Type
                </label>
                <input
                  type="text"
                  id="Answer_Type"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="Eg. Yes or NO answers"
                />
              </div>
              <div className="relative pb-1">
                <label
                  for="Target_Audience"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Target Audience
                </label>
                <input
                  type="text"
                  id="Target_Audience"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="Eg. Children"
                />
              </div>
              <div className="relative pb-1">
                <label
                  for="Number_of_Questions"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Number of Questions
                </label>
                <input
                  type="text"
                  id="Number_of_Questions"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="1"
                />
              </div>
              <div className="relative pb-1">
                <label
                  for="Tone_Voice"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Tone of Voice
                </label>
                {/* <input
                  type="text"
                  id="first_name"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="Select"
                /> */}
                <div
                  className="select relative rounded-[6px] cursor-pointer block bg-[#F3F3F2]  w-full px-[16px] h-[45px]"
                  onClick={(e) => {
                    setVoiceVisibility(!Voicevisibility)
                  }}
                >
                  <div className="selected-option h-full flex items-center relative justify-between  ">
                    <span
                      className="flex !text-[13px] gap-4 items-center"
                      title={
                        VoiceselectedOption === ""
                          ? "Select"
                          : VoiceselectedOption
                      }
                    >
                      {VoiceselectedOption === ""
                        ? "Select"
                        : VoiceselectedOption.length <= 20
                        ? VoiceselectedOption
                        : `${VoiceselectedOption.slice(0, 20)}...`}
                    </span>{" "}
                    <svg
                      className={`${Voicevisibility ? "rotate-180" : ""}`}
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="#48535F"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  {Voicevisibility && (
                    <div className="options absolute rounded-xl   px-3 top-[50px] left-0 w-full max-h-[209px] overflow-y-scroll  border z-[999]  bg-white  rounded-br-[10px] rounded-bl-[10px] ">
                      <ul>
                        {optionsData2.map(({ option }, index) => (
                          <li
                            key={index}
                            className={
                              VoiceselectedOption === option
                                ? " h-[37px] mt-3 pl-2 justify-start items-start flex   w-[100%]  not-italic font-normal text-xs leading-[18px] text-[#434B54] "
                                : " h-[37px] mt-3 pl-2 justify-start items-start flex   w-[100%]  not-italic font-normal text-xs leading-[18px] text-[#434B54] "
                            }
                            onClick={() => {
                              VoicesetSelectedOption(option)
                            }}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative pb-1">
                <label
                  for="Formality"
                  class="block mb-2 text-sm font-medium text-[#48535F] "
                >
                  Formality
                </label>
                <input
                  type="text"
                  id="Formality"
                  class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
                  placeholder="Level of Formality"
                />
              </div>
              <button
                type="submit"
                className="py-2 mb-5 mt-5 hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] border-[1.5px] border-[#8AB6A2] transition-all hover:text-[#000] rounded-[6px] w-full text-base leading-5 font-normal text-white bg-[#8AB6A2] px-6"
              >
                Submit
              </button>
              <div className="bg-[#F3F3F2] mt-2 mb-2 px-4 py-4 rounded-[18px]">
                <h4 className="text-[12px] text-[#48535F] font-normal leading-[18px]">
                  Morbi varius aliquam semper pulvinar etiam metus. Facilisis
                  felis ultrices ipsum enim elit malesuada tristique. Nunc sit
                  risus risus tortor. Purus habitant sagittis facilisi nulla
                  tempus mauris dui vitae. Volutpat tristique odio ultrices
                  tellus aliquam odio.{" "}
                </h4>
                <div className="flex items-center justify-between">
                  <div></div>
                  <div
                    onClick={() => copyToClipboard(copyText)}
                    className="flex items-center cursor-pointer justify-end  bg-[#48535F] px-4 py-1 rounded-[6px] gap-2"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_176_12)">
                        <path
                          d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.3335 10H2.66683C2.31321 10 1.97407 9.85956 1.72402 9.60952C1.47397 9.35947 1.3335 9.02033 1.3335 8.66671V2.66671C1.3335 2.31309 1.47397 1.97395 1.72402 1.7239C1.97407 1.47385 2.31321 1.33337 2.66683 1.33337H8.66683C9.02045 1.33337 9.35959 1.47385 9.60964 1.7239C9.85969 1.97395 10.0002 2.31309 10.0002 2.66671V3.33337"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_176_12">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="text-white">
                      {" "}
                      {copySuccess ? "Copy" : "Copy"}
                    </span>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="flex-1 w-full md:w-[100px] md:mt-0 h-full mt-6">
              <TextEditor />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TempleteEdit
