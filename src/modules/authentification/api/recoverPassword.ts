import { FormEvent } from "react"
import axios from "axios"
import { URLS } from "../../../constants/urls"

export const sendEmail = async (e: FormEvent<HTMLFormElement>, data: string) => {
    e.preventDefault()
  await axios.post(`${URLS.API_URL}${URLS.RECOVER_PASSWORD}?email=${data}`)
  .then(res => console.log(res))
}
