import {
  ISlide,
  templateContent,
} from "../../../assets/mocks/minimaTemplateMocks"
import { templateNumbers } from "../../../constants/templateNumbers"
// import testImage from "../../../assets/templates/minimaTemplate/testSLide1.png"

import styles from "./slide.module.scss"

export interface IMinimalSlide {
  numberSlide: string
  content: ISlide
}

const Slide = ({ numberSlide, content }: IMinimalSlide) => {
  switch (numberSlide) {
    case "ONE":
      return (
        <div className={styles.container}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.slideTitle}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.slideText}
            </div>
            {content.slideImage.map((item) => {
              return (
                <div
                  className={styles[`slideWrap${numberSlide}__imageContainer`]}
                >
                  <img src={item} className={styles.image} />
                </div>
              )
            })}
          </div>
        </div>
      )
    case "TWO":
      return (
        <div className={styles.container}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.slideTitle}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.slideText}
            </div>
            {content.slideImage.map((item, index) => {
              return (
                <div
                  className={styles[`slideWrap${numberSlide}__imageContainer_${index}`]}
                >
                  <img src={item} className={styles.image} />
                </div>
              )
            })}
          </div>
        </div>
      )
    case "THREE":
      return (
        <div className={styles.container}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles[`slideWrap${numberSlide}__title`]}>
              {content.slideTitle}
            </div>
            <div className={styles[`slideWrap${numberSlide}__text`]}>
              {content.slideText}
            </div>
            {content.slideImage.map((item) => {
              return (
                <div
                  className={styles[`slideWrap${numberSlide}__imageContainer`]}
                >
                  <img src={item} className={styles.image} />
                </div>
              )
            })}
          </div>
        </div>
      )
  }
}

export default Slide
