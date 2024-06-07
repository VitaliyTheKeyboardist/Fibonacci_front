import lightTemplate from "../assets/templates/templateExamples/light.svg"
import darkTemplate from "../assets/templates/templateExamples/dark.svg"
import kfuTemplate from "../assets/templates/templateExamples/kfu_template.png"
import minimalTemplate from "../assets/templates/templateExamples/minimal.svg"
import classicTemplate from "../assets/templates/templateExamples/classic_template.png"
import technoTemplate from "../assets/templates/templateExamples/techno_template.png"
import { ITemplates } from "../types/components/template"



export const templates: ITemplates = [
    { id: "2", img: lightTemplate, title: "Светлый" },
    { id: "black_study", img: darkTemplate, title: "Темный" },
    { id: "kfu", img: kfuTemplate, title: "КФУ" },
    { id: "1", img: minimalTemplate, title: "Минималистичный" },
    { id: "classic", img: classicTemplate, title: "Классический" },
    { id: "techno", img: technoTemplate, title: "Техно" },
  ]