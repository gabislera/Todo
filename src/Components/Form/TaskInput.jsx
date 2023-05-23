const TaskInput = ({ value, onChange }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[.85rem]' htmlFor='task'>Nova Tarefa</label>
      <input
        className='mt-2 border-solid border-[.5px] rounded text-[1rem] py-1 px-3 focus:outline-action w-full'
        type="text"
        required
        placeholder='Tarefa'
        id='task'
        autoFocus
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TaskInput