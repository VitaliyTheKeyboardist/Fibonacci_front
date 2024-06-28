import { IStyleTemplateNumbers, styleTemplateNumbers } from "../../../constants/styleTemplateNumbers"
import { IPresentationBigSlide } from "../../../types/components/presentationTemplate"
import FinishSlideStyle from "../finishSlideStyle/finishSlideStyle"
import SlideStyle from "../slideStyle/slideStyle"
import TitleSlideStyle from "../titleSlideStyle/titleSlideStyle"

const BigSlideStyle = ({ index, item, finishSlide }: IPresentationBigSlide) => {
  if (item)
    return (
      <>
        {index === 0 && (
          <TitleSlideStyle type="bigSlide" title={item.title} />
        )}
        {index > 0 && index < finishSlide && (
          <SlideStyle
            type="bigSlide"
            numberSlide={
              styleTemplateNumbers[index as keyof IStyleTemplateNumbers]
            }
            content={item}
          />
        )}
        {index === finishSlide && (
          <FinishSlideStyle type="bigSlide" key={item.title} />
        )}
      </>
    )
}

export default BigSlideStyle
