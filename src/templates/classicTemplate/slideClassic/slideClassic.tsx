import { ISlide } from "../../../types/components/presentation"
import Diamond from "../../../assets/templates/classicTemplate/diamond.svg"
import styles from "./slideClassic.module.scss"

export interface IMinimalSlide {
  type: "navList" | "container" | "bigSlide"
  numberSlide: string
  content: ISlide
}

const SlideClassic = ({ type, numberSlide, content }: IMinimalSlide) => {
  switch (numberSlide) {
    case "ONE":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.title}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.text}
            </div>
            <img className={styles.diamond} src={Diamond} alt="Ромбик" />
            {content.images.map((image) => {
              return (
                <div
                  key={image.api_url}
                  className={styles[`slideWrap${numberSlide}__imageContainer`]}
                >
                  <img
                    src={image.api_url}
                    className={styles.image}
                    alt={image.description}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    case "TWO":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.title}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.text}
            </div>
            {content.images.map((image) => {
              return (
                <div
                  key={image.api_url}
                  className={styles[`slideWrap${numberSlide}__imageContainer`]}
                >
                  <img
                    src={image.api_url}
                    className={styles.image}
                    alt={image.description}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    case "THREE":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.title}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.text}
            </div>
            {content.images.map((image) => {
                return (
                  <div
                    key={image.api_url}
                    className={
                      styles[`slideWrap${numberSlide}__imageContainer`]
                    }
                  >
                    <img
                      src={image.api_url}
                      className={styles.image}
                      alt={image.description}
                    />
                  </div>
                )
            })}
          </div>
        </div>
      )
      case "FOUR":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.title}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.text}
            </div>
            {content.images.map((image) => {
                return (
                  <div
                    key={image.api_url}
                    className={
                      styles[`slideWrap${numberSlide}__imageContainer`]
                    }
                  >
                    <img
                      src={image.api_url}
                      className={styles.image}
                      alt={image.description}
                    />
                  </div>
                )
            })}
          </div>
        </div>
      )
      case "FIVE":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.title}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.text}
            </div>
            {content.images.map((image, index) => {
                return (
                  <div
                    key={image.api_url}
                    className={
                      styles[`slideWrap${numberSlide}__imageContainer_${index}`]
                    }
                  >
                    <img
                      src={image.api_url}
                      className={styles.image}
                      alt={image.description}
                    />
                  </div>
                )
            })}
          </div>
        </div>
      )
  }
}

export default SlideClassic
