export interface IButton {
    className: "submit" | "button" | "button_template"
    content: string
    type: "submit" | "button" 
    onClick?: () => void | undefined
    disabled?: boolean
}