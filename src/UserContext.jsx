import { createContext, useEffect, useState } from "react";

export const UserContext = createContext()

const TASKS_STORAGE_KEY = "tasks";

const saveTasksToLocalStorage = (task) => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(task));
}

const getTasks = () => {
  const result = localStorage.getItem(TASKS_STORAGE_KEY)
  return JSON.parse(result) ?? []
}

const storageTask = getTasks()

export const UserStorage = ({ children }) => {
  const [tasks, setTasks] = useState(storageTask)
  const [id, setId] = useState(1)
  const [currentTask, setCurrentTask] = useState('')
  const [activeTaskId, setActiveTaskId] = useState(null)
  const [currentDate, setCurrentDate] = useState(new Date())


  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  const addTask = (task) => {
    setTasks((prevTask) => {
      const taskAux = {
        ...task, id
      }
      const list = [...prevTask, taskAux]
      saveTasksToLocalStorage(list)
      return list
    })
    setCurrentTask(undefined)
    setId(id + 1)
  }

  const editTask = (task) => {
    const editedTask = tasks.map((_task) => {
      if (_task.id === task.id)
        return {
          ...task,
          id: _task.id
        }
      return _task
    })
    saveTasksToLocalStorage(editedTask)
    setTasks(editedTask)
  }

  const updateChecked = (task) => {
    const checkedTask = tasks.map((_task) => {
      if (_task.id === task.id)
        return {
          ..._task,
          checked: !_task.checked
        }
      return _task
    })
    saveTasksToLocalStorage(checkedTask)
    setTasks(checkedTask)
  }

  const deleteTask = (task) => {
    const filteredTask = tasks.filter(({ id }) => id !== task.id)
    saveTasksToLocalStorage(filteredTask)
    setTasks(filteredTask)
  }

  return (
    <UserContext.Provider value={{
      addTask,
      tasks,
      updateChecked,
      setCurrentTask,
      currentTask,
      deleteTask,
      editTask,
      activeTaskId,
      setActiveTaskId,
      currentDate,
      setCurrentDate
    }}>
      {children}
    </UserContext.Provider>
  )
}