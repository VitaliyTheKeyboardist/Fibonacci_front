import $api from "../../../api"
import { URLS } from "../../../constants/urls"
import { AppDispatch } from "../../../store"
import { presentationFetching, presentationFetchingError, presentationFetchingSuccess } from "../../../store/slices/presentationSlice"
import { IPresentation } from "../../../types/components/presentation"

export const presentationCreate = async (
  dispatch: AppDispatch,
  title: string,
  template: string,
  type: string
) => {
    try {
        dispatch(presentationFetching())
        const response = await $api.post<IPresentation>(URLS.CREATE_PRESENTATION_BY_topic, { title, template, type})
        dispatch(presentationFetchingSuccess(response.data))
        return response.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        dispatch(presentationFetchingError(error.message))        
    }
}
export const presentationCreateText = async (
  dispatch: AppDispatch,
  text: string,
  template: string,
  type: string
) => {
    try {
        dispatch(presentationFetching())
        const response = await $api.post<IPresentation>(URLS.CREATE_PRESENTATION_BY_text, { text, template, type})
        dispatch(presentationFetchingSuccess(response.data))
        return response.data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
        dispatch(presentationFetchingError(error.message))        
    }
}
