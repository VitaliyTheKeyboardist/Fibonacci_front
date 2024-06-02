import showPassword from "../assets/icons/pages/authentification/showPassword.svg"
import hidePassword from "../assets/icons/pages/authentification/hidePassword.svg"


export interface IPasswordType {
    image: string
    type: string
    className: string
}

export const useTogglePasswordType = (type: IPasswordType) => {
    if (type.image === showPassword)
        return {
          ...type,
          image: hidePassword,
          type: "text",
          className: "showPassword",
        }
      if (type.image === hidePassword)
        return {
          ...type,
          image: showPassword,
          type: "password",
          className: "hidePassword",
        }

}
