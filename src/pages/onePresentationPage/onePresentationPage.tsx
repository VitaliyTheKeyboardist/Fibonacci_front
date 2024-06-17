import { Outlet } from "react-router-dom"
import PresentationNavBar from "../../modules/presentationNavBar/presentationNavBar"

import styles from './onePresentationPage.module.scss'

const OnePresentationPage = () => {
  return (
    <main className={styles.pageWrap}>
      <PresentationNavBar />
      <Outlet />
    </main>
  )
}

export default OnePresentationPage
