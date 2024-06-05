import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import { Link } from "react-router-dom"

import { loginUser } from "../../api/authorisation"
import { IPasswordType, IUserAuthForm } from "../../../../types/authorisation"
import { togglePasswordType } from "../../../../helpers/togglePasswordType"

import Button from "../../../../components/button/button"
import showPassword from "../../../../assets/icons/pages/authentification/showPassword.svg"

import styles from "./authForm.module.scss"
import { emailPattern } from "../../../../constants/registConstants"

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
    mode: "all",
    delayError: 400,
  })

  const onSubmit: SubmitHandler<IUserAuthForm> = async (data) => {
    try {
      await loginUser(data)
      reset()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setAuthorisationError(true)
      setAutorisationErrorMessage(error.response.data.detail[0].msg)
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
        <div className={styles.inputContainer}>
          <input
            className={!errors.email ? styles.input : styles.error}
            type="text"
            placeholder="Email"
            onFocus={() => clearErrors("email")}
            {...register("email", {
              onChange: () => setAuthorisationError(false),
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
        <div className={styles.inputContainer}>
          <input
            className={!errors.password ? styles.passwordInput : styles.error}
            placeholder="Пароль"
            type={passwordType.type}
            onFocus={() => clearErrors("password")}
            {...register("password", {
              onChange: () => setAuthorisationError(false),
              required: "Обязательное поле",
            })}
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
        <div className={styles.inputContainer}>
          <Button content="Войти" type="submit" />
          {authorisationError && (
            <div className={styles.inputError}>{autorisationErrorMessage}</div>
          )}
        </div>
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
