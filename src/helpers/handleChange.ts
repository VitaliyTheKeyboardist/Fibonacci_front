import { ChangeEvent, Dispatch, SetStateAction } from "react"

export const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  setFunction: Dispatch<SetStateAction<string>>
) => {
  e.preventDefault()
  setFunction(e.target.value)
}
