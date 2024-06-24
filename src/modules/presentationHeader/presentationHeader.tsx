
import BackArrow from "../../assets/icons/pages/presentation/backArrow.svg"
import CloudIcon from "../../assets/icons/pages/presentation/CloudIcon.svg"
import { useNavigate } from "react-router-dom"
import { IPresentationHeader } from "../../types/components/presentationHeader"
import Avatar from "react-avatar"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { useEffect } from "react"
import { getUser } from "../../store/slices/userSlice"

import styles from "./presentationHeader.module.scss"


const PresentationHeader = ({ presentation }: IPresentationHeader) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((store) => store.user.user)
  useEffect(() => {
    if (!user.email) {
      dispatch(getUser())
      console.log("Обновил юзера")
    }
  }, [dispatch, user])
  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <div className={styles.nameBlock}>
        <button
          className={styles.buttonBack}
          onClick={() => navigate("/private-profile/all-presentations")}
        >
          <img src={BackArrow} alt="arrow" />
        </button>
        <div className={styles.name}>{presentation.title}</div>
        <button className={styles.buttonBack}>
          <img src={CloudIcon} alt="cloud" width={20} height={13} />
        </button>
      </div>
      <div className={styles.controlBlock}>
        <Avatar
          name={user.name ? user.name : user.email}
          size="20"
          round={true}
        />
      </div>
    </header>
  )
}

export default PresentationHeader
