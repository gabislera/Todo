import { useEffect, useRef } from 'react'
import { useTodoList } from '../../hooks/useTodoList'
import Task from '../Task/Task'

const checkedSort = (task) => task.checked ? 1 : -1

const Tasks = () => {
  const { tasks, activeTaskId, setActiveTaskId } = useTodoList()
  const taskRef = useRef()

  const sortedTasks = [
    ...tasks.filter((task) => !task.checked).sort(checkedSort),
    ...tasks.filter((task) => task.checked).sort(checkedSort)
  ]

  const handleTaskClick = (id) => {
    setActiveTaskId(id)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (taskRef.current && !taskRef.current.contains(event.target)) {
        setActiveTaskId(null)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className='h-max flex-1 overflow-y-auto' ref={taskRef}>
      <p className='mx-4 my-2 py-2 font-medium'>Hoje</p>
      {sortedTasks.map(task =>
        <Task
          key={task.id}
          description={task.title}
          checked={task.checked}
          task={task}
          isActive={activeTaskId === task.id}
          handleTaskClick={handleTaskClick}
          activeTaskId={activeTaskId}
        />)}
    </div>
  )
}

export default Tasks