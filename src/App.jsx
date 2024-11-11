import { useState } from "react"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Home from "./component/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/home" element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
