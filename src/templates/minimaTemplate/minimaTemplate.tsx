import { ISlide, templateContent } from "../../assets/mocks/minimaTemplateMocks"
import {
  ITemplateNumbers,
  templateNumbers,
} from "../../constants/templateNumbers"
import FinishSlide from "./finishSlide/finishSlide"
import Slide from "./slide/slide"
import MinimaTitle from "./titleSlide/titleSlide"

const MinimaTemplate = () => {
  return (
    <>
      <MinimaTitle />

      {templateContent.slides.map((item: ISlide, index) => {
        return (
          <Slide
            numberSlide={templateNumbers[index as keyof ITemplateNumbers]}
            content={item}
            key={index}
          />
        )
      })}

      <FinishSlide />
    </>
  )
}

export default MinimaTemplate
