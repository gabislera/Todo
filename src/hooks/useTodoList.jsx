import { useContext } from "react"
import { UserContext } from "../UserContext"

export const useTodoList = () => {
  return useContext(UserContext)
}