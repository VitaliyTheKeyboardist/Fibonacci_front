import { useState } from "react"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"

import { IPasswordType, IUserRegistForm } from "../../../../types/authorisation"
import { emailPattern, passwordPattern } from "../../../../constants/registConstants"
import { togglePasswordType } from "../../../../helpers/togglePasswordType"

import Button from "../../../../components/button/button"
import showPassword from "../../../../assets/icons/pages/authentification/showPassword.svg"

import styles from "./signUpForm.module.scss"
import { registUser } from "../../api/registration"
import { useNavigate } from "react-router-dom"

const SignUpForm = () => {
  const [authorisationError, setAuthorisationError] = useState<boolean>(false)
  const [autorisationErrorMessage, setAutorisationErrorMessage] =
    useState<string>("")
  const [passwordType, setPasswordType] = useState<IPasswordType>({
    image: showPassword,
    type: "password",
    className: "hidePassword",
  })
  const [passwordConfirm, setPasswordConfirm] = useState<IPasswordType>({
    image: showPassword,
    type: "password",
    className: "hidePassword",
  })

  const navigate = useNavigate()

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<IUserRegistForm>({
    mode: "all",
    delayError: 400,
  })

 const onSubmit: SubmitHandler<IUserRegistForm> = async (data) => {
    try {
      await registUser(data)
      reset()
      console.log(data)
      navigate('/verification')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setAuthorisationError(true)
      setAutorisationErrorMessage(error.response.data.detail)
    }
  }

  const onError: SubmitErrorHandler<IUserRegistForm> = (data) =>
    console.log(data)

  return (
    <>
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
        <div className={styles.password}>
          <input
            className={!errors.password ? styles.passwordInput : styles.error}
            placeholder="Пароль"
            type={passwordType.type}
            onFocus={() => setAuthorisationError(false)}
            {...register("password", {
              onChange: () => clearErrors(["password", "re_password"]),
              required: "Обязательное поле",
              pattern: passwordPattern,
              validate: (value) => value === watch('re_password') || "Пароли не совпадают"
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
        <div className={styles.password}>
          <input
            className={
              !errors.re_password ? styles.passwordInput : styles.error
            }
            placeholder="Подтвердите пароль"
            type={passwordConfirm.type}
            {...register("re_password", {
              onChange: () => clearErrors(["password", "re_password"]),
              required: "Обязательное поле",
              validate: (value) => value === watch('password') || "Пароли не совпадают"
            })}
          />
          <img
            className={styles[passwordConfirm.className]}
            src={passwordConfirm.image}
            onClick={() =>
              togglePasswordType(passwordConfirm, setPasswordConfirm)
            }
          />
          {errors.re_password && (
            <div className={styles.inputError}>
              {errors.re_password.message}
            </div>
          )}
        </div>
        <span
          className={
            !errors.password
              ? styles.passwordRequires
              : styles.passwordRequiresError
          }
        >
          Пароль должен содержать не менее 8 знаков, включать заглавные буквы,
          цифры и специальные символы
        </span>
        <div className={styles.inputContainer}>
          <Button content="Зарегистрироваться" type="submit" />
          {authorisationError && (
            <div className={styles.inputError}>{autorisationErrorMessage}</div>
          )}
        </div>
      </form>
    </>
  )
}

export default SignUpForm
