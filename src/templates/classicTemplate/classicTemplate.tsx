// import SlideClassic from "./slideClassic/slideClassic"
// import TitleSlideClassic from "./titleSlideClassic/titleSlideClassic"
// import {
//   IClassicTemplateNumbers,
//   classicTemplateNumbers,
// } from "../../constants/classicTemplateNumbers"
import { IPresentationTemplate } from "../../types/components/presentationTemplate"
import { Link, Outlet } from "react-router-dom"

import styles from "./classicTemplate.module.scss"
import PresentationHeader from "../../modules/presentationHeader/presentationHeader"
import PresentationNavBar from "../../modules/presentationNavBar/presentationNavBar"

const ClassicTemplate = ({ presentation }: IPresentationTemplate) => {
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
  // return (
  //   <>
  //     <TitleSlideClassic type="bigSlide" title={presentation.title} />
  //     {presentation.slides.map((item, index) => {
  //       return (
  //         <SlideClassic
  //           key={item.title}
  //           type="bigSlide"
  //           content={item}
  //           numberSlide={
  //             classicTemplateNumbers[index as keyof IClassicTemplateNumbers]
  //           }
  //         />
  //       )
  //     })}
  //   </>
  // )
}

export default ClassicTemplate
