import { Link } from "react-router-dom"
import cross from "../../../assets/icons/pages/authentification/cross.svg"
import styles from "./formTitle.module.scss"

const FormTitle = () => {
  return (
    <>
      <Link to="https://fibonacciai.ru/">
        <img className={styles.cross} src={cross} />
      </Link>
      <h1 className={styles.enter}>Регистрация</h1>
    </>
  )
}

export default FormTitle
