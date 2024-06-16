import { IPresentationCard } from "../../../../types/components/presentationCard"
import styles from "./presentationCard.module.scss"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"
import { getPresentation } from "../../../../store/slices/presentationSlice"
import TitleSlide from "../../../../templates/minimaTemplate/titleSlide/titleSlide"
import { useNavigate } from "react-router-dom"

const PresentationCard = ({ title, uuid }: IPresentationCard) => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  
  const handleClick = async () => {
    await dispatch(getPresentation(uuid))
    navigate(`/presentation/${uuid}`)
  }
  

  return (
    <div className={styles.presentationItem}>
      <div className={styles.img}>
        <TitleSlide type="presentationList" title={title}/>
      </div>
      <span className={styles.name}>{title}</span>
      <button className={styles.updated} onClick={handleClick}>ОТКРЫТЬ</button>
    </div>
  )
}

export default PresentationCard
