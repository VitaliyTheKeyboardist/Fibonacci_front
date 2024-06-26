import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"

import PresentationCard from "./components/presentationCard/presentationCard"

import { getAllPresentations } from "./api/getAllPresentations"

import styles from "./allPresentations.module.scss"

const AllPresentations = () => {
  const dispatch = useAppDispatch()
  const allPresentations = useAppSelector(
    (state) => state.allPresentations.presentations
  )

  useEffect(() => {
    dispatch(getAllPresentations())
  }, [dispatch])

  if (allPresentations.length === 0)
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          У вас нет ни одной презентации. Хотите{" "}
          <Link to="/private-profile" className={styles.titleLink}>
            создать?
          </Link>
        </h2>
      </div>
    )
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <span>Все презентации</span>
      </div>
      <div className={styles.presentationsList}>
        {allPresentations.map((item) => {
          return (
            <PresentationCard
              key={item.uuid}
              title={item.title}
              uuid={item.uuid}
              template={item.template}
            />
          )
        })}
      </div>
    </div>
  )
}

export default AllPresentations
