import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { getUser } from "../../store/slices/userSlice"
import Profile from "./components/profile/profile"
import NavBar from "./components/navBar/navBar"

import styles from './sideBar.module.scss'

const SideBar = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <nav className={styles.navigateWrap}>
      {user && <Profile user={user} />}
      <NavBar />
    </nav>
  )
}

export default SideBar
