import showPassword from "../assets/icons/pages/authentification/showPassword.svg"
import hidePassword from "../assets/icons/pages/authentification/hidePassword.svg"
import { IPasswordType } from "../types/authorisation"


export const togglePasswordType = (type: IPasswordType, setType: (type: IPasswordType) => void) => {
    if (type.image === showPassword)
      setType({
        ...type,
        image: hidePassword,
        type: "text",
        className: "showPassword",
      })
    if (type.image === hidePassword)
      setType({
        ...type,
        image: showPassword,
        type: "password",
        className: "hidePassword",
      })
  }