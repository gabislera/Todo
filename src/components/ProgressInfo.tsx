import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const ProgressInfo = () => {
  const { tasks } = useContext(UserContext)
  const checkeds = tasks.filter((task) => task.checked)

  return (
    <div className="mx-4 flex max-w-[736px] justify-between sm:mx-auto">
      <div className="flex gap-2">
        <p className="font-sans font-bold text-blue-primary">Tarefas criadas</p>
        <span className="rounded-full bg-gray-500 px-[9px] font-sans font-bold text-white ">
          {tasks.length}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-sans font-bold text-purple-primary">Concluídas</p>
        <span className="rounded-full bg-gray-500 px-[9px] font-sans font-bold text-white ">
          {checkeds.length}
        </span>
      </div>
    </div>
  )
}
