import { ITitlSlide } from "../../../types/components/minimaTitle"
import styles from "./titleSlide.module.scss"

const TitleSlide = ({ type, title }: ITitlSlide) => {
  if (type === "presentation")
    return (
      <div className={styles.container}>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </div>
    )
  if (type === "presentationList")
    return (
      <div className={styles.listContainer}>
        <div className={styles.listTitleWrap}>
          <h1 className={styles.listTitle}>{title}</h1>
        </div>
      </div>
    )
}

export default TitleSlide
