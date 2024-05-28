import axios from "axios"

import { IUserAuthForm } from "../components/authForm/authForm"

export const API_URL = "https://fibonaccico.ru/api/"

export const loginUser = async ( data: IUserAuthForm) => {

  await axios
    .post(`${API_URL}fibonacci/token/`, data)
    .then((res: any) => {
      localStorage.setItem("access_token", res.data.access)
      localStorage.setItem("refresh_token", res.data.refresh)
      localStorage.setItem("email", data.email)
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("access_token")
    })
}
