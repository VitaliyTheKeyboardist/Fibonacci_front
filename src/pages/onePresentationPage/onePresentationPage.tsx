import { Outlet, useParams } from "react-router-dom"
import PresentationNavBar from "../../modules/presentationNavBar/presentationNavBar"

import PresentationHeader from "../../modules/presentationHeader/presentationHeader"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { useEffect } from "react"
import { getPresentation } from "../../store/slices/presentationSlice"

import styles from "./onePresentationPage.module.scss"


const OnePresentationPage = () => {
  const params = useParams()
  const { presentation } = useAppSelector((state) => state.presentation)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (!presentation.uuid && params.uuid) {
      dispatch(getPresentation(params.uuid))
    }
  }, [presentation])
  console.log(presentation)
  return (
    <>
      <PresentationHeader presentation={presentation} />
      <main className={styles.pageWrap}>
        <PresentationNavBar presentation={presentation} />
        <Outlet />
      </main>
    </>
  )
}

export default OnePresentationPage
