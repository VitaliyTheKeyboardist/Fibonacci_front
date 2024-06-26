// import lightTemplate from "../assets/templates/templateExamples/light.svg"
// import darkTemplate from "../assets/templates/templateExamples/dark.svg"
import kfuTemplate from "../assets/templates/templateExamples/kfu_template.png"
import styleTemplate from "../assets/templates/templateExamples/style_template.png"
import minimalTemplate from "../assets/templates/templateExamples/minimal.svg"
import classicTemplate from "../assets/templates/templateExamples/classic_template.png"
import { ITemplates } from "../types/components/template"



export const templates: ITemplates = [
  { template: "minima", img: minimalTemplate, title: "Минималистичный" },
  { template: "classic", img: classicTemplate, title: "Классический" },
  { template: "kfu", img: kfuTemplate, title: "КФУ" },
  { template: "style", img: styleTemplate, title: "Стиль" },
    // { id: "2", img: lightTemplate, title: "Светлый" },
    // { id: "black_study", img: darkTemplate, title: "Темный" },
  ]

  