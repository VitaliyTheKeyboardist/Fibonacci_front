import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/user"
import { AppDispatch } from ".."
import { URLS } from "../../constants/urls"
import $api from "../../api"

const initialState = {
  user: {
    email: "",
    name: "",
    status: "",
    uuid: "",
    is_active: false,
  },
  isLoading: false,
  error: ''

}

export const getUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userFetching())
        const response = await $api.get<IUser>(`${URLS.GET_USER}`)
        dispatch(userFetchingSuccess(response.data))
         return response.data
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        dispatch(userFetchingError(error.message))
    }
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   userFetching(state) {
    state.isLoading = true
   },
   userFetchingSuccess(state, action: PayloadAction<IUser>) {
    state.isLoading = false
    state.user = action.payload
   },
   userFetchingError(state, action: PayloadAction<string>) {
    state.isLoading = false
    state.error = action.payload
   }
  },
  
})
export const { userFetching, userFetchingSuccess, userFetchingError } = userSlice.actions
export default userSlice.reducer
