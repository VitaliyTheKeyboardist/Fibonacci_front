import { Link } from 'react-router-dom'
import { IPresentationNavBar } from '../../../../types/components/presentationNavBar'
import { ISlide } from '../../../../types/components/presentation'
import TitleSlideMinima from '../../../../templates/minimaTemplate/titleSlideMinima/titleSlideMinima'
import SlideMinima from '../../../../templates/minimaTemplate/slideMinima/slideMinima'
import FinishSlideMinima from '../../../../templates/minimaTemplate/finishSlideMinima/finishSlideMinima'
import { IMinimaTemplateNumbers, minimaTemplateNumbers } from '../../../../constants/minimaTemplateNumbers'

import styles from './minimaNavBar.module.scss'

const MinimaNavBar = ({ presentation }: IPresentationNavBar) => {
    const finishSlide = presentation.slides.length - 1

    return (
        <nav className={styles.navigationContainer}>
          {presentation.slides.map((item: ISlide, index) => {
            return (
              <div className={styles.slideWrap} key={item.title}>
                <div className={styles.numberSlide}>{index + 1}</div>
                <Link to={`slide/${index}`} className={styles.slideContainer}>
                  {index === 0 && (
                    <TitleSlideMinima type="presentationList" title={item.title} />
                  )}
                  {index > 0 && index < finishSlide && (
                    <SlideMinima
                      type="navList"
                      numberSlide={minimaTemplateNumbers[index as keyof IMinimaTemplateNumbers]}
                      content={item}
                    />
                  )}
                  {index === finishSlide && (
                    <FinishSlideMinima type="presentationList" key={item.title} />
                  )}
                </Link>
              </div>
            )
          })}
        </nav>
      )
}

export default MinimaNavBar