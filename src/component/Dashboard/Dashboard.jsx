import React from "react"

import Getstart from "./Getstart"
import Folders from "./Folders"
import Projects from "./Projects"
const Dashboard = () => {
  return (
    <div className="mb-6 md:mb-0">
      <Getstart />
      <Folders />
      <Projects />
    </div>
  )
}

export default Dashboard
