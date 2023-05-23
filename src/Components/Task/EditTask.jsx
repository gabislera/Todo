import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { useTodoList } from '../../hooks/useTodoList'

const EditTask = ({ task }) => {
  const { deleteTask, currentTask, setCurrentTask } = useTodoList()

  const handleDelete = () => {
    deleteTask(currentTask)
    // setCurrentTask(task)
  }

  return (
    <div className='flex justify-between px-2 pb-4'>
      <p>{task.description}</p>
      <div className='flex gap-2 items-center'>
        <BiEdit size={18} className='cursor-pointer' />
        <AiOutlineDelete onClick={handleDelete} size={18} className='cursor-pointer' />
      </div>
    </div>
  )
}

export default EditTask