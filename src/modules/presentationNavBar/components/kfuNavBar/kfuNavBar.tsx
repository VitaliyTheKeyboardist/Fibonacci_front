import { Link } from 'react-router-dom'
import { IPresentationNavBar } from '../../../../types/components/presentationNavBar'
import { ISlide } from '../../../../types/components/presentation'
import TitleSlideKFU from '../../../../templates/kfuTemplate/titleSlideKFU/titleSlideKFU'
import SlideKFU from '../../../../templates/kfuTemplate/slideKFU/slideKFU'
import FinishSlideKFU from '../../../../templates/kfuTemplate/finishSlideKFU/finishSlideKFU'
import { IkfuTemplateNumbers, kfuTemplateNumbers } from '../../../../constants/kfuTemplateNumbers'

import styles from './kfuNavBar.module.scss'

const KfuNavBar = ({ presentation }: IPresentationNavBar) => {
    const finishSlide = presentation.slides.length - 1

    return (
        <nav className={styles.navigationContainer}>
          {presentation.slides.map((item: ISlide, index) => {
            return (
              <div className={styles.slideWrap} key={item.title}>
                <div className={styles.numberSlide}>{index + 1}</div>
                <Link to={`slide/${index}`} className={styles.slideContainer}>
                  {index === 0 && (
                    <TitleSlideKFU type="presentationList" title={item.title} />
                  )}
                  {index > 0 && index < finishSlide && (
                    <SlideKFU
                      type="navList"
                      numberSlide={kfuTemplateNumbers[index as keyof IkfuTemplateNumbers]}
                      content={item}
                    />
                  )}
                  {index === finishSlide && (
                    <FinishSlideKFU type="presentationList" key={item.title} />
                  )}
                </Link>
              </div>
            )
          })}
        </nav>
      )
}

export default KfuNavBar