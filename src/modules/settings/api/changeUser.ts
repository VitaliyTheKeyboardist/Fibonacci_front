import $api from "../../../api";
import { URLS } from "../../../constants/urls";
import { AppDispatch } from "../../../store";
import { IUser } from "../../../types/user";
import { userFetching, userFetchingError, userFetchingSuccess } from "../../../store/slices/userSlice";

export const changeStatus = async (
    dispatch: AppDispatch,
    name: string,
    status: string
  ) => {
    try {
      dispatch(userFetching())
      const response = await $api.put<IUser>(`${URLS.CHANGE_USER}`, {
        name,
        status,
      })
      dispatch(userFetchingSuccess(response.data))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(userFetchingError(error.message))
      console.log(error)
    }
  }