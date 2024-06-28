import { IMinimaTemplate } from "../../types/components/minimaTemplate"
import { Link, Outlet } from "react-router-dom"

import styles from "./kfuTemplate.module.scss"
import PresentationHeader from "../../modules/presentationHeader/presentationHeader"
import PresentationNavBar from "../../modules/presentationNavBar/presentationNavBar"

const KfuTemplate = ({ presentation }: IMinimaTemplate) => {

  if (!presentation.title)
    return (
      <>
        <h3 className={styles.errorMessage}>
          Ничего не загрузилось, попробуйте перейти в{" "}
          <Link
            to={"/private-profile/all-presentations"}
            style={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
            }}
          >
            список ваших презентаций
          </Link>
        </h3>
      </>
    )
  else
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

export default KfuTemplate
