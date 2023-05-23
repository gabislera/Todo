import { useEffect } from 'react'
import { useTodoList } from '../../hooks/useTodoList'
import Form from '../Form/Form'

const EditModal = ({ showModal, onCloseModal }) => {
  const { editTodo, currentTodo } = useTodoList()

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onCloseModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onCloseModal])

  const onSubmit = (todoData) => {
    editTodo({
      ...todoData,
      id: currentTodo.id
    })
    onCloseModal()
  }

  if (!showModal) return <></>
  return (
    <div className="w-screen h-screen fixed bg-black/40 top-0 left-0 z-[1]">
      <div className='w-max h-max rounded-xl bg-white fixed top-28 left-1/2 -translate-x-2/4 shadow-xl'>
        <Form
          onCloseModal={onCloseModal}
          buttonText='Editar'
          onSubmit={onSubmit}
          currentTodo={currentTodo}
        />
      </div>
      <div className='w-screen h-screen' onClick={onCloseModal}></div>
    </div>
  )
}

export default EditModal