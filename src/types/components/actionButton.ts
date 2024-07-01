export interface IActionButton {
    type: "button" | "select"
    content: string
    onClick?: () => void
}