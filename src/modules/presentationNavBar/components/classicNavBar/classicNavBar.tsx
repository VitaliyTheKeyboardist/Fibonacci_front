import { Link } from 'react-router-dom'
import { IPresentationNavBar } from '../../../../types/components/presentationNavBar'
import { ISlide } from '../../../../types/components/presentation'
import TitleSlideClassic from '../../../../templates/classicTemplate/titleSlideClassic/titleSlideClassic'
import SlideClassic from '../../../../templates/classicTemplate/slideClassic/slideClassic'

import styles from './classicNavBar.module.scss'
import FinishSlideClassic from '../../../../templates/classicTemplate/finishSlideClassic/finishSlideClassic'
import { IClassicTemplateNumbers, classicTemplateNumbers } from '../../../../constants/classicTemplateNumbers'

const ClassicNavBar = ({ presentation }: IPresentationNavBar) => {
    const finishSlide = presentation.slides.length - 1

    return (
        <nav className={styles.navigationContainer}>
          {presentation.slides.map((item: ISlide, index) => {
            return (
              <div className={styles.slideWrap} key={item.title}>
                <div className={styles.numberSlide}>{index + 1}</div>
                <Link to={`slide/${index}`} className={styles.slideContainer}>
                  {index === 0 && (
                    <TitleSlideClassic type="presentationList" title={item.title} />
                  )}
                  {index > 0 && index < finishSlide && (
                    <SlideClassic
                      type="navList"
                      numberSlide={classicTemplateNumbers[index as keyof IClassicTemplateNumbers]}
                      content={item}
                    />
                  )}
                  {index === finishSlide && (
                    <FinishSlideClassic type="presentationList" key={item.title} />
                  )}
                </Link>
              </div>
            )
          })}
        </nav>
      )
}

export default ClassicNavBar