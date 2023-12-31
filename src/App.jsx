import { Route, Routes } from "react-router-dom"
import "./App.css"
import Setting from "./pages/Setting"
import Templete from "./pages/Templete"
import Profile from "./pages/Profile"
import Layout from "./component/Layout"
import Signup from "./component/Signup/Signup"
import Login from "./component/Login/Login"
import TempleteEdit from "./pages/TempleteEdit"
import Dashboard from "./component/Dashboard/Dashboard"
import AOS from "aos"
import "aos/dist/aos.css"
import Payment from "./component/Payment/Payment"
AOS.init()
function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/setting" element={<Setting />} />
          <Route path="/template" element={<Templete />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/templateedit" element={<TempleteEdit />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/payment" element={<Payment />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
