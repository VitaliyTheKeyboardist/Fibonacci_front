import supportLink from "../../assets/icons/pages/privateProfile/supportLink.svg"

import styles from "./pageFooter.module.scss"

const PageFooter = () => {
  return (
    <>
      <span className={styles.beta}>Beta-версия</span>
      <img className={styles.image} src={supportLink} alt="Знак вопроса" />
    </>
  )
}

export default PageFooter
