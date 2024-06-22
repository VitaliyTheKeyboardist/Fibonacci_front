import { ISlide } from "../../../types/components/presentation"
import styles from "./slide.module.scss"

export interface IMinimalSlide {
  type: "navList" | "container" | "bigSlide"
  numberSlide: string
  content: ISlide
}

const Slide = ({ type, numberSlide, content }: IMinimalSlide) => {
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
            {content.images.map((image, index) => {
              if (index < 1)
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
            {content.images.map((image, index) => {
              if (index < 2)
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
            {content.images.map((image, index) => {
              if (index < 1)
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
  }
}

export default Slide
