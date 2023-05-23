const TextAreaInput = ({ value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[1rem]' htmlFor='details'>Detalhes</label>
      <textarea
        className='mt-2 border-solid border-[.5px] rounded text-sm py-1 px-3 focus:outline-action w-full'
        name="details"
        id="details"
        cols="30"
        rows="3"
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  )
}

export default TextAreaInput