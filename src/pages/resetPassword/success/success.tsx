import { Link } from 'react-router-dom';
import cross from "../../../assets/icons/pages/authentification/cross.svg"


import Button from '../../../components/button/button';

import styles from './success.module.scss'

const Success = () => {
    return (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <Link to="/">
              <img className={styles.cross} src={cross} />
            </Link>
            <span className={styles.enter}>Вход</span>
            <span className={styles.text}>
              Мы отправили на Вашу почту инструкцию по сбросу пароля.
            </span>
    
            <Link to="/login">
              <Button className="button" type="button" content="Войти заново" />
            </Link>
    
            <span className={styles.toRegisterLink}>
              Нет аккаунта?
              <Link className={styles.toRegisterLink} to="/regist">
                Зарегистрироваться
              </Link>
            </span>
          </div>
        </div>
      );
}

export default Success