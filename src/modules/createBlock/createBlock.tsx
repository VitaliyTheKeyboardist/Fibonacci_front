import { ChangeEvent, useState } from "react"
import styles from "./createBlock.module.scss"
import ContentTabs from "./components/contentTabs/contentTabs"

const CreateBlock = () => {
  const [toggleState, setToggleState] = useState<1 | 2>(2)

  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("")

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    setCount(e.target.value.length)
    setTheme(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.blocTabs}>
        <button
          className={toggleState === 2 ? styles.activeTabs : styles.tabs}
          onClick={() => setToggleState(2)}
        >
          По теме
        </button>
        <button
          className={toggleState === 1 ? styles.activeTabs : styles.tabs}
          onClick={() => setToggleState(1)}
        >
          Из текста
        </button>
      </div>
      {toggleState === 2 && (
        <ContentTabs
          className="themeInput"
          value={theme}
          count={count}
          onChange={handleChange}
          maxCount={30}
          placeholder="Вставьте тему сюда"
          type="topic"
        />
      )}
      {toggleState === 1 && (
        <ContentTabs
          className="textInput"
          value={theme}
          count={count}
          onChange={handleChange}
          maxCount={3800}
          placeholder="Вставьте текст сюда"
          type="text"
        />
      )}
    </div>
  )
}

export default CreateBlock
