import { Link } from 'react-router-dom';
import styles from './verificationPage.module.scss';

const VerificationPage = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalInner}>
        <p className={styles.text}>
          На вашу почту было отправлено письмо для активации аккаунта. Пройдите по ссылке в письме
          для дальнейшего входа на сайт
        </p>
        <Link className={styles.link} to="/login">
          Страница входа
        </Link>
      </div>
    </div>
  );
};

export default VerificationPage;