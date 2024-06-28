import { IPresentationCard } from "../../../../types/components/presentationCard"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"
import { getPresentation } from "../../../../store/slices/presentationSlice"
import { useNavigate } from "react-router-dom"
import TitleSlideMinima from "../../../../templates/minimaTemplate/titleSlideMinima/titleSlideMinima"
import TitleSlideClassic from "../../../../templates/classicTemplate/titleSlideClassic/titleSlideClassic"

import styles from "./presentationCard.module.scss"
import TitleSlideKFU from "../../../../templates/kfuTemplate/titleSlideKFU/titleSlideKFU"
import TitleSlideStyle from "../../../../templates/styleTemplate/titleSlideStyle/titleSlideStyle"

const PresentationCard = ({ title, uuid, template }: IPresentationCard) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClick = async () => {
    await dispatch(getPresentation(uuid))
    navigate(`/presentation/${uuid}/slide/0`)
  }

  return (
    <div className={styles.presentationItem}>
      <div className={styles.img}>
        {template === "1" && (
          <TitleSlideMinima type="presentationCard" title={title} />
        )}
        {template === "classic" && (
          <TitleSlideClassic type="presentationCard" title={title} />
        )}
        {template === "kfu" && (
          <TitleSlideKFU type="presentationCard" title={title} />
        )}
        {template === "techno" && (
          <TitleSlideStyle type="presentationCard" title={title} />
        )}
      </div>
      <span className={styles.name}>{title}</span>
      <button className={styles.updated} onClick={handleClick}>
        ОТКРЫТЬ
      </button>
    </div>
  )
}

export default PresentationCard
