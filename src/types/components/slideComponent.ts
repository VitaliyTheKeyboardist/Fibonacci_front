import { ISlide } from "./presentation"

export interface ISlideComponent {
    type: "navList" | "container" | "bigSlide"
    numberSlide: string
    content: ISlide
  }