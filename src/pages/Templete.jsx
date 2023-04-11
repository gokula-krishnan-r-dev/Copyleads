import React, { useState } from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"
const TabData = [
  { Title: "All" },
  { Title: "Quiz" },
  { Title: "Offers" },
  { Title: "Surveys" },
  { Title: "Blogs" },
  { Title: "Email" },
  { Title: "Ads" },
  { Title: "Ecommerce" },
  { Title: "Frameworks" },
  { Title: "Marketing " },
  { Title: "Seo" },
  { Title: "Social Media" },
  { Title: "Website" },
  { Title: "Video" },
]
const Templete = () => {
  const [Tabselection, setTabselection] = useState(0)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  console.log(modalIsOpen)

  function openModal() {
    setIsOpen(true)
  }

  const customStyles = {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  }
  return (
    <div className="">
      <div className="md:pl-12 pl-6 pr-6 md:pr-7">
        <h4 className="not-italic font-medium text-xl leading-[30px] text-[#434B54]">
          Templates
        </h4>
        <div className="flex w-[45vh]  overflow-x-scroll  md:space-x-0 space-x-4 items-center text-[#48535F] py-4 md:w-full justify-between">
          {TabData.map((value, index) => (
            <button
              onClick={() => setTabselection(index)}
              className={` ${
                Tabselection === index
                  ? "bg-[#8AB6A2] text-white px-3 rounded-[6px]"
                  : ""
              }`}
            >
              <h3>{value.Title}</h3>
            </button>
          ))}
        </div>
        {Tabselection === 0 && (
          <div className="grid md:grid-cols-[repeat(4,1fr)] grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-4">
            {Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12).map(
              (value, index) => (
                <Link
                  href="#"
                  class="block max-w-full md:max-w-sm p-6 bg-white border border-[#8AB6A266] rounded-[18px] shadow"
                >
                  <div onClick={openModal} className="">
                    <div className=" flex items-center w-full">
                      <div className="flex items-center w-full justify-between ">
                        <div className="">
                          <span className="not-italic px-3 rounded-[6px] py-1 bg-[#8AB6A2] font-normal text-[12px] leading-3 text-white ">
                            Quiz
                          </span>
                        </div>
                        <div className="px-3 rounded-[6px] py-1 border border-[#8AB6A266]">
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
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h5 className="not-italic py-2 font-medium text-xs leading-[18px] text-[#434B54]">
                        Compelling Offer Headlines
                      </h5>
                      <p className="not-italic pb-2 font-normal text-[10px] leading-[15px] text-[#434B54]">
                        Write attention-grabbing headlines for your offers to
                        excite your leads
                      </p>
                    </div>
                    <Modal
                      center
                      overlayClassName=""
                      className="bg-[#fff] fex items-center justify-center mx-auto fixed right-0 left-0 z-50 bottom-0 top-0"
                      isOpen={modalIsOpen}
                      // onRequestClose={closeModal}
                      style={{
                        overlay: {
                          backgroundColor: "",
                        },
                        content: customStyles,
                      }}
                      contentLabel="Example Modal"
                    >
                      <div className="bg-white rounded-xl flex flex-col max-w-[346px]">
                        <div className="flex px-6 py-4 flex-col">
                          <div
                            onClick={() => setIsOpen(false)}
                            className="absolute z-[999] top-4 right-4 cursor-pointer"
                          >
                            <svg
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
                          <div className="flex items-center gap-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 10 8"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.25 7H1.75C1.6125 7 1.5 7.1125 1.5 7.25V7.75C1.5 7.8875 1.6125 8 1.75 8H8.25C8.3875 8 8.5 7.8875 8.5 7.75V7.25C8.5 7.1125 8.3875 7 8.25 7ZM9.25 2C8.83594 2 8.5 2.33594 8.5 2.75C8.5 2.86094 8.525 2.96406 8.56875 3.05938L7.4375 3.7375C7.19688 3.88125 6.88594 3.8 6.74687 3.55625L5.47344 1.32812C5.64062 1.19062 5.75 0.984375 5.75 0.75C5.75 0.335938 5.41406 0 5 0C4.58594 0 4.25 0.335938 4.25 0.75C4.25 0.984375 4.35938 1.19062 4.52656 1.32812L3.25312 3.55625C3.11406 3.8 2.80156 3.88125 2.5625 3.7375L1.43281 3.05938C1.475 2.96563 1.50156 2.86094 1.50156 2.75C1.50156 2.33594 1.16562 2 0.751562 2C0.3375 2 0 2.33594 0 2.75C0 3.16406 0.335938 3.5 0.75 3.5C0.790625 3.5 0.83125 3.49375 0.870313 3.4875L2 6.5H8L9.12969 3.4875C9.16875 3.49375 9.20938 3.5 9.25 3.5C9.66406 3.5 10 3.16406 10 2.75C10 2.33594 9.66406 2 9.25 2Z"
                                fill="#F1C31D"
                              />
                            </svg>
                            <h5 className="text-[14px] font-semibold  leading-5">
                              Need to upgrade to use this template{" "}
                            </h5>
                          </div>
                          <div className="">
                            <h5 className="text-[14px] font-semibold  leading-5">
                              Unlock the best features you can get here
                            </h5>
                            <p className="text-[12px] font-medium  leading-5">
                              You will get unlimited access to our best
                              templates
                            </p>
                            <p className="text-[12px] font-medium  leading-5">
                              You will get in the pro:
                            </p>
                          </div>
                        </div>
                        <div className="px-4 py-1 gap-1 flex">
                          <svg
                            className="mt-1"
                            width="66"
                            height="8"
                            viewBox="0 0 18 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z"
                              fill="#8AB6A2"
                            />
                          </svg>

                          <h3 className="text-[12px] font-medium  leading-5">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </h3>
                        </div>
                        <div className="px-4 py-1 gap-1 flex">
                          <svg
                            className="mt-1"
                            width="66"
                            height="8"
                            viewBox="0 0 18 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z"
                              fill="#8AB6A2"
                            />
                          </svg>

                          <h3 className="text-[12px] font-medium  leading-5">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </h3>
                        </div>
                        <div className="px-4 py-1 gap-1 flex">
                          <svg
                            className="mt-1"
                            width="66"
                            height="8"
                            viewBox="0 0 18 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM0 4.5H17V3.5H0V4.5Z"
                              fill="#8AB6A2"
                            />
                          </svg>

                          <h3 className="text-[12px] font-medium  leading-5">
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit.
                          </h3>
                        </div>
                        <button className="py-1 rounded-[6px] border-[1.5px] border-[#8AB6A2] hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] transition-all hover:text-[#000] text-base leading-5 font-medium text-white bg-[#8AB6A2] my-2 mx-6">
                          Upgrade
                        </button>
                      </div>
                    </Modal>
                  </div>
                </Link>
              )
            )}
          </div>
        )}
        {Tabselection === 1 && (
          <div className="grid md:grid-cols-[repeat(4,1fr)] grid-cols-[repeat(1,1fr)] gap-x-4 gap-y-4">
            {Array(1, 2, 3, 4, 5, 6).map((value, index) => (
              <Link
                href="#"
                class="block max-w-sm p-6 bg-white border border-[#8AB6A266] rounded-[18px] "
              >
                <div className="">
                  <div className=" flex items-center w-full">
                    <div className="flex items-center w-full justify-between ">
                      <div className="">
                        <span className="not-italic px-3 rounded-[6px] py-1 bg-[#8AB6A2] font-normal text-[12px] leading-3 text-white ">
                          Quiz
                        </span>
                      </div>
                      <div className="px-3 rounded-[6px] py-1 border border-[#8AB6A266]">
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
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h5 className="not-italic py-2 font-medium text-xs leading-[18px] text-[#434B54]">
                      Compelling Offer Headlines
                    </h5>
                    <p className="not-italic pb-2 font-normal text-[10px] leading-[15px] text-[#434B54]">
                      Write attention-grabbing headlines for your offers to
                      excite your leads
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Templete
