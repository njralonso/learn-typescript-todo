import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
	{ id: 1, title: 'Aprender typescript', completed: true },
	{ id: 2, title: 'Hacer otro proyecto con typescript', completed: false },
	{ id: 3, title: 'Hacer proyecto con ReactNative', completed: false },
]

const App = () => {
	const [todos, setTodos] = useState(mockTodos)

	return (
		<div className="todoapp">
			<Todos todos={todos} />
		</div>
	)
}

export default App
