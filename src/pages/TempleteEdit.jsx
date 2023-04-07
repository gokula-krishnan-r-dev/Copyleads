import React, { useEffect, useRef, useState } from "react"
import TextEditor from "../component/TextEditor/TextEditor"

const TempleteEdit = () => {
  const [copySuccess, setCopySuccess] = useState(false)
  const copyText =
    "Morbi varius aliquam semper pulvinar etiam metus. Facilisis felis ultrices ipsum enim elit malesuada tristique. Nunc sit risus risus tortor. Purus habitant sagittis facilisi nulla tempus mauris dui vitae. Volutpat tristique odio ultrices tellus aliquam odio."

  const handleClick = () => {
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 3000)
  }
  const optionsData2 = [
    { option: "Frameworks1" },
    { option: "Frameworks2" },
    { option: "Frameworks3" },
    { option: "Frameworks4" },
    { option: "Frameworks5" },
  ]
  const copyToClipboard = (text) => {
    const tempInput = document.createElement("input")
    tempInput.value = text
    document.body.appendChild(tempInput)
    tempInput.select()
    document.execCommand("copy")
    document.body.removeChild(tempInput)
    handleClick()
  }

  const [Frameworksvisibility, setFrameworksVisibility] = useState(false)
  const [FrameworkselectedOption, FrameworksetSelectedOption] = useState("")
  const [Beforevisibility1, setBeforeVisibility1] = useState(false)
  const [BeforeselectedOption1, BeforesetSelectedOption1] = useState("")
  const [Voicevisibility1, setVoiceVisibility1] = useState(false)
  const [VoiceselectedOption3, VoicesetSelectedOption3] = useState("")

  return (
    <div className="overflow-y-scroll h-[85%]">
      <form action="">
        <div className="px-9 absolute top-6">
          <div className="">
            <input
              type="text"
              className="outline-none py-2 rounded-lg px-6 text-[#48535F] text-sm leading-6 font-normal border-none"
              placeholder="Project Name"
            />
          </div>
        </div>
        <div className="flex px-9 items-center justify-between w-[50%] space-x-6 mt-2">
          {" "}
          <div className="bg-white rounded-2xl w-[100%]">
            {" "}
            <div
              className=" relative cursor-pointer block bg-[#fff]  w-full px-[16px]   !rounded-[6px]    h-[45px]"
              onClick={(e) => {
                setFrameworksVisibility(!Frameworksvisibility)
              }}
            >
              <div className="selected-option h-full flex items-center relative justify-between  ">
                <span
                  className="flex !text-[13px] gap-4 items-center"
                  title={
                    FrameworkselectedOption === ""
                      ? "This Week"
                      : FrameworkselectedOption
                  }
                >
                  {FrameworkselectedOption === ""
                    ? "This Week"
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
                            ? " h-[37px] mt-3 justify-start items-start flex  text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] "
                            : " h-[37px] mt-3 justify-start items-start flex  text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] "
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
                setBeforeVisibility1(!Beforevisibility1)
              }}
            >
              <div className="selected-option h-full flex items-center relative justify-between  ">
                <span
                  className="flex !text-[13px] gap-4 items-center"
                  title={
                    BeforeselectedOption1 === ""
                      ? "This Week"
                      : BeforeselectedOption1
                  }
                >
                  {BeforeselectedOption1 === ""
                    ? "This Week"
                    : BeforeselectedOption1.length <= 20
                    ? BeforeselectedOption1
                    : `${BeforeselectedOption1.slice(0, 20)}...`}
                </span>{" "}
                <svg
                  className={`${Beforevisibility1 ? "rotate-180" : ""}`}
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
              {Beforevisibility1 && (
                <div className="options absolute rounded-xl  px-3 top-[50px] left-0 w-full max-h-[209px] overflow-y-scroll  border z-[999]  bg-white  rounded-br-[10px] rounded-bl-[10px] ">
                  <ul>
                    {optionsData2.map(({ option }, index) => (
                      <li
                        key={index}
                        className={
                          BeforeselectedOption1 === option
                            ? " h-[37px] mt-3 justify-start items-start flex  text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] "
                            : " h-[37px] mt-3 justify-start items-start flex  text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] "
                        }
                        onClick={() => {
                          BeforesetSelectedOption1(option)
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
          <div className="px-9 flex-col md:flex-row flex mt-2 space-x-0 md:space-x-6">
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
                    setVoiceVisibility1(!Voicevisibility1)
                  }}
                >
                  <div className="selected-option h-full flex items-center relative justify-between  ">
                    <span
                      className="flex !text-[13px] gap-4 items-center"
                      title={
                        VoiceselectedOption3 === ""
                          ? "This Week"
                          : VoiceselectedOption3
                      }
                    >
                      {VoiceselectedOption3 === ""
                        ? "This Week"
                        : VoiceselectedOption3.length <= 20
                        ? VoiceselectedOption3
                        : `${VoiceselectedOption3.slice(0, 20)}...`}
                    </span>{" "}
                    <svg
                      className={`${Voicevisibility1 ? "rotate-180" : ""}`}
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
                  {Voicevisibility1 && (
                    <div className="options absolute rounded-xl  px-3 top-[50px] left-0 w-full max-h-[209px] overflow-y-scroll  border z-[999]  bg-white  rounded-br-[10px] rounded-bl-[10px] ">
                      <ul>
                        {optionsData2.map(({ option }, index) => (
                          <li
                            key={index}
                            className={
                              VoiceselectedOption3 === option
                                ? " h-[37px] mt-3 justify-start items-start flex  text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] "
                                : " h-[37px] mt-3 justify-start items-start flex  text-[#131313] w-[100%] text-[12px] font-play font-[400] leading-[17px] "
                            }
                            onClick={() => {
                              VoicesetSelectedOption3(option)
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
                className="py-2 mb-5 mt-5 hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] transition-all hover:text-[#000] rounded-[6px] w-full text-base leading-5 font-normal text-white bg-[#8AB6A2] px-6"
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

                    <span className="text-white"> Copie</span>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="flex-1 w-[100px] md:mt-0 h-full mt-6">
              {/* <EditorContent editor={editor} /> */}
              <TextEditor />
              {/* <div className="bg-[white] rounded-[18px] relative h-[83%]">
              <div className="bg-[#636D78] absolute top-2 left-2 right-2 flex items-center justify-between px-6 py-2 rounded-t-[18px] rounded-b-[6px]">
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 10.5L3 6.75L6.75 3"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15 15V9.75C15 8.95435 14.6839 8.19129 14.1213 7.62868C13.5587 7.06607 12.7956 6.75 12 6.75H3"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.25 10.5L15 6.75L11.25 3"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 15V9.75C3 8.95435 3.31607 8.19129 3.87868 7.62868C4.44129 7.06607 5.20435 6.75 6 6.75H15"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button id="bold" className="option-button format">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 3H10.5C11.2956 3 12.0587 3.31607 12.6213 3.87868C13.1839 4.44129 13.5 5.20435 13.5 6C13.5 6.79565 13.1839 7.55871 12.6213 8.12132C12.0587 8.68393 11.2956 9 10.5 9H4.5V3Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.5 9H11.25C12.0456 9 12.8087 9.31607 13.3713 9.87868C13.9339 10.4413 14.25 11.2044 14.25 12C14.25 12.7956 13.9339 13.5587 13.3713 14.1213C12.8087 14.6839 12.0456 15 11.25 15H4.5V9Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 3H7.5"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 15H3.75"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.25 3L6.75 15"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5 2.25V7.5C4.5 8.69347 4.97411 9.83807 5.81802 10.682C6.66193 11.5259 7.80653 12 9 12C10.1935 12 11.3381 11.5259 12.182 10.682C13.0259 9.83807 13.5 8.69347 13.5 7.5V2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3 15.75H15"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 7.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 4.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 10.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.75 13.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 7.5H4.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 4.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 10.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.5 13.5H4.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 7.5H5.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 4.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 10.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 13.5H5.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.75 7.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 4.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 10.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.75 13.5H2.25"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 4.5H15.75"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 9H15.75"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6 13.5H15.75"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 4.5H2.26"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 9H2.26"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.25 13.5H2.26"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="pt-14 px-4">
                <div id="text-input" contentEditable="true" />
              </div>
              <div className="bg-[#48535FA3] absolute bottom-4 px-3 py-1 right-4 rounded-full">
                <h4 className="text-white text-[10px] font-normal leading-3">
                  Status : Saved
                </h4>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TempleteEdit
