import error from "../../../../assets/icons/pages/privateProfile/error.svg"
import { IContentTabs } from "../../../../types/components/contentTabs"

import styles from "./contentTabs.module.scss"

const ContentTabs = ({
  type,
  count,
  value,
  onChange,
  maxCount,
  placeholder,
}: IContentTabs) => {
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
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContentTabs
