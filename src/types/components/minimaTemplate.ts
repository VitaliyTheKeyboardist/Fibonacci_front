import { IPresentation, ISlide } from "./presentation"

export interface IMinimaTemplate {
  presentation: IPresentation
}

export interface IBigSlideMinima {
  index: number
  item: ISlide
  finishSlide: number
}

export interface IFinishSlide {
  type: "presentationList" | "presentation" | "bigSlide"
}
