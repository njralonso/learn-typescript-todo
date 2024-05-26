export interface Todo {
	id: number
	title: string
	completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoId = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]