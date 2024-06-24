import { useParams } from "react-router-dom"
import BigSlideMinima from "../../templates/minimaTemplate/bigSlideMinima/bigSlideMinima"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"

const PresentationBigSlide = () => {
  const { presentation } = useAppSelector((store) => store.presentation)
  const params = useParams()
  const index = Number(params.index)
  const item = presentation.slides[index]
  const finishSlide = presentation.slides.length - 1

  if (item)
    switch (presentation.template) {
      case "1":
        return (
          <BigSlideMinima index={index} item={item} finishSlide={finishSlide} />
        )
    }
}

export default PresentationBigSlide
