import { NavLink } from "react-router-dom"
import { IMenuLink } from "../../../../types/components/menuLink"

import styles from "./menuLink.module.scss"

const MenuLink = ({ text, link, img, alt, end }: IMenuLink) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? styles.active : styles.navLink)}
      to={link}
      end={end}
    >
      <img className={styles.linkImg} src={img} alt={alt} />
      <div>{text}</div>
    </NavLink>
  )
}

export default MenuLink
