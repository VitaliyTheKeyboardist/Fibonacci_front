import SlideMinima from "../slideMinima/slideMinima"
import TitleSlide from "../titleSlideMinima/titleSlideMinima"
import {
  IMinimaTemplateNumbers,
  minimaTemplateNumbers,
} from "../../../constants/minimaTemplateNumbers"
import FinishSlideMinima from "../finishSlideMinima/finishSlideMinima"
import { IBigSlideMinima } from "../../../types/components/minimaTemplate"

const BigSlideMinima = ({ index, item, finishSlide }: IBigSlideMinima) => {
  if (item)
    return (
      <>
        {index === 0 && <TitleSlide type="bigSlide" title={item.title} />}
        {index > 0 && index < 11 && (
          <SlideMinima
            type="bigSlide"
            numberSlide={
              minimaTemplateNumbers[index as keyof IMinimaTemplateNumbers]
            }
            content={item}
          />
        )}
        {index === finishSlide && (
          <FinishSlideMinima type="bigSlide" key={item.title} />
        )}
      </>
    )
}

export default BigSlideMinima
