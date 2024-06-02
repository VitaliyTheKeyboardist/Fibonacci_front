// import { Link } from "react-router-dom"
import SignUpForm from "../signUpForm/signUpForm"
// import cross from '../../../assets/icons/pages/authentification/cross.svg'

import styles from "./signUpModal.module.scss"
import FormTitle from "../formTitle/formTitle"
import FooterLink from "../footerLink/footerLink"
const SignUpModal = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <FormTitle />
        <SignUpForm />
        <FooterLink />
      </div>
    </div>
  )
}

export default SignUpModal