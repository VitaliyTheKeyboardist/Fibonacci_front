import axios, { AxiosResponse } from "axios";
import { IUserRegistForm } from "../../../types/authorisation";

export const API_URL = "http://127.0.0.1:8000/api/"

export const registUser = async (data: IUserRegistForm) => {
    await axios
    .post(`${API_URL}users/`, data)
    .then((res: AxiosResponse) => {
        console.log(res)
        
    })
}