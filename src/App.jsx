import './App.css'
import { UserStorage } from './UserContext'
import DateSelector from './Components/DateSelector/DateSelector'
import Tasks from './Components/Tasks/Tasks'
import Menu from './Components/Menu/Menu'
import NewTaskModal from './Components/NewTaskModal/NewTaskModal'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }
  return (
    <div className='h-screen max-w-lg mx-auto flex flex-col'>
      <UserStorage>
        <NewTaskModal showModal={showModal} onCloseModal={handleModal} />
        <DateSelector />
        <Tasks />
        <Menu onCloseModal={handleModal} />
      </UserStorage>
    </div>
  )
}

export default App
