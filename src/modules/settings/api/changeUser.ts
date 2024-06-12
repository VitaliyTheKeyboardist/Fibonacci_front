import $api from "../../../api";
import { URLS } from "../../../constants/urls";
import { AppDispatch } from "../../../store";
import { IUser } from "../../../types/user";
import { userFetchingSuccess } from "../../../store/slices/userSlice";

export const changeStatus = async (
    dispatch: AppDispatch,
    name: string,
    status: string
  ) => {
    try {
      const response = await $api.put<IUser>(`${URLS.CHANGE_USER}`, {
        name,
        status,
      })
      dispatch(userFetchingSuccess(response.data))
    } catch (error) {
      console.log(error)
    }
  }