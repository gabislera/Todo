/* eslint-disable prettier/prettier */
import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { TaskProps, UserContext } from '../context/UserContext'

interface TaskInterface {
  task: TaskProps
}

export const Task = ({ task }: TaskInterface) => {
  const { deleteTask, updateChecked } = useContext(UserContext)

  const handleDelete = () => {
    deleteTask(task)
  }

  const handleChecked = () => {
    updateChecked(task)
  }

  return (
    <div className="mx-4 mt-2 flex h-max max-w-[736px] items-center justify-between rounded-lg border-[1px] border-gray-900 bg-gray-700 p-4 sm:mx-auto">
      <div className="flex items-center gap-2">
        <input
          checked={task.checked}
          onChange={handleChecked}
          type="checkbox"
          className="form-checkbox rounded-full border-[1px] border-blue-primary bg-transparent text-purple-secondary hover:bg-blue-secondary hover:text-purple-primary"
        />
        <p
          className={`${task.checked && 'text-gray-300 line-through'
            } font-sans font-light text-gray-100`}
        >
          {task.title}
        </p>
      </div>
      <Trash
        onClick={handleDelete}
        size={21}
        className="cursor-pointer text-gray-100 hover:text-red"
      />
    </div>
  )
}
