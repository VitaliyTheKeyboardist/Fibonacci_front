import SlideMinima from "../slideMinima/slideMinima"
import {
  IMinimaTemplateNumbers,
  minimaTemplateNumbers,
} from "../../../constants/minimaTemplateNumbers"
import FinishSlideMinima from "../finishSlideMinima/finishSlideMinima"
import { IBigSlideMinima } from "../../../types/components/minimaTemplate"
import TitleSlideMinima from "../titleSlideMinima/titleSlideMinima"

const BigSlideMinima = ({ index, item, finishSlide }: IBigSlideMinima) => {
  if (item)
    return (
      <>
        {index === 0 && <TitleSlideMinima type="bigSlide" title={item.title} />}
        {index > 0 && index < finishSlide && (
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
