import axios, { AxiosResponse } from "axios"
import { IUserAuthForm } from "../../../types/authorisation"
import { URLS } from "../../../constants/urls"



export const loginUser = async ( data: IUserAuthForm) => {

  await axios
    .post<AxiosResponse>(`${URLS.API_URL}${URLS.LOGIN}`, data)
    .then((res: AxiosResponse) => {
      console.log(res)
      localStorage.setItem("access_token", res.data.access_token)
      localStorage.setItem("refresh_token", res.data.refresh_token)
    })
}

