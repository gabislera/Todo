import { useEffect, useState } from 'react'
import DateInput from './DateInput'
import SelectInput from './SelectInput'
import TextAreaInput from './TextAreaInput'
import TaskInput from './TaskInput'

const todayDate = new Date()

const Form = ({ buttonText, onSubmit, currentTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dateValue, setDateValue] = useState(todayDate)
  const [priority, setPriority] = useState('baixa')

  const resetState = () => {
    setTitle('')
    setDescription('')
    setPriority('baixa')
    setDateValue(todayDate)
  }

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title)
      setDescription(currentTask.description)
      setDateValue(currentTask.dateValue)
      setPriority(currentTask.priority)
    }
  }, [currentTask])

  const handleDropDown = ({ target }) => {
    setPriority(target.value)
  }

  const handleDate = ({ target }) => {
    const date = new Date(target.value)
    date.setHours(date.getHours() + 3)
    setDateValue(date)
  }

  const handleTitle = ({ target }) => {
    setTitle(target.value)
  }

  const handleDescription = ({ target }) => {
    setDescription(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const taskData = {
      title,
      dateValue,
      priority,
      description,
      checked: false
    }
    onSubmit(taskData)
    resetState()
  }

  return (
    <div className='flex flex-col gap-10 pb-5'>
      <h1 className='mx-5 mt-5 font-roboto font-normal'>Qual a sua próxima tarefa?</h1>
      {/* <button onClick={handleSubmit}>modal</button> */}
      <div className='flex'>
        <form className='flex flex-col mx-5 gap-5' onSubmit={handleSubmit}>
          <TaskInput value={title} onChange={handleTitle} />
          <TextAreaInput value={description} onChange={handleDescription} />
          <div className='flex justify-between flex-row gap-3 flex-wrap'>
            <SelectInput value={priority} onChange={handleDropDown} />
            <DateInput value={dateValue} onChange={handleDate} />
            <button className='bg-action rounded w-max py-1 px-4 mt-5 text-white'>{buttonText}</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Form