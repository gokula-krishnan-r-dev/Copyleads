import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import Header from "./Header/Header"

const Layout = () => {
  return (
    <div className=" flex bg-[#636D78] ">
      <div className=" md:block hidden h-screen 2xl:flex-[0.2] flex-[0.25] ">
        <Sidebar />
      </div>
      <div className="flex-1 bg-[#F3F3F2] md:overflow-auto overflow-y-scroll rounded-none md:rounded-l-[30px] h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
