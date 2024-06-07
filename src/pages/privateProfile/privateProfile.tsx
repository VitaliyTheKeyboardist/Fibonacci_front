import { Outlet } from "react-router-dom"

import SideBar from "../../modules/sideBar/sideBar"

import styles from './privateProfile.module.scss'
import PageFooter from "../../modules/pageFooter/pageFooter"

const PrivateProfile = () => {

  return (
    <main className={styles.pageWrap}>
      <SideBar />
      <Outlet />
      <PageFooter />
    </main>
  )
}

export default PrivateProfile
