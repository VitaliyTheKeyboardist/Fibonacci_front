import { useState } from "react"
import Avatar from "react-avatar"

import { IProfile } from "../../../../types/components/profile"
import arrowDown from "../../../../assets/icons/pages/privateProfile/arrowDown.svg"
import arrowUp from "../../../../assets/icons/pages/privateProfile/arrowUp.svg"

import AccountLinks from "../accountLinks/accountLinks"

import styles from "./profile.module.scss"

const Profile = ({ user }: IProfile) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className={styles.profileWrap}>
      <div
        className={styles.profileCard}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className={styles.userPic}>
          <Avatar
            name={user.name ? user.name : user.email}
            round={true}
            size={"30"}
          />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Виталий</span>
          <span className={styles.userEmail}>{user.email}</span>
        </div>
        <div className={styles.arrow}>
          <img src={isOpen ? arrowUp : arrowDown} alt="стрелка" />
        </div>
      </div>
      <AccountLinks isOpen={isOpen}/>
    </div>
  )
}

export default Profile
