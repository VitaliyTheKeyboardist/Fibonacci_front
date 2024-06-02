import { templateContent } from "../../../assets/mocks/minimaTemplateMocks"
import styles from "./titleSlide.module.scss"

const MinimaTitle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{templateContent.title}</h1>
      </div>
    </div>
  )
}

export default MinimaTitle
