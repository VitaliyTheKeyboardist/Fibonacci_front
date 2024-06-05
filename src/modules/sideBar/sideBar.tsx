import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { getUser } from "../../store/slices/userSlice"

const SideBar = () => {
  
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.user)
 
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  
  return (
    <div style={{ color: "white" }}>
      Личный кабинет
      {user && (
        <div>
          {user.name ? user.name : user.email} {user.uuid} 
        </div>
      )}
    </div>
  )
}

export default SideBar
