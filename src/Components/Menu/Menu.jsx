import { AiOutlineHome, AiOutlineCalendar, AiOutlineHeart } from 'react-icons/ai'
import { BsMoon } from 'react-icons/bs'

const Menu = ({ onCloseModal }) => {

  const handleModal = () => {
    onCloseModal()
  }

  return (
    <div className='fixed bottom-0 left-2/4 -translate-x-[50%] w-full max-w-[512px]'>
      <button onClick={handleModal} className="bg-primary absolute bottom-9 left-2/4 -translate-x-[50%] rounded-full w-14 h-14 flex items-center justify-center text-white text-2xl">+</button>
      <div className='bg-[#EDEAEA] rounded-[38px] py-5 flex justify-between items-center px-8'>
        <AiOutlineHome size={25} />
        <AiOutlineCalendar size={25} />
        <BsMoon size={25} />
        <AiOutlineHeart size={25} />
      </div>
    </div>
  )
}

export default Menu