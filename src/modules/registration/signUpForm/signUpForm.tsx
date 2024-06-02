import showPassword from "../../../assets/icons/pages/authentification/showPassword.svg"
// import hidePassword from "../../../assets/icons/pages/authentification/hidePassword.svg"

import styles from "./signUpForm.module.scss"
import { useState } from "react"
import { togglePasswordType } from "../../../helpers/togglePasswordType"

const SignUpForm = () => {
  const [passwordType, setPasswordType] = useState({
    image: showPassword,
    type: "password",
    className: "hidePassword",
  })
  const [passwordConfirm, setPasswordConfirm] = useState({
    image: showPassword,
    type: "password",
    className: "hidePassword",
  })

  return (
    <>
      <form className={styles.loginForm}>
        <input className={styles.input} placeholder="Email" type="email" />

        <div className={styles.password}>
          <input
            className={styles.passwordInput}
            placeholder="Пароль"
            type={passwordType.type}
          />

          <img
            className={styles[passwordType.className]}
            src={passwordType.image}
            onClick={() => togglePasswordType(passwordType, setPasswordType)}
          />
        </div>

        <div className={styles.password}>
          <input
            className={styles.passwordInput}
            placeholder="Подтвердите пароль"
            type={passwordConfirm.type}
          />
          <img
            className={styles[passwordConfirm.className]}
            src={passwordConfirm.image}
            onClick={() =>
              togglePasswordType(passwordConfirm, setPasswordConfirm)
            }
          />
        </div>

        <span className={styles.passwordRequires}>
          Пароль должен содержать не менее 8 знаков, включать заглавные буквы,
          цифры и специальные символы
        </span>

        <button className={styles.button} type="submit">
          Зарегистрироваться
        </button>
      </form>
    </>
  )
}

export default SignUpForm
