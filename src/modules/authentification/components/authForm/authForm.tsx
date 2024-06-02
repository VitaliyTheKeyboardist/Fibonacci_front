import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

import showPassword from "../../../../assets/icons/pages/authentification/showPassword.svg"
import hidePassword from "../../../../assets/icons/pages/authentification/hidePassword.svg"

import { useState } from "react"
import { Link } from "react-router-dom"

import { loginUser } from "../../api/authorisation"
import { emailPattern } from "../../../../helpers/authConstants"

import styles from "./authForm.module.scss"

export interface IUserAuthForm {
  email: string
  password: string
}

const AuthForm = () => {
  const [authorisationError, setAuthorisationError] = useState<boolean>(false)
  const [autorisationErrorMessage, setAutorisationErrorMessage] =
    useState<string>("")
  const [passwordType, setPasswordType] = useState<string>("password")
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserAuthForm>({
    mode: "onBlur",
    delayError: 400,
  })

  const onSubmit: SubmitHandler<IUserAuthForm> = async (data) => {
    try {
      await loginUser(data)
      reset()
    } catch (error: any) {
        setAuthorisationError(true)
        setAutorisationErrorMessage(error.response.data.detail)
        console.log(error)
      
    }
  }
  const onError: SubmitErrorHandler<IUserAuthForm> = (data) => console.log(data)

  const togglePasswordType = () => {
    if (passwordType === "password") setPasswordType("text")
    if (passwordType === "text") setPasswordType("password")
  }

  return (
    <>
      <h1 className={styles.enter}>Вход</h1>

      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <input
          className={!errors.email ? styles.input : styles.error}
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value: emailPattern,
              message: "Введите корректный email",
            },
          })}
        />

        <div className={styles.password}>
          <input
            className={!errors.password ? styles.passwordInput : styles.error}
            placeholder="Пароль"
            {...register("password", { required: true })}
            type={passwordType}
          />
          {passwordType === "text" && (
            <img
              className={styles.hidePassword}
              src={hidePassword}
              onClick={togglePasswordType}
            />
          )}
          {passwordType === "password" && (
            <img
              className={styles.showPassword}
              src={showPassword}
              onClick={togglePasswordType}
            />
          )}
        </div>

        <Link className={styles.passwordLink} to="/reset-password">
          Забыли пароль?
        </Link>
        {authorisationError && <div style={{ color: 'var(--text-dop)'}}>{autorisationErrorMessage}</div>}
        <button className={styles.button} type="submit">
          Войти
        </button>

        <span className={styles.toRegisterLink}>
          Нет аккаунта?
          <Link className={styles.toRegisterLink} to="/regist">
            Зарегистрироваться
          </Link>
        </span>
      </form>
      {/* <button className={styles.googleButton} onClick={googleAuth}>
            Google
          </button> */}
    </>
  )
}

export default AuthForm
