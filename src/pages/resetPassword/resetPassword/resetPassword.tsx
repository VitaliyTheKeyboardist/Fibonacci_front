import { useState } from "react"
import { Link } from "react-router-dom"

import Button from "../../../components/button/button"
import cross from "../../../assets/icons/pages/authentification/cross.svg"

import styles from "./resetPassword.module.scss"
import { sendEmail } from "../../../modules/authentification/api/recoverPassword"

const ResetPassword = () => {
  const [email, setEmail] = useState<string>("")

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <Link to="/login">
          <img className={styles.cross} src={cross} />
        </Link>
        <span className={styles.enter}>Вход</span>
        <form
          className={styles.loginForm}
          onSubmit={(e) => sendEmail(e, email)}
        >
          <input
            className={styles.input}
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" className="submit" content="Далее" />
          <span className={styles.toRegisterLink}>
            Нет аккаунта?
            <Link className={styles.toRegisterLink} to="/register">
              Зарегистрироваться
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
