import axios, { AxiosResponse } from "axios"
import { IUserAuthForm } from "../../../types/authorisation"


// export const API_URL = "https://fibonaccico.ru/api/"
export const API_URL = "http://127.0.0.1:8000/api/"

export const loginUser = async ( data: IUserAuthForm) => {

  await axios
    .post<AxiosResponse>(`${API_URL}login/`, data)
    .then((res: AxiosResponse) => {
      console.log(res)
      localStorage.setItem("access_token", res.data.access_token)
      localStorage.setItem("refresh_token", res.data.refresh_token)
      localStorage.setItem("email", data.email)
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("access_token")
    })
}
