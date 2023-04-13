import React, { useState } from "react"

const Profile = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    }
    console.log(data)
  }
  return (
    <div className="flex items-center justify-center h-[80%] mx-auto">
      <div className=" bg-[white] flex-col w-[90%] xl:w-[467px] md:w-[56%] px-8 py-6 rounded-[18px] border">
        <h3 className="text-[20px] font-semibold leading-8 text-[#48535F]">
          Account Settings
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="relative pb-3 mt-4">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-[#48535F] "
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="relative pb-3">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-[#48535F] "
            >
              Last Name
            </label>
            <input
              type="text"
              id="first_name"
              class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="relative pb-3">
            <label
              for="Email"
              class="block mb-2 text-sm font-medium text-[#48535F] "
            >
              Email
            </label>
            <input
              type="text"
              id="Email"
              class=" text-sm rounded-lg outline-none bg-[#F3F3F2] block w-full p-2.5 "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="py-2 mb-3 border-[1.5px] border-[#8AB6A2]  hover:border-[1.5px] hover:border-[#8AB6A2] hover:bg-[white] transition-all hover:text-[#000] mt-3 rounded-[6px] w-full text-[14px] leading-5 font-normal text-white bg-[#8AB6A2] px-6"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  )
}

export default Profile
