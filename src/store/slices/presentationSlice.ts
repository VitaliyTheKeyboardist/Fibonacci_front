import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppDispatch } from ".."
import $api from "../../api"
import { IPresentation } from "../../types/components/presentation"
import { URLS } from "../../constants/urls"

const initialState = {
  presentation: {
    title: "",
    template: "",
    uuid: "",
    slides: [
      {
        title: "",
        text: "",
        images: [
          {
            description: "",
            api_url: "",
          },
        ],
      },
    ],
  },
  isLoading: false,
  error: "",
}

export const getPresentation = (presentationUUID: string) => async (
  dispatch: AppDispatch,
) => {
  try {
    dispatch(presentationFetching())
    const response = await $api.get<IPresentation>(
      `${URLS.GET_PRESENTATION}${presentationUUID}`
    )
    dispatch(presentationFetchingSuccess(response.data))
    return response.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch(presentationFetchingError(error.message))
  }
}

const presentationSlice = createSlice({
  name: "presentation",
  initialState,
  reducers: {
    presentationFetching(state) {
      state.isLoading = true
    },
    presentationFetchingSuccess(state, action: PayloadAction<IPresentation>) {
      state.isLoading = false
      state.presentation = action.payload
    },
    presentationFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  presentationFetching,
  presentationFetchingSuccess,
  presentationFetchingError,
} = presentationSlice.actions

export default presentationSlice.reducer
