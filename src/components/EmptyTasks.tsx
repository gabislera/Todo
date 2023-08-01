import { ClipboardText } from '@phosphor-icons/react'
export const EmptyTasks = () => {
  return (
    <div className="mx-4 mt-10 max-w-[736px] border-t-[1px] border-gray-400 sm:mx-auto">
      <div className="mt-16 flex flex-col items-center text-gray-400">
        <ClipboardText size={56} />
        <h1 className="mt-2 font-sans font-bold">
          Você ainda não tem tarefas cadastradas
        </h1>
        <p className="font-sans">Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
