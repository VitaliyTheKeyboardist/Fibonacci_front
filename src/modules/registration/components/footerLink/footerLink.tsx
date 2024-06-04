import { Link } from "react-router-dom"
import styles from "./footerLink.module.scss"

const FooterLink = () => {
  return (
    <>
      <span className={styles.toRegisterLink}>
        Уже есть аккаунт?
        <Link className={styles.toRegisterLink} to="/login">
          Войти
        </Link>
      </span>
    </>
  )
}

export default FooterLink
