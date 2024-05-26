import { useState } from "react"
import { Todos } from "./components/Todos"
import { type TodoId, Todo as TodoType } from './types'


const mockTodos = [
	{ id: 1, title: 'Aprender typescript', completed: true },
	{ id: 2, title: 'Hacer otro proyecto con typescript', completed: false },
	{ id: 3, title: 'Hacer proyecto con ReactNative', completed: false },
]

const App = () => {
	const [todos, setTodos] = useState(mockTodos)

	const handleRemove = ({ id }: TodoId) => {
		const newTodos = todos.filter(todo => todo.id !== id)
		setTodos(newTodos)
	}

	const handleComplete = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
		const newTodos = todos.map(todo => {
			if (todo.id === id) {
				return { ...todo, completed }
			}
			return todo
		})
		setTodos(newTodos)
	}

	return (
		<div className="todoapp">
			<Todos todos={todos}
				onToggleCompleted={handleComplete}
				onRemoveTodo={handleRemove}
			/>
		</div>
	)
}

export default App
