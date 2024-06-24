import { useParams } from "react-router-dom"
import Slide from "../../../../templates/minimaTemplate/slide/slide"
import TitleSlide from "../../../../templates/minimaTemplate/titleSlide/titleSlide"
import {
  ITemplateNumbers,
  templateNumbers,
} from "../../../../constants/templateNumbers"
import { useAppSelector } from "../../../../hooks/reduxToolkitHooks"
import FinishSlide from "../../../../templates/minimaTemplate/finishSlide/finishSlide"

const BigSlide = () => {
  const { presentation } = useAppSelector((store) => store.presentation)
  const params = useParams()
  const index = Number(params.index)
  const item = presentation.slides[index]

  if (item)
    return (
      <>
        {index === 0 && <TitleSlide type="bigSlide" title={item.title} />}
        {index > 0 && index < 11 && (
          <Slide
            type="bigSlide"
            numberSlide={
              templateNumbers[Number(params.index) as keyof ITemplateNumbers]
            }
            content={item}
          />
        )}
        {index === 11 && <FinishSlide type="bigSlide" key={item.title} />}
      </>
    )
}

export default BigSlide
