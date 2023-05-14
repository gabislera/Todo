import React from 'react'
import Date from './Date'

const DateSelector = () => {
  return (
    <div className=' bg-white mx-auto flex justify-between p-5 w-full mt-10'>
      <Date day='5' week='Qui' />
      <Date day='6' week='Sex' />
      <Date day='7' week='Sab' />
      <Date day='8' week='Dom' />
      <Date day='9' week='Seg' />
      <Date day='10' week='Ter' />
      <Date day='11' week='Qua' />
    </div>
  )
}

export default DateSelector