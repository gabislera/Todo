import './App.css'
import { UserStorage } from './UserContext'
import DateSelector from './Components/DateSelector/DateSelector'
import Tasks from './Components/Tasks/Tasks'
import Menu from './Components/Menu/Menu'
import AddModal from './Components/AddModal/AddModal'
import { useState } from 'react'
import ModalTeste from './Components/ModalTeste'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  return (
    <div className='h-screen max-w-lg mx-auto flex flex-col border-2 rounded-[34px]'>
      <UserStorage>
        <AddModal showModal={showModal} onCloseModal={handleModal} />
        <DateSelector />
        <Tasks />
        <Menu onCloseModal={handleModal} />
      </UserStorage>
    </div >
  )
}

export default App
