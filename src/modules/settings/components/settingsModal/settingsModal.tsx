import { Link } from "react-router-dom"
import cross from "../../../../assets/icons/pages/authentification/cross.svg"

import Avatar from "react-avatar"
import { useAppSelector } from "../../../../hooks/reduxToolkitHooks"
import StatusNameForm from "../statusNameForm/statusNameForm"

import styles from "./settingsModa.module.scss"

const SettingsModal = () => {
  const user = useAppSelector((store) => store.user.user)

  return (
    <main className={styles.root}>
      <Link className={styles.cross} to="/private-profile">
        <img src={cross} />
      </Link>
      <div className={styles.title}>Аккаунт</div>
      <div className={styles.formBlock}>
        <div className={styles.avatar}>
          <Avatar name={user.name} round={true} size={"70"} />
        </div>
        <StatusNameForm user={user} />
      </div>
    </main>
  )
}

export default SettingsModal
