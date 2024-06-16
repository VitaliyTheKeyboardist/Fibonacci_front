
import styles from "./finishSlide.module.scss"

const FinishSlide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>Спасибо за внимание!</h1>
        <p className={styles.text}>
          Презентация создана при помощи сервиса Fibonacci
        </p>
      </div>
    </div>
  )
}

export default FinishSlide
