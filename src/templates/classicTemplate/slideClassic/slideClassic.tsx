import Diamond from "../../../assets/templates/classicTemplate/diamond.svg"
import styles from "./slideClassic.module.scss"
import { ISlideComponent } from "../../../types/components/slideComponent"


const SlideClassic = ({ type, numberSlide, content }: ISlideComponent) => {
  switch (numberSlide) {
    case "ONE":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.title}
            </div>
            <div className={
                content.text.length < 850
                  ? styles[`slideWrap${numberSlide}__text`]
                  : styles[`slideWrap${numberSlide}__smallText`]
              }>
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
            <div className={
                content.text.length < 850
                  ? styles[`slideWrap${numberSlide}__text`]
                  : styles[`slideWrap${numberSlide}__smallText`]
              }>
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
            <div className={
                content.text.length < 850
                  ? styles[`slideWrap${numberSlide}__text`]
                  : styles[`slideWrap${numberSlide}__smallText`]
              }>
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
            <div className={
                content.text.length < 850
                  ? styles[`slideWrap${numberSlide}__text`]
                  : styles[`slideWrap${numberSlide}__smallText`]
              }>
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
            <div className={
                content.text.length < 850
                  ? styles[`slideWrap${numberSlide}__text`]
                  : styles[`slideWrap${numberSlide}__smallText`]
              }>
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
