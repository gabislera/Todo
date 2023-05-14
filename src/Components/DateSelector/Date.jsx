import React from 'react'

const Date = ({ day, week }) => {
  return (
    <div className='flex flex-col'>
      <div className='rounded-full bg-secondary w-6 h-6 flex cursor-pointer justify-center items-center text-[.8rem] text-white active:bg-primary'>
        <p>{day}</p>
      </div>
      <p className='text-secondary'>{week}</p>
    </div>
  )
}

export default Date