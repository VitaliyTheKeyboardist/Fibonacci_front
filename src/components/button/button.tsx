import { IButton } from "../../types/components/button"
import styles from "./button.module.scss"

const Button = ({ content, type }: IButton) => {
  return (
    <button className={styles[type]} type={type} >
      {content}
    </button>
  )
}

export default Button
