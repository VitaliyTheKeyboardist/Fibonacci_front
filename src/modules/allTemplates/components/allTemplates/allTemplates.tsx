import { MouseEvent, useState } from "react"
import { templates } from "../../../../constants/templates"
import Template from "../template/template"
import styles from "./allTemplates.module.scss"

const AllTemplates = () => {
  const [id, setId] = useState("2")

  const handleChange = (e: MouseEvent) => {
    e.preventDefault()
    setId(e.currentTarget.id)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>Шаблоны</div>
      <div className={styles.templatesBlock}>
        {templates.map((item) => (
          <Template id={id} item={item} setId={handleChange} />
        ))}
      </div>
    </div>
  )
}

export default AllTemplates
