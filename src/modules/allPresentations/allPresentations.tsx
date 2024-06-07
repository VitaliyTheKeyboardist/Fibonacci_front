import PresentationCard from "./components/presentationCard/presentationCard"

import styles from "./allPresentations.module.scss"

const AllPresentations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Все презентации</span>
      </div>
      <div className={styles.presentationsList}>
        <PresentationCard title="ПРИМЕР ПРЕЗЫ" template="Не придумал"/>
        <PresentationCard title="ПРИМЕР ПРЕЗЫ" template="Не придумал"/>
      </div>
    </div>
  )
}

export default AllPresentations
