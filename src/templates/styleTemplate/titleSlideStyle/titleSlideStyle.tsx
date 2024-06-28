import { ITitleSlide } from "../../../types/components/titleSlide"
import styles from "./titleSlideStyle.module.scss"

const TitleSlideStyle = ({ type, title }: ITitleSlide) => {
  switch (type) {
    case "presentation":
      return <div className={styles.container}></div>
    case "presentationList":
      return (
        <div className={styles.listContainer}>
          <div className={styles.listTitleWrap}>
            <h1 className={styles.listTitle}>{title}</h1>
          </div>
        </div>
      )
    case "presentationCard":
      return (
        <div className={styles.listContainer}>
          <div className={styles.listTitleWrap}>
            <h1 className={styles.cardTitle}>{title}</h1>
          </div>
        </div>
      )
    case "bigSlide":
      return (
        <div className={styles.bigSlide}>
          <div className={styles.titleWrap}>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
      )
  }
}

export default TitleSlideStyle
