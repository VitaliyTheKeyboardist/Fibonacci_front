import { IFinishSlide } from "../../../types/components/presentationTemplate"
import styles from "./finishSlideClassic.module.scss"

const FinishSlideClassic = ({ type }: IFinishSlide) => {
  if (type === "presentation")
    return (
      <div className={styles.container}>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>Спасибо за внимание!</h1>
        </div>
      </div>
    )
  if (type === "bigSlide")
    return (
      <div className={styles.bigSlide}>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>Спасибо за внимание!</h1>
        </div>
      </div>
    )

  if (type === "presentationList")
    return (
      <div className={styles.listContainer}>
        <div className={styles.listTitleWrap}>
          <h1 className={styles.listTitle}>Спасибо за внимание!</h1>
          <p className={styles.listText}>
            Презентация создана при помощи сервиса Fibonacci
          </p>
        </div>
      </div>
    )
}

export default FinishSlideClassic
