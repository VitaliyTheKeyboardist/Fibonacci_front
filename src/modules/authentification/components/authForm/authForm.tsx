import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

import showPassword from "../../../../assets/icons/pages/authentification/showPassword.svg"

import { useState } from "react"
import { Link } from "react-router-dom"

import { loginUser } from "../../api/authorisation"
import { emailPattern } from "../../../../helpers/authConstants"

import { IPasswordType, IUserAuthForm } from "../../../../types/authorisation"
import { togglePasswordType } from "../../../../helpers/togglePasswordType"

import Button from "../../../../components/button/button"
import styles from "./authForm.module.scss"

const AuthForm = () => {
  const [authorisationError, setAuthorisationError] = useState<boolean>(false)
  const [autorisationErrorMessage, setAutorisationErrorMessage] =
    useState<string>("")
  const [passwordType, setPasswordType] = useState<IPasswordType>({
    image: showPassword,
    type: "password",
    className: "hidePassword",
  })
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    clearErrors,
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

  return (
    <>
      <h1 className={styles.enter}>Вход</h1>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className={styles.email}>
          <input
            className={!errors.email ? styles.input : styles.error}
            type="text"
            placeholder="Email"
            onFocus={() => clearErrors("email")}
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: emailPattern,
                message: "Введите корректный email",
              },
            })}
          />
          {errors.email && (
            <div className={styles.inputError}>{errors.email.message}</div>
          )}
        </div>
        <div className={styles.password}>
          <input
            className={!errors.password ? styles.passwordInput : styles.error}
            placeholder="Пароль"
            type={passwordType.type}
            onFocus={() => clearErrors("password")}
            {...register("password", { required: "Обязательное поле" })}
          />
          <img
            className={styles[passwordType.className]}
            src={passwordType.image}
            onClick={() => togglePasswordType(passwordType, setPasswordType)}
          />
          {errors.password && (
            <div className={styles.inputError}>{errors.password.message}</div>
          )}
        </div>
        <Link className={styles.passwordLink} to="/reset-password">
          Забыли пароль?
        </Link>
        {authorisationError && (
          <div style={{ color: "var(--text-dop)" }}>
            {autorisationErrorMessage}
          </div>
        )}
        <Button content="Войти" type="submit" />

        <span className={styles.toRegisterLink}>
          Нет аккаунта?
          <Link className={styles.toRegisterLink} to="/regist">
            Зарегистрироваться
          </Link>
        </span>
      </form>
    </>
  )
}

export default AuthForm