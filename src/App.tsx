import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/authPage/authPage"

import "./App.scss"
import CreatePage from "./pages/createPage/createPage"
import HomePage from "./pages/homePage/homePage"
import RegistPage from "./pages/registPage/registPage"
import MinimaTemplate from "./templates/minimaTemplate/minimaTemplate"
import VerificationPage from "./pages/verificationPage/verificationPage"
import ResetPassword from "./pages/resetPassword/resetPassword/resetPassword"
import Success from "./pages/resetPassword/success/success"
import PrivateProfile from "./pages/privateProfile/privateProfile"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/regist" element={<RegistPage />} />
        <Route path="/minimaTemplate" element={<MinimaTemplate />} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/success" element={<Success />} />
        <Route path="/private-profile" element={<PrivateProfile />}>
          <Route index element={<CreatePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
