import React, {useState, useEffect} from "react";
import {TodoItem, Form} from "./components";
import {TodoProvider} from "./contexts/Todo";

const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
		if (todosFromStorage && todosFromStorage.length) {
			setTodos(todosFromStorage);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = function (newTodo) {
		setTodos((theTodos) => [newTodo, ...theTodos]);
	};

	const updateTodo = function (id, editedTask) {
		setTodos((theTodos) =>
			theTodos.map((todo) =>
				todo.id === id ? {...todo, task: editedTask} : todo
			)
		);
	};

	const toggleDone = function (id) {
		setTodos((theTodos) =>
			theTodos.map((todo) =>
				todo.id === id ? {...todo, completed: !todo.completed} : todo
			)
		);
	};

	const deleteTodo = function (id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const completedTasks = function () {
		return todos.filter((todo) => todo.completed).length;
	};

	const percentageCompleted = function () {
		return (completedTasks() / todos.length) * 100;
	};

	return (
		<TodoProvider
			value={{addTodo, updateTodo, toggleDone, deleteTodo}}
		>
			<div className="flex flex-col items-center bg-slate-800 text-white h-screen w-screen">
				<h1 className="mt-12 mb-8 text-3xl font-bold">
					{todos.length
						? completedTasks() + "/" + todos.length + " Completed"
						: "Your Todo List"}
				</h1>
				<h2
					className={
						"mb-8 text-xl font-semibold text-slate-300 " +
						(todos.length ? "" : "hidden")
					}
				>
					{percentageCompleted() === 100
						? "Great Job For Today!"
						: percentageCompleted()
						? "Keep Going!"
						: "Try to do atleast one today!"}
				</h2>
				<Form />
				{todos.map((todo) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</div>
		</TodoProvider>
	);
};

export default App;
