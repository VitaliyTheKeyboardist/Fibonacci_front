import { useState } from "react"
import { useAppDispatch } from "../../../../hooks/reduxToolkitHooks"

import { IStatusNameForm } from "../../../../types/components/statusNameForm"
import { changeStatus } from "../../api/changeUser"

import tabsArrow from "../../../../assets/icons/pages/privateProfile/tabsArrow.svg"

import Button from "../../../../components/button/button"

import styles from "./statusNameForm.module.scss"
import { handleChange } from "../../../../helpers/handleChange"

const StatusNameForm = ({ user }: IStatusNameForm) => {
  const [name, setName] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const dispatch = useAppDispatch()

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
          placeholder={user.name || "Введите имя"}
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
            <option className={styles.option} value="" defaultChecked>
              Выберите статус
            </option>
            <option className={styles.option} value="STUDENT">
              Студент
            </option>
            <option className={styles.option} value="WORKER">
              Преподаватель/Учитель
            </option>
            <option className={styles.option} value="RETIREE">
              Пенсионер
            </option>
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
