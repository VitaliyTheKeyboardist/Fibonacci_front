// import PresentationCard from "./components/presentationCard/presentationCard"

import styles from "./allPresentations.module.scss"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { useEffect } from "react"
import PresentationCard from "./components/presentationCard/presentationCard"
import { getAllPresentations } from "./api/getAllPresentations"

const AllPresentations = () => {

  const dispatch = useAppDispatch()
  const allPresentations = useAppSelector((store) => store.allPresentations.presentations)

  useEffect(() => {
    dispatch(getAllPresentations())
  }, [dispatch])
  
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Все презентации</span>
      </div>
      <div className={styles.presentationsList}>
        
        {allPresentations.map((item) => {
          return <PresentationCard title={item.title} uuid={item.uuid} />
        })}
      </div>
    </div>
  )
}

export default AllPresentations
