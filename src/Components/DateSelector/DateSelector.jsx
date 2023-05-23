import DateComponent from './DateComponent'
import { useTodoList } from '../../hooks/useTodoList'

const options = { weekday: 'short', timeZone: 'UTC', locale: 'pt' }

const DateSelector = () => {
  const { currentDate, setCurrentDate } = useTodoList()
  const dateComponents = []
  const middleIndex = 3 // Index of the middle element in the array

  for (let i = middleIndex - 3; i <= middleIndex + 3; i++) {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + (i - middleIndex))
    const dayOfMonth = date.getDate()
    const dayOfWeek = date.toLocaleString('pt', options).slice(0, 3)
    const isActive = dayOfMonth === currentDate.getDate()

    dateComponents.push(
      <DateComponent
        key={dayOfMonth}
        day={dayOfMonth}
        week={dayOfWeek}
        isActive={isActive}
        onClick={() => handleDateClick(dayOfMonth)}
      />
    )
  }

  const handleDateClick = (day) => {
    const newDate = new Date(currentDate)
    newDate.setDate(day)
    setCurrentDate(newDate)
    console.log(currentDate)
  }

  return (
    <div className=' bg-white mx-auto flex flex-row justify-between p-5 w-full mt-10'>
      {dateComponents}
    </div>
  )
}

export default DateSelector