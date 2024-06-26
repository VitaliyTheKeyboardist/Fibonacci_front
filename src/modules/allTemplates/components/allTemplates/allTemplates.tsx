import { templates } from "../../../../constants/templates"
import Template from "../template/template"
import Button from "../../../../components/button/button"

import { useNavigate } from "react-router-dom"

import styles from "./allTemplates.module.scss"

const AllTemplates = () => {

  const navigate = useNavigate()

 
  return (
    <div className={styles.container}>
      <div className={styles.title}>Шаблоны</div>
      <div className={styles.templatesBlock}>
        {templates.map((item) => (
          <div className={styles.templateItemBlock} key={item.template}>
            <div className={styles.templateCard}>
              <Template item={item} />
            </div>
            <div className={styles.templateAction}>
              <Button
                type="button"
                className="button_template"
                content="Создать презентацию"
                onClick={() => navigate("/private-profile")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTemplates
