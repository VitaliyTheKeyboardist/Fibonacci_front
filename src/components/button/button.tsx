import { IButton } from "../../types/components/button"
import styles from "./button.module.scss"

const Button = ({ className, content, type, onClick }: IButton) => {
  return (
    <button className={styles[className]} type={type} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button
