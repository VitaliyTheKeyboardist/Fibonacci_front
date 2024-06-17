import { Link } from "react-router-dom"
import {
  ITemplateNumbers,
  templateNumbers,
} from "../../constants/templateNumbers"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { ISlide } from "../../types/components/presentation"
import FinishSlide from "./finishSlide/finishSlide"
import Slide from "./slide/slide"
import TitleSlide from "./titleSlide/titleSlide"

import styles from "./minimaTemplate.module.scss"

const MinimaTemplate = () => {
  const { presentation } = useAppSelector((store) => store.presentation)
  const finishIndex = presentation.slides.length - 1

  if (!presentation.title)
    return (
      <>
        <h3 className={styles.errorMessage}>
          Ничего не загрузилось, попробуйте перейти в{" "}
          <Link to={"/private-profile/all-presentations"} style={{textDecoration: "underline", textUnderlinePosition: "under"}}>
            список ваших презентаций
          </Link>
        </h3>
      </>
    )
  else
    return (
      presentation.title && (
        <>
          {presentation.slides.map((item: ISlide, index) => {
            return (
              <>
                {index === 0 && <TitleSlide key={item.title} type="presentation" title={item.title} />}
                {index > 0 && index < finishIndex && (
                  <Slide
                  type="container"
                    numberSlide={
                      templateNumbers[index as keyof ITemplateNumbers]
                    }
                    content={item}
                    key={item.title}
                  />
                )}
                {index === finishIndex && <FinishSlide type="presentation"  key={item.title} />}
              </>
            )
          })}
        </>
      )
    )
}

export default MinimaTemplate
