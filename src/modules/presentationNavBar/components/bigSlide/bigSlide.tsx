import { useNavigate, useParams } from 'react-router-dom'
import Slide from '../../../../templates/minimaTemplate/slide/slide'
import TitleSlide from '../../../../templates/minimaTemplate/titleSlide/titleSlide'
import { ITemplateNumbers, templateNumbers } from '../../../../constants/templateNumbers'
import { useAppSelector } from '../../../../hooks/reduxToolkitHooks'
import FinishSlide from '../../../../templates/minimaTemplate/finishSlide/finishSlide'

import styles from './bigSlide.module.scss'
import { useEffect } from 'react'

const BigSlide = () => {

    const { presentation } = useAppSelector((store) => store.presentation)
    const navigate = useNavigate()
    const params = useParams()
    const index = Number(params.index)
    const item = presentation.slides[index]
    console.log(item)
  if (item) return (
    <>
    {index === 0 && (
        <TitleSlide type="bigSlide" title={item.title} />
      )}
      {index > 0 && index < 11 && (
        <Slide
          type="bigSlide"
          numberSlide={templateNumbers[Number(params.index) as keyof ITemplateNumbers]}
          content={item}
        />
      )}
      {index === 11 && (
        <FinishSlide type="bigSlide" key={item.title} />
      )}
    </>
  )
  else {

    useEffect(() => {
        navigate('/private-profile/all-presentations')

    })
}
}

export default BigSlide