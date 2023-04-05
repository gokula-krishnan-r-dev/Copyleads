import React from "react"
import { Route } from "react-router-dom"
import Setting from "../pages/Setting"
import Templete from "../pages/Templete"
import Profile from "../pages/Profile"
import Layout from "../component/Layout"

const PubilcRoute = () => {
  return (
    <Route element={<Layout />}>
      <Route path="/setting" element={<Setting />} />
      <Route path="/template" element={<Templete />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/dashboard" element={<Profile />} />
    </Route>
  )
}

export default PubilcRoute
