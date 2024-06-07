import MenuLink from "../menuLink/menuLink"

import a4Paper from '../../../../assets/icons/pages/privateProfile/a4Paper.svg'
import templatesGroup from '../../../../assets/icons/pages/privateProfile/templatesGroup.svg'
import smallHome from '../../../../assets/icons/pages/privateProfile/smallHome.svg'


const NavBar = () => {
  return (
    <>
      <MenuLink link="." text="Создать" img={smallHome} alt="Домик" end={true} />
      <MenuLink link="all-presentations" text="Все презентации" img={a4Paper} alt="Листик бумаги" />
      <MenuLink link="all-templates" text="Шаблоны" img={templatesGroup} alt="Квадратики" />
    </>
  )
}

export default NavBar
