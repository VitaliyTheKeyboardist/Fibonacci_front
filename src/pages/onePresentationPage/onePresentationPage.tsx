import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { getPresentation } from "../../store/slices/presentationSlice"

import MinimaTemplate from "../../templates/minimaTemplate/minimaTemplate"

const OnePresentationPage = () => {
  const params = useParams()
  const uuid = params.uuid
  const { presentation } = useAppSelector((state) => state.presentation)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!presentation.uuid && uuid) {
      dispatch(getPresentation(uuid))
    }
  }, [presentation, dispatch, uuid])
  
  switch (presentation.template) {
    case "1":
      return <MinimaTemplate presentation={presentation} />
  }
}

export default OnePresentationPage
