import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { getPresentation } from "../../store/slices/presentationSlice"

import MinimaTemplate from "../../templates/minimaTemplate/minimaTemplate"
import ClassicTemplate from "../../templates/classicTemplate/classicTemplate"
import KfuTemplate from "../../templates/kfuTemplate/kfuTemplate"
import StyleTemplate from "../../templates/styleTemplate/styleTemplate"

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
  
    case "classic":
      return <ClassicTemplate presentation={presentation} />
    case "kfu":
      return <KfuTemplate presentation={presentation} />
    case "techno":
      return <StyleTemplate presentation={presentation} />
  }
}

export default OnePresentationPage
