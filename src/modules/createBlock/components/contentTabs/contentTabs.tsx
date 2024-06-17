import { useNavigate } from "react-router-dom"
import error from "../../../../assets/icons/pages/privateProfile/error.svg"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"
import { IContentTabs } from "../../../../types/components/contentTabs"
import { presentationCreate } from "../../api/presentationCreate"

import styles from "./contentTabs.module.scss"

const ContentTabs = ({
  type,
  count,
  value,
  onChange,
  maxCount,
  placeholder,
}: IContentTabs) => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const template = "1"

  const handleClick = async () =>{
    try {
      const result = await presentationCreate(dispatch, value, template)
      navigate(`/presentation/${result?.uuid}`)
    } catch (error) {
      console.log(error)
    }
  }

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
                className={styles[type]}
                placeholder={placeholder}
                maxLength={maxCount + 1}
                value={value}
                onChange={(e) => onChange(e)}
              ></textarea>
              <p className={styles.symbols}>{count} символов</p>
            </div>
          </div>

          <button
            className={!count ? styles.btn : styles.btnActive}
            disabled={!count}
            onClick={handleClick}
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentTabs
