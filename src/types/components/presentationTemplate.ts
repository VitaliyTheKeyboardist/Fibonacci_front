import { IPresentation, ISlide } from "./presentation"

export interface IPresentationTemplate {
  presentation: IPresentation
}

export interface IPresentationBigSlide {
  index: number
  item: ISlide
  finishSlide: number
}

export interface IFinishSlide {
  type: "presentationList" | "presentation" | "bigSlide"
}
