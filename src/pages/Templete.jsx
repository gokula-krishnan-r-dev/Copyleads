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

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
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
                      shouldCloseOnEsc
                      shouldCloseOnOverlayClick={true}
                      overlayClassName="react-modal__content"
                      className="bg-[#fff] fixed top-0"
                      isOpen={modalIsOpen}
                      onRequestClose={closeModal}
                      style={{
                        overlay: {
                          backgroundColor: "red",
                        },
                        content: customStyles,
                      }}
                      contentLabel="Example Modal"
                    >
                      <div className="">fgfsdsdgfg</div>
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
