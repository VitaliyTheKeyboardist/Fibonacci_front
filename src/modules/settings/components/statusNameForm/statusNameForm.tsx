import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"

import { IStatusNameForm } from "../../../../types/components/statusNameForm"
import { changeStatus } from "../../api/changeUser"

import tabsArrow from "../../../../assets/icons/pages/privateProfile/tabsArrow.svg"

import Button from "../../../../components/button/button"

import styles from "./statusNameForm.module.scss"

const StatusNameForm = ({ user }: IStatusNameForm) => {
  const [name, setName] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const dispatch = useAppDispatch()

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    setFunction: Dispatch<SetStateAction<string>>
  ) => {
    e.preventDefault()
    setFunction(e.target.value)
  }

  function handleClick(name: string, status: string) {
    try {
      changeStatus(dispatch, name, status)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.formWrap}>
      <form className={styles.userInfoForm}>
        <label className={styles.userInfoLabel} htmlFor="userName">
          Имя
        </label>
        <input
          className={styles.input}
          type="text"
          name="username"
          placeholder={user.name || "Dbnfkbq"}
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />
        <label className={styles.userInfoLabel}>Статус</label>
        <div className={styles.select}>
          <img className={styles.selectArrow} src={tabsArrow} />
          <select
            className={styles.inputSelect}
            name="status"
            required
            onChange={(e) => handleChange(e, setStatus)}
          >
            <option className={styles.option} defaultChecked>
              Выберите статус
            </option>
            <option className={styles.option} value="STUDENT">
              Студент
            </option>
            {/* <option className={styles.option} value="pupil">
              Школьник
            </option> */}
            <option className={styles.option} value="WORKER">
              Преподаватель/Учитель
            </option>
            <option className={styles.option} value="RETIREE">
              Пенсионер
            </option>
            {/* <option className={styles.option} value="other">
              Другое
            </option> */}
          </select>
        </div>
        <Button
          type="button"
          className="button"
          content="Сохранить изменения"
          disabled={!name || !status}
          onClick={() => handleClick(name, status)}
        />
      </form>
    </div>
  )
}

export default StatusNameForm
