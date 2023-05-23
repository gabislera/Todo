import { useTodoList } from "../hooks/useTodoList"
import { useEffect } from 'react'

const ModalTeste = ({ showModal, onCloseModal }) => {
  const { currentTask } = useTodoList()

  useEffect(() => {
    console.log(showModal)
  }, [showModal])

  if (!showModal || !currentTask) return null
  return (
    <div className="relative w-screen h-screen bg-red-500 z-[1] ">
      <div className='w-[200px] h-[200px] rounded-xl bg-white fixed top-28 left-1/2 -translate-x-2/4 shadow-xl'>
        {currentTask?.title}
      </div>
      <div className='w-screen h-screen' onClick={onCloseModal}></div>
    </div>
  )
}

export default ModalTeste