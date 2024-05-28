import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/authPage/authPage"

import "./App.scss"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
