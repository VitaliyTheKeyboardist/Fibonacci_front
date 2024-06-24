import { Link } from "react-router-dom"
import {
  ITemplateNumbers,
  templateNumbers,
} from "../../constants/templateNumbers"
import FinishSlide from "../../templates/minimaTemplate/finishSlide/finishSlide"
import Slide from "../../templates/minimaTemplate/slide/slide"
import TitleSlide from "../../templates/minimaTemplate/titleSlide/titleSlide"
import { ISlide } from "../../types/components/presentation"
import { IPresentationNavBar } from "../../types/components/presentationNavBar"

import styles from "./presentationNavBar.module.scss"


const PresentationNavBar = ({ presentation }: IPresentationNavBar) => {

  const finishIndex = presentation.slides.length - 1


  return (
    <nav className={styles.navigationContainer}>
      {presentation.slides.map((item: ISlide, index) => {
        return (
          <div className={styles.slideWrap} key={item.title}>
            <div className={styles.numberSlide}>{index + 1}</div>
            <Link
              to={`slide/${index}`}
              className={styles.slideContainer}
            >
              {index === 0 && (
                <TitleSlide type="presentationList" title={item.title} />
              )}
              {index > 0 && index < finishIndex && (
                <Slide
                  type="navList"
                  numberSlide={templateNumbers[index as keyof ITemplateNumbers]}
                  content={item}
                />
              )}
              {index === finishIndex && (
                <FinishSlide type="presentationList" key={item.title} />
              )}
            </Link>
          </div>
        )
      })}
    </nav>
  )
}

export default PresentationNavBar
