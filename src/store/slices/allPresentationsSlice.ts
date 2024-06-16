import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IPresentationItem } from "../../types/presentations"

interface IinitialState {
  presentations: IPresentationItem[]
  isLoading: boolean
  error: string
}

const initialState: IinitialState = {
  presentations: [],
  isLoading: false,
  error: "",
}

const allPresentationsSlice = createSlice({
  name: "allPresentations",
  initialState,
  reducers: {
    allPresentationsFetching(state) {
      state.isLoading = true
    },
    allPresentationsFetchingSuccess(
      state,
      action: PayloadAction<IPresentationItem[]>
    ) {
      state.isLoading = false
      state.presentations = action.payload
    },
    allPresentationsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  allPresentationsFetching,
  allPresentationsFetchingSuccess,
  allPresentationsFetchingError,
} = allPresentationsSlice.actions

export default allPresentationsSlice.reducer
