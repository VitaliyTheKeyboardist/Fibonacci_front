import { IkfuTemplateNumbers, kfuTemplateNumbers } from "../../../constants/kfuTemplateNumbers"
import { IBigSlideMinima } from "../../../types/components/minimaTemplate"
import FinishSlideKFU from "../finishSlideKFU/finishSlideKFU"
import SlideKFU from "../slideKFU/slideKFU"
import TitleSlideKFU from "../titleSlideKFU/titleSlideKFU"

const BigSlideKFU = ({ index, item, finishSlide }: IBigSlideMinima) => {
  if (item)
    return (
      <>
        {index === 0 && <TitleSlideKFU type="bigSlide" title={item.title} />}
        {index > 0 && index < finishSlide && (
          <SlideKFU
            type="bigSlide"
            numberSlide={
              kfuTemplateNumbers[index as keyof IkfuTemplateNumbers]
            }
            content={item}
          />
        )}
        {index === finishSlide && (
          <FinishSlideKFU type="bigSlide" key={item.title} />
        )}
      </>
    )
}

export default BigSlideKFU
