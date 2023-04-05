import { Route, RouterProvider, Routes } from "react-router-dom"
import "./App.css"
import { router } from "./route/route"
import Layout from "./component/Layout"
import Setting from "./pages/Setting"
import Templete from "./pages/Templete"
import Profile from "./pages/Profile"
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/setting" element={<Setting />} />
        <Route path="/template" element={<Templete />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/dashboard" element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
