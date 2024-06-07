import { ChangeEvent } from "react"

export interface IContentTabs {
    type: "textInput" | "themeInput"
    count: number
    value: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    maxCount: number
    placeholder: string
  }