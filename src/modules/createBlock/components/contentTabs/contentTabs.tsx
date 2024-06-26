import { useNavigate } from "react-router-dom"
import error from "../../../../assets/icons/pages/privateProfile/error.svg"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"
import { IContentTabs } from "../../../../types/components/contentTabs"
import {
  presentationCreate,
  presentationCreateText,
} from "../../api/presentationCreate"

import styles from "./contentTabs.module.scss"
import { useState } from "react"
import TemplatesModal from "../templatesModal/templatesModal"

const ContentTabs = ({
  className,
  count,
  value,
  onChange,
  maxCount,
  placeholder,
  type,
}: IContentTabs) => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const [templatesIsOpen, setTemplatesIsOpen] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const template = "classic"

  const handleClick = () => {
    setTemplatesIsOpen(true)
  }
  // const handleClick = async () => {
  //   try {
  //     setDisabled(true)
  //     if (type === "topic") {
  //       const result = await presentationCreate(dispatch, value, template, type)
  //       navigate(`/presentation/${result?.uuid}/slide/0`)
  //       setDisabled(false)
  //     }
  //     if (type === "text") {
  //       const result = await presentationCreateText(dispatch, value, template, type)
  //       navigate(`/presentation/${result?.uuid}/slide/0`)
  //       setDisabled(false)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className={styles.contentTabs}>
      <div className={styles.activeContent}>
        <div className={styles.inputWrapper}>
          {count > maxCount && (
            <div className={styles.errorPopupWrapper}>
              <div className={styles.errorPopup}>
                <img src={error} />
                <p>
                  Ваш текст превышает допустимый лимит в {maxCount} символов.
                  Пожалуйста, сократите текст.
                </p>
              </div>
            </div>
          )}
          <div className={styles.inputContainer}>
            <div className={styles.inputWrapper}>
              <textarea
                className={styles[className]}
                placeholder={placeholder}
                maxLength={maxCount + 1}
                value={value}
                onChange={(e) => onChange(e)}
              ></textarea>
              <p className={styles.symbols}>{count} символов</p>
            </div>
          </div>

          <button
            className={!count || disabled ? styles.btn : styles.btnActive}
            disabled={!count || disabled}
            onClick={handleClick}
          >
            Продолжить
          </button>
        </div>
      </div>
      {templatesIsOpen && (
        <TemplatesModal
          setTemplatesIsOpen={setTemplatesIsOpen}
          setDisabled={setDisabled}
          type={type}
          value={value}
        />
      )}
    </div>
  )
}

export default ContentTabs
