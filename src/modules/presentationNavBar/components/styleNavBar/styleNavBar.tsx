import { Link } from 'react-router-dom'
import { IPresentationNavBar } from '../../../../types/components/presentationNavBar'
import { ISlide } from '../../../../types/components/presentation'

import TitleSlideStyle from '../../../../templates/styleTemplate/titleSlideStyle/titleSlideStyle'
import SlideStyle from '../../../../templates/styleTemplate/slideStyle/slideStyle'
import FinishSlideStyle from '../../../../templates/styleTemplate/finishSlideStyle/finishSlideStyle'
import { IStyleTemplateNumbers, styleTemplateNumbers } from '../../../../constants/styleTemplateNumbers'

import styles from './styleNavBar.module.scss'

const StyleNavBar = ({ presentation }: IPresentationNavBar) => {
    const finishSlide = presentation.slides.length - 1

    return (
        <nav className={styles.navigationContainer}>
          {presentation.slides.map((item: ISlide, index) => {
            return (
              <div className={styles.slideWrap} key={item.title}>
                <div className={styles.numberSlide}>{index + 1}</div>
                <Link to={`slide/${index}`} className={styles.slideContainer}>
                  {index === 0 && (
                    <TitleSlideStyle type="presentationList" title={item.title} />
                  )}
                  {index > 0 && index < finishSlide && (
                    <SlideStyle
                      type="navList"
                      numberSlide={styleTemplateNumbers[index as keyof IStyleTemplateNumbers]}
                      content={item}
                    />
                  )}
                  {index === finishSlide && (
                    <FinishSlideStyle type="presentationList" key={item.title} />
                  )}
                </Link>
              </div>
            )
          })}
        </nav>
      )
}

export default StyleNavBar