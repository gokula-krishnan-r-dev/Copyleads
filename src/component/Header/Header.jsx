import React from "react"
import { useLocation } from "react-router-dom"
const Header = () => {
  const location = useLocation()

  return (
    <div className="flex items-center px-6 py-4 justify-between">
      <div />

      <div className="flex items-center gap-2">
        <div className="relative bg-white pl-3 focus:outline-none focus:shadow-outline rounded-full py-2 px-4 block w-full appearance-none leading-normal">
          <svg
            className="absolute top-3 z-20 left-3"
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
            className="ml-7 outline-none border-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="">
          <div className="bg-[#8AB6A2] w-12 h-12 flex items-center justify-center rounded-full">
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
        </div>
        <div className="">
          <div className="w-12 h-12">
            <img
              class="w-12 h-12 rounded-full"
              src="/Image/Avator.png"
              alt="Rounded avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
