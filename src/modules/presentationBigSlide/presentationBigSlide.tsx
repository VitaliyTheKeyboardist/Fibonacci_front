import { useParams } from "react-router-dom"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import BigSlideMinima from "../../templates/minimaTemplate/bigSlideMinima/bigSlideMinima"
import BigSlideClassic from "../../templates/classicTemplate/bigSlideClassic/bigSlideClassic"
import BigSlideKFU from "../../templates/kfuTemplate/bigSlideKFU/bigSlideKFU"
import BigSlideStyle from "../../templates/styleTemplate/bigSlideStyle/bigSlideStyle"

const PresentationBigSlide = () => {
  const { presentation } = useAppSelector((store) => store.presentation)
  const params = useParams()
  const index = Number(params.index)
  const item = presentation.slides[index]
  const finishSlide = presentation.slides.length - 1

  if (item)
    switch (presentation.template) {
      case "minima":
        return (
          <BigSlideMinima index={index} item={item} finishSlide={finishSlide} />
        )
      case "classic":
        return (
          <BigSlideClassic index={index} item={item} finishSlide={finishSlide} />
        )
      case "kfu":
        return (
          <BigSlideKFU index={index} item={item} finishSlide={finishSlide} />
        )
      case "style":
        return (
          <BigSlideStyle index={index} item={item} finishSlide={finishSlide} />
        )
    }
}

export default PresentationBigSlide
