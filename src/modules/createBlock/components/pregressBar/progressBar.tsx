import { Dispatch, SetStateAction, useEffect, useState } from "react"
import styles from "./progressBar.module.scss"
import light from "../../../../assets/icons/pages/createPresentation/light.svg"
import { useNavigate } from "react-router"

export interface IProgressBar {
  isRunning: boolean
  setTemplatesIsOpen: Dispatch<SetStateAction<boolean>>
  error: boolean
  setError: Dispatch<SetStateAction<boolean>>
}

const ProgressBar = ({ isRunning, error, setError, setTemplatesIsOpen }: IProgressBar) => {
  const steps = [
    "1/4. Сокращается текст...",
    "2/4. Текст распределяется по слайдам...",
    "3/4. Подбираются картинки...",
    "4/4. Формируется презентация...",
    "Готово!",
    "Ошибка! Попробуйте снова через некоторое время."
  ]
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const [filled, setFilled] = useState(0)

  useEffect(() => {
    if (index === 3) return
    setTimeout(() => {
      setIndex(index + 1)
    }, 15000)
  }, [index])

  useEffect(() => {
    if (filled < 100 && isRunning) {
      setTimeout(() => setFilled((prev) => (prev += 0.02)), 10)
    } else if (!isRunning) {
      setIndex(4)
    } else if (error) {
      setIndex(5)
      setTimeout(() => {
        navigate('/private-profile')
        setTemplatesIsOpen(false)
        setError(false)
      }, 3000)
    }
    // else navigate("/edit")
  }, [filled, isRunning, error])

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.root}>
        <span className={styles.wait}>
          Генерация слайдов. Пожалуйста, подождите
        </span>
        <div className={styles.process}>
          <span className={styles.step}>{steps[index]}</span>
          <div className={styles.progressBarOut}>
            <div
              style={{
                width: `${filled}%`,
                height: "100%",
                background: "linear-gradient(90deg, #2b38cd 0%, #7455d2 100%)",
                transition: "width 0.5s",
                borderRadius: "100px",
              }}
            ></div>
          </div>
        </div>
        <div className={styles.adviceBlock}>
          <div className={styles.lightBlock}>
            <img src={light} />
            <span className={styles.adviceTitle}>Внимание!</span>
          </div>
          <p className={styles.advice}>
            Генерация презентации обычно занимает не больше 2,5 минут. Мы уже
            работаем над ускорением, а пока спасибо за Ваше ожидание!
          </p>
        </div>
      </div>
    </>
  )
}

export default ProgressBar
