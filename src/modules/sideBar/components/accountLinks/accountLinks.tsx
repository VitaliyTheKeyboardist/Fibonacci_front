import { Link } from "react-router-dom"
import { IAccountLinks } from "../../../../types/components/accountLinks"
import enter from '../../../../assets/icons/pages/privateProfile/enter.svg'
import question from '../../../../assets/icons/pages/privateProfile/question.svg'
import settings from '../../../../assets/icons/pages/privateProfile/settings.svg'


import styles from "./accountLinks.module.scss"

const AccountLinks = ({ isOpen }: IAccountLinks) => {
  return (
    isOpen && (
      <>
        <div className={styles.linksMenu}>
          <Link to="/private-profile/settings" className={styles.item}>
            <img src={settings} alt="шестеренка" />
            <p>Настройки</p>
          </Link>
          <Link to="/private-profile/settings" className={styles.item}>
            <img src={question} width="14px" alt="вопросик" />
            <p>Помощь и поддержка</p>
          </Link>
          <Link to="/" className={styles.item}>
            <img src={enter} width="14px" alt="значок ввода" />
            <p>Выйти из аккаунта</p>
          </Link>
        </div>
      </>
    )
  )
}

export default AccountLinks
