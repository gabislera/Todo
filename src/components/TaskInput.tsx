/* eslint-disable prettier/prettier */
import { PlusCircle } from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'

export const TaskInput = () => {
  const [title, setTitle] = useState('')
  const { addTask } = useContext(UserContext)

  const handleInputValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTitle(target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault()
    const taskData = {
      title,
      checked: false,
    }
    addTask(taskData)
    setTitle('')
  }

  const isNewTaskEmpty = title.length === 0

  return (
    <div className="mx-4 h-max max-w-[736px] -translate-y-2/4 sm:mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={title}
          onChange={handleInputValue}
          className="form-input w-full rounded-lg border-[1px] border-gray-900 bg-gray-700 pl-4 font-sans text-gray-50"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          className={`${isNewTaskEmpty && 'cursor-not-allowed opacity-50'
            } flex items-center justify-center gap-2 rounded-lg bg-blue-secondary p-4 font-sans text-gray-50 hover:bg-blue-primary`}
          type="submit"
          disabled={isNewTaskEmpty}
        >
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </div>
  )
}
