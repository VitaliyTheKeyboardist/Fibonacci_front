import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/authPage/authPage"

import "./App.scss"
import CreatePage from "./pages/createPage/createPage"
import HomePage from "./pages/homePage/homePage"
import RegistPage from "./pages/registPage/registPage"
import MinimaTemplate from "./templates/minimaTemplate/minimaTemplate"

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/regist" element={<RegistPage />} />
          <Route path="/create-test" element={<CreatePage />} />
          <Route path="/minimaTemplate" element={<MinimaTemplate />} />
        </Routes>
    </>
  )
}

export default App
