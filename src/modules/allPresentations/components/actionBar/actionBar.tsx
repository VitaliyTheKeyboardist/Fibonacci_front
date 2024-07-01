import ActionButton from '../actionButton/actionButton'
import styles from './actionBar.module.scss'

const actionBar = () => {
  return (
    <div>
        <ActionButton type="button" content="Открыть" />
        <ActionButton type="button" content="Переименовать" />
        <ActionButton type="button" content="Удалить" />
        <ActionButton type="button" content="" />
    </div>
  )
}

export default actionBar