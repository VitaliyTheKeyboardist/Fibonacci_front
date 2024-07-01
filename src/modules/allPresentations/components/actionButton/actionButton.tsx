import { IActionButton } from '../../../../types/components/actionButton'
// import ArrowDown from '../../../../assets/icons/pages/privateProfile/arrowDown.svg'
// import ArrowUp from '../../../../assets/icons/pages/privateProfile/arrowUp.svg'
import styles from './actionButton.module.scss'
// import { useState } from 'react'

const ActionButton = ({ type, content, onClick }: IActionButton) => {
   
  return (
    <div className={styles[type]}>
        <button onClick={onClick}>{content}</button>
        {/* {type === "select" && <img src={src} alt="стрелка" />} */}
    </div>
  )
}

export default ActionButton