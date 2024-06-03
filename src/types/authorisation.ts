export interface IPasswordType {
  image: string
  type: string
  className: string
}

export interface IUserAuthForm {
  email: string
  password: string
}

export interface IUserRegistForm {
  email: string
  password: string
  re_password: string
}
