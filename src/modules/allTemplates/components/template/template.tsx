import { ITemplate } from "../../../../types/components/template"
import styles from "./template.module.scss"

const Template = ({ id, item, setId }: ITemplate) => {
  return (
    <div className={styles.templateItem}>
      <img
        className={id && id === item.id ? styles["selected"] : styles.img}
        src={item.img}
        id={item.id}
        onClick={setId}
      />
      <p className={styles.text}>{item.title}</p>
    </div>
  )
}

export default Template
