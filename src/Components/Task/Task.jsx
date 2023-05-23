import { useTodoList } from '../../hooks/useTodoList'
import { useState } from 'react'
// import EditTask from './EditTask'
import ModalTeste from '../ModalTeste'
import { BiEdit } from 'react-icons/bi'

const Task = ({ description, checked, task }) => {
  const { updateChecked, setCurrentTask, currentTask } = useTodoList()
  const [showModal, setShowModal] = useState(false)
  const isActive = currentTask?.id === task.id

  const handleChecked = () => {
    updateChecked(task)
  }

  const handleClick = () => {
    if (!isActive)
      return setCurrentTask(task)
    setCurrentTask(undefined)
  }

  const time = new Date(task.dateValue)
  const timeFormated = `${time.getHours() - 3}:${time.getMinutes()} `  //BUG NA RENDERIZAÇAO DA HORA DA TASK

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
    console.log('teste')
  }

  return (
    <div className={`mx-4 my-2 px-2 rounded-xl border-[#D6D6D6] border-[1.5px] text-secondary ${isActive ? 'scale-95' : ''}`}>
      <div className='flex items-center'>
        <div className='flex items-center gap-2'>
          <label htmlFor="checkbox"></label>
          <input type="checkbox" id='checkbox' checked={checked} onChange={handleChecked} />
          <div className={checked ? 'capitalize line-through opacity-50' : 'capitalize'}>{description}</div>
        </div>
        <span onClick={handleClick} className='h-16 flex-1 '></span>

        <div className='flex items-center'>
          <p className='text-[.8rem] '>{timeFormated}</p>
          {/* {isActive && <BiEdit onClick={handleModal} size={18} className='cursor-pointer mx-1' />} */}
          <BiEdit onClick={handleModal} size={18} className='cursor-pointer mx-1' />
        </div>
      </div>
      <ModalTeste showModal={showModal} onCloseModal={handleModal} />
      {/* {isActive && <EditTask task={task} />} */}
    </div>
  )
}

export default Task