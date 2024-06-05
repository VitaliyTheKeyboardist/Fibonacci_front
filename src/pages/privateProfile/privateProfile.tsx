import { Outlet } from "react-router-dom"

import SideBar from "../../modules/sideBar/sideBar"

const PrivateProfile = () => {
  
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  )
}

export default PrivateProfile
