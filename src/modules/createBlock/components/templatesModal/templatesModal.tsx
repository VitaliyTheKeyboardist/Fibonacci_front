import { Dispatch, SetStateAction, useState } from "react"

import { templates } from "../../../../constants/templates"
import styles from "./templatesModal.module.scss"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"
import { useNavigate } from "react-router-dom"
import {
  presentationCreate,
  presentationCreateText,
} from "../../api/presentationCreate"
import ProgressBar from "../pregressBar/progressBar"

export interface ITemplatesModal {
  type: "topic" | "text"
  value: string
  setTemplatesIsOpen: Dispatch<SetStateAction<boolean>>
  setDisabled: Dispatch<SetStateAction<boolean>>
}

const TemplatesModal = ({
  type,
  value,
  setTemplatesIsOpen,
  setDisabled,
}: ITemplatesModal) => {
  const [template, setTemplate] = useState("minima")
  const [progress, setProgress] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      setIsRunning(true)
      setProgress(true)
      setDisabled(true)
      if (type === "topic") {
        const result = await presentationCreate(dispatch, value, template, type)
        setIsRunning(false)
        navigate(`/presentation/${result?.uuid}/slide/0`)
        setDisabled(false)
        setTemplatesIsOpen(false)
      }
      if (type === "text") {
        const result = await presentationCreateText(
          dispatch,
          value,
          template,
          type
        )
        setIsRunning(false)
        navigate(`/presentation/${result?.uuid}/slide/0`)

        setDisabled(false)
        setTemplatesIsOpen(false)
      }
    } catch (e) {
      setError(true)
      console.log(e)
    }
  }

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => setTemplatesIsOpen(false)}
      ></div>
      <div className={styles.root}>
        <p className={styles.title}>Выберите шаблон</p>
        <div className={styles.templates}>
          {templates.map((item, index) => (
            <div className={styles.templateItem} key={index}>
              <img
                className={
                  template === item.template ? styles["selected"] : styles.img
                }
                src={item.img}
                id={item.template}
                onClick={(e) => setTemplate(e.currentTarget.id)}
              />
              <p className={styles.text}>{item.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.btnWrapper}>
          <button className={styles.btn} onClick={handleClick}>
            Сгенерировать презентацию
          </button>
        </div>
        {progress && (
          <ProgressBar
            isRunning={isRunning}
            error={error}
            setError={setError}
            setTemplatesIsOpen={setTemplatesIsOpen}
          />
        )}
      </div>
    </>
  )
}

export default TemplatesModal
