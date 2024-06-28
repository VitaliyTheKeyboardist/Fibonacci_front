import { ISlideComponent } from "../../../types/components/slideComponent"
import styles from "./slideKFU.module.scss"



const SlideKFU = ({ type, numberSlide, content }: ISlideComponent) => {
  switch (numberSlide) {
    case "ONE":
    case "THREE":
    case "FOUR":
    case "SIX":
    case "SEVEN":
    case "NINE":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles.slideWrap__title}>
              {content.title}
            </div>
            <div
              className={
                content.text.length < 850
                  ? styles.slideWrap__text
                  : styles.slideWrap__smallText
              }
            >
              {content.text}
            </div>
            {content.images.map((image) => {
              return (
                <div
                  key={image.api_url}
                  className={styles.slideWrap__imageContainer}
                >
                  <img
                    src={image.api_url}
                    className={styles.image}
                    alt={image.description}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )
    case "TWO":
    case "FIVE":
    case "EIGHT":
    case "TEN":
      return (
        <div className={styles[type]}>
          <div className={styles[`slideWrap${numberSlide}`]}>
            <div className={styles.slideWrap__title}>
              {content.title}
            </div>
            <div
              className={
                content.text.length < 850
                  ? styles.slideWrap__text
                  : styles.slideWrap__smallText
              }
            >
              {content.text}
            </div>
          </div>
        </div>
      )
    //   case "THREE":
    //     return (
    //       <div className={styles[type]}>
    //         <div className={styles[`slideWrap${numberSlide}`]}>
    //           <div className={styles[`slideWrap${numberSlide}__title`]}>
    //             {content.title}
    //           </div>
    //           <div
    //             className={
    //               content.text.length < 850
    //                 ? styles[`slideWrap${numberSlide}__text`]
    //                 : styles[`slideWrap${numberSlide}__smallText`]
    //             }
    //           >
    //             {content.text}
    //           </div>
    //           {content.images.map((image) => {
    //             return (
    //               <div
    //                 key={image.api_url}
    //                 className={styles[`slideWrap${numberSlide}__imageContainer`]}
    //               >
    //                 <img
    //                   src={image.api_url}
    //                   className={styles.image}
    //                   alt={image.description}
    //                 />
    //               </div>
    //             )
    //           })}
    //         </div>
    //       </div>
    //     )
    //   case "FOUR":
    //     return (
    //       <div className={styles[type]}>
    //         <div className={styles[`slideWrap${numberSlide}`]}>
    //           <div className={styles[`slideWrap${numberSlide}__title`]}>
    //             {content.title}
    //           </div>
    //           <div
    //             className={
    //               content.text.length < 850
    //                 ? styles[`slideWrap${numberSlide}__text`]
    //                 : styles[`slideWrap${numberSlide}__smallText`]
    //             }
    //           >
    //             {content.text}
    //           </div>
    //           {content.images.map((image) => {
    //             return (
    //               <div
    //                 key={image.api_url}
    //                 className={styles[`slideWrap${numberSlide}__imageContainer`]}
    //               >
    //                 <img
    //                   src={image.api_url}
    //                   className={styles.image}
    //                   alt={image.description}
    //                 />
    //               </div>
    //             )
    //           })}
    //         </div>
    //       </div>
    //     )
    //   case "FIVE":
    //     return (
    //       <div className={styles[type]}>
    //         <div className={styles[`slideWrap${numberSlide}`]}>
    //           <div className={styles[`slideWrap${numberSlide}__title`]}>
    //             {content.title}
    //           </div>
    //           <div
    //             className={
    //               content.text.length < 850
    //                 ? styles[`slideWrap${numberSlide}__text`]
    //                 : styles[`slideWrap${numberSlide}__smallText`]
    //             }
    //           >
    //             {content.text}
    //           </div>
    //           {content.images.map((image, index) => {
    //             return (
    //               <div
    //                 key={image.api_url}
    //                 className={
    //                   styles[`slideWrap${numberSlide}__imageContainer_${index}`]
    //                 }
    //               >
    //                 <img
    //                   src={image.api_url}
    //                   className={styles.image}
    //                   alt={image.description}
    //                 />
    //               </div>
    //             )
    //           })}
    //         </div>
    //       </div>
    //     )
  }
}

export default SlideKFU
