import { IButton } from "../../types/components/button"
import styles from "./button.module.scss"

const Button = ({ className, content, type, onClick, disabled }: IButton) => {
  return (
    <button className={styles[className]} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}

export default Button
