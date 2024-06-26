import { Link } from "react-router-dom"

import cross from "../../../../assets/icons/pages/authentification/cross.svg"

import AuthForm from "../authForm/authForm"

import styles from "./authModal.module.scss"

const AuthModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Link to="https://fibonacciai.ru/">
          <img className={styles.cross} src={cross} />
        </Link>
        <AuthForm />
      </div>
    </div>
  )
}

export default AuthModal
