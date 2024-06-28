// import React from 'react'

import FinishSlideStyle from "../../templates/styleTemplate/finishSlideStyle/finishSlideStyle"
import TitleSlideStyle from "../../templates/styleTemplate/titleSlideStyle/titleSlideStyle"
import { templateContent } from "../../assets/mocks/templateMocks"
import SlideStyle from "../../templates/styleTemplate/slideStyle/slideStyle"
import { IStyleTemplateNumbers, styleTemplateNumbers } from "../../constants/styleTemplateNumbers"
const StyletemplateTEMP = () => {
  return (
    <>
    <TitleSlideStyle type="bigSlide" title={templateContent.title}/>
    {templateContent.slides.map((item, index) => {
        return <SlideStyle type="bigSlide" content={item} numberSlide={styleTemplateNumbers[index as keyof IStyleTemplateNumbers]}/>
    })}
    <FinishSlideStyle type="bigSlide" />
    </>
  )
}

export default StyletemplateTEMP