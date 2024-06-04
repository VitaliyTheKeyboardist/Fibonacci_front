// import styles from './createPage.module.scss'

import axios from "axios"
import { useEffect, useState } from "react"

const CreatePage = () => {
  const [result, setResult] = useState(null)

  useEffect(() => {
    const data = {
      title: "Птицы урала",
      template: "2",
    }
    axios
      .post("http://127.0.0.1:8000/api/presentation/create_test", data)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((res: any) => setResult(res))
  }, [])

  console.log(result)

  return <div>CreatePage</div>
}

export default CreatePage
