import $api from "../../../api"
import { URLS } from "../../../constants/urls"
import { AppDispatch } from "../../../store"
import { allPresentationsFetching, allPresentationsFetchingError, allPresentationsFetchingSuccess } from "../../../store/slices/allPresentationsSlice"
import { IPresentationItem } from "../../../types/presentations"

export const getAllPresentations = () => async (dispatch: AppDispatch) => {
    try {
      dispatch(allPresentationsFetching())
      const response = await $api.get<IPresentationItem[]>(
        `${URLS.GET_ALL_PRESENTATIONS}`
      )
      dispatch(allPresentationsFetchingSuccess(response.data))
      return response.data
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(allPresentationsFetchingError(error.message))
    }
  }