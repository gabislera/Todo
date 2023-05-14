import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useTodoList } from '../../hooks/useTodoList'
// import EditModal from '../EditModal/EditModal'
import { useEffect, useState } from 'react'

const Task = ({ description, checked, task, isActive, handleTaskClick, activeTaskId }) => {
  const { updateChecked, setCurrentTask, currentTask, deleteTask } = useTodoList()
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
    handleTaskClick(task.id)
    setCurrentTask(task)
  }

  const handleChecked = () => {
    updateChecked(task)
  }

  const handleDelete = () => {
    deleteTask(currentTask)
    setCurrentTask(task)
  }

  const handleClick = () => {
    setCurrentTask(task)
    handleTaskClick(task.id)

  }

  return (
    <div className={`mx-4 my-2 px-2  rounded-xl border-[#D6D6D6] border-[1.5px] text-secondary ${isActive ? 'scale-95' : ''}`}>
      <div className='flex items-center'>
        <div className='flex items-center gap-2'>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" id='checkbox' checked={checked} onChange={handleChecked} />
          <div className={checked ? 'capitalize line-through opacity-50' : 'capitalize'}>{description}</div>
        </div>
        <span onClick={handleClick} className='h-16 flex-1 '></span>
        <div className='flex gap-2 items-center'>
          <BiEdit onClick={handleModal} size={18} className={`cursor-pointer ${isActive ? '' : 'hidden'}`} />
          <AiOutlineDelete onClick={handleDelete} size={18} className={`cursor-pointer ${isActive ? '' : 'hidden'}`} />
          <p className='text-[.8rem] pr-5'>13:15</p>
        </div>
      </div>
      {/* <EditModal showModal={showModal} onCloseModal={handleModal} /> */}
    </div>
  )
}

export default Task