import { UserStorage } from './context/UserContext'
import { Header } from './components/Header'
import { ProgressInfo } from './components/ProgressInfo'
import { TaskInput } from './components/TaskInput'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <div className="h-screen bg-gray-800">
      <UserStorage>
        <Header />
        <TaskInput />
        <ProgressInfo />

        <Tasks />
      </UserStorage>
    </div>
  )
}
