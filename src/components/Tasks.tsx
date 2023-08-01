import { useContext } from 'react'
import { Task } from './Task'
import { EmptyTasks } from './EmptyTasks'
import { TaskProps, UserContext } from '../context/UserContext'

export const Tasks = () => {
  const { tasks } = useContext(UserContext)

  if (tasks.length === 0) return <EmptyTasks />
  return (
    <div>
      {tasks.map((task: TaskProps) => {
        return <Task key={task.id} task={task} />
      })}
    </div>
  )
}
