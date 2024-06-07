import { IPresentationCard } from "../../../../types/components/presentationCard"
import styles from "./presentationCard.module.scss"

const PresentationCard = ({ title, template }: IPresentationCard) => {
  return (
    <div className={styles.presentationItem}>
      <div className={styles.img}></div>
      <span className={styles.name}>{title}</span>
      <button className={styles.updated}>ОТКРЫТЬ</button>
    </div>
  )
}

export default PresentationCard
