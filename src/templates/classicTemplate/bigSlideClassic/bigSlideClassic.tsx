import {
  IClassicTemplateNumbers,
  classicTemplateNumbers,
} from "../../../constants/classicTemplateNumbers"
import { IPresentationBigSlide } from "../../../types/components/presentationTemplate"
import FinishSlideClassic from "../finishSlideClassic/finishSlideClassic"
import SlideClassic from "../slideClassic/slideClassic"
import TitleSlideClassic from "../titleSlideClassic/titleSlideClassic"

const BigSlideClassic = ({ index, item, finishSlide }: IPresentationBigSlide) => {
  if (item)
    return (
      <>
        {index === 0 && (
          <TitleSlideClassic type="bigSlide" title={item.title} />
        )}
        {index > 0 && index < finishSlide && (
          <SlideClassic
            type="bigSlide"
            numberSlide={
              classicTemplateNumbers[index as keyof IClassicTemplateNumbers]
            }
            content={item}
          />
        )}
        {index === finishSlide && (
          <FinishSlideClassic type="bigSlide" key={item.title} />
        )}
      </>
    )
}

export default BigSlideClassic
