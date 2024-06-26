import { MouseEvent } from "react"

export interface ITemplateItem {
    template: string, 
    img: string, 
    title: string
}


export interface ITemplate {
    id?: string
    item: ITemplateItem
    setId?: (e: MouseEvent) => void
}

export type ITemplates = ITemplateItem[]
    