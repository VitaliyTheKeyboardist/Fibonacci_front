// import React from "react"
import SlideClassic from "./slideClassic/slideClassic"
import TitleSlideClassic from "./titleSlideClassic/titleSlideClassic"
import { templateContent } from "../../assets/mocks/minimaTemplateMocks"
import { IClassicTemplateNumbers, classicTemplateNumbers } from "../../constants/classicTemplateNumbers"

const ClassicTemplate = () => {
    console.log(templateContent.slides.length)
  return (
    <>
      <TitleSlideClassic type="bigSlide" title='BOL"SHOI SLIDE' />
      {templateContent.slides.map((item, index) => {

        return <SlideClassic key={item.title} type="bigSlide" content={item} numberSlide={classicTemplateNumbers[index as keyof IClassicTemplateNumbers]}/>
      })}
    </>
  )
}

export default ClassicTemplate
