import { ReactNode, createContext, useState } from 'react'
interface ContextProviderProps {
  children: ReactNode
}

export interface TaskProps {
  title: string
  id?: number
  checked: boolean
}
interface ContextProps {
  addTask: (task: TaskProps) => void
  tasks: TaskProps[]
  updateChecked: (task: TaskProps) => void
  deleteTask: (task: TaskProps) => void
}

export const UserContext = createContext({} as ContextProps)

const TASKS_STORAGE_KEY = 'tasks'

const saveTasksToLocalStorage = (task: TaskProps[]) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(task))
}

const getTasks = () => {
  const result = localStorage.getItem(TASKS_STORAGE_KEY)
  if (typeof result === 'string') {
    return JSON.parse(result) ?? []
  }
  return []
}

const storageTask = getTasks()

const getId = () => {
  const id = localStorage.getItem('ID')
  if (typeof id === 'string') return Number(id)

  return 0
}

const storageId = getId()

export const UserStorage = ({ children }: ContextProviderProps) => {
  const [tasks, setTasks] = useState<TaskProps[]>(storageTask)
  const [id, setId] = useState(storageId)

  const addTask = (task: TaskProps) => {
    setTasks((prevTask) => {
      const taskAux = {
        ...task,
        id,
      }
      const list = [...prevTask, taskAux]

      saveTasksToLocalStorage(list)
      localStorage.setItem('ID', `${id}`)
      return list
    })
    setId((prevId) => prevId + 1)
  }

  const updateChecked = (task: TaskProps) => {
    const checkedTask = tasks.map((_task) => {
      if (_task.id === task.id)
        return {
          ..._task,
          checked: !_task.checked,
          id: _task.id,
        }
      return _task
    })
    saveTasksToLocalStorage(checkedTask)
    localStorage.setItem('ID', `${id}`)
    setTasks(checkedTask)
  }

  const deleteTask = (task: TaskProps) => {
    const filteredTask = tasks.filter(({ id }) => id !== task.id)
    saveTasksToLocalStorage(filteredTask)
    setTasks(filteredTask)
  }

  return (
    <UserContext.Provider
      value={{
        addTask,
        tasks,
        updateChecked,
        deleteTask,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
