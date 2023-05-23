const DateComponent = ({ day, week, isActive, onClick }) => {
  return (
    <div onClick={onClick} className='flex flex-col gap-2 place-items-center '>
      <div className={`rounded-full w-6 h-6 flex cursor-pointer justify-center 
      items-center text-[.7rem] text-white ${isActive ? 'bg-primary w-9 h-9 text-[.9rem]' : 'bg-secondary'}`}>
        <p>{day}</p>
      </div>
      <p className={`${isActive ? 'text-primary w-9 h-9 flex justify-center text-[1.3rem]' : 'text-secondary'}`}>{week}</p>
    </div>


  )
}

export default DateComponent