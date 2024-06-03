import showPassword from "../../../assets/icons/pages/authentification/showPassword.svg"

import { useState } from "react"
import { togglePasswordType } from "../../../helpers/togglePasswordType"
import { IPasswordType, IUserRegistForm } from "../../../types/authorisation"
import Button from "../../../components/button/button"
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form"
import { emailPattern } from "../../../helpers/authConstants"
import { passwordPattern } from "../../../constants/registConstants"
import styles from "./signUpForm.module.scss"

const SignUpForm = () => {
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

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm<IUserRegistForm>({
    mode: "onBlur",
    delayError: 400,
  })

  const passwordValue = watch("password")
  const rePasswordValue = watch("re_password")

  const onSubmit: SubmitHandler<IUserRegistForm> = async (data) => {
    reset()
    console.log(data)
  }

  const onError: SubmitErrorHandler<IUserRegistForm> = (data) =>
    console.log(data)
console.log(!errors)

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
              required: true,
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
            {...register("password", {
              required: "Обязательное поле",
              pattern: passwordPattern,
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
            onFocus={() => clearErrors("re_password")}
            {...register("re_password", {
              required: "Обязательное поле",
              validate: () => {
                if (passwordValue !== rePasswordValue)
                  return "Пароли не совпадают"
              },
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
        <Button content="Зарегистрироваться" type="submit" />
      </form>
    </>
  )
}

export default SignUpForm
