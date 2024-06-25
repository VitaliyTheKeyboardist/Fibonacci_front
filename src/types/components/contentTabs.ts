import { ChangeEvent } from "react"

export interface IContentTabs {
    className: "textInput" | "themeInput"
    count: number
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    maxCount: number
    placeholder: string
    type: "topic" | "text"
    
  }