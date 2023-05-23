import { useEffect, useRef } from 'react'
import { useTodoList } from '../../hooks/useTodoList'
import Task from '../Task/Task'

const checkedSort = (task) => task.checked ? 1 : -1
const dateToday = new Date()

const Tasks = () => {
  const { tasks, activeTaskId, currentDate, setCurrentTask } = useTodoList()
  const taskRef = useRef()

  const dateSelectedTasks = tasks.filter((task) => {
    const teste = new Date(task.dateValue)
    return teste.toDateString() === currentDate.toDateString()
  })

  const sortedTasks = [
    ...dateSelectedTasks.filter((task) => !task.checked).sort(checkedSort),
    ...dateSelectedTasks.filter((task) => task.checked).sort(checkedSort)
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (taskRef.current && !taskRef.current.contains(event.target)) {
        setCurrentTask(undefined)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`;

  const isToday = currentDate.getDate() === dateToday.getDate()

  return (
    <div className='h-max ' ref={taskRef}>
      <div className='border-t-[1px] w-96 mx-auto'></div>
      <p className='mx-4 my-2 py-2 font-medium'>{isToday ? 'Hoje' : formattedDate}</p>
      {sortedTasks.map(task =>
        <Task
          key={task.id}
          description={task.title}
          checked={task.checked}
          task={task}
          // handleTaskClick={handleTaskClick}
          activeTaskId={activeTaskId}
        />)}
    </div>
  )
}

export default Tasks