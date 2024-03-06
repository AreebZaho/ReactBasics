import React, {useState, useEffect} from "react";
import {useTodo} from "../contexts/Todo";

function TodoItem(props) {
	const {todo} = props;
	const {updateTodo, toggleDone, deleteTodo} = useTodo();
	const [completed, setCompleted] = useState(todo.completed); // using todo.completed since this governs the state of checked, input line and edit icon and and could've been kept checked in localStorage so when out from it should represent the correct status instead of being set false only in intial state
	const [editable, setEditable] = useState(false);
	const [task, setTask] = useState(todo.task); // tracking state while editing

	useEffect(() => {
		if (completed) setEditable(false);
		toggleDone(todo.id);
	}, [completed]);

	function editTodo() {
		if (completed) return;
		setEditable((editable) => !editable);
	}

	useEffect(() => {
		if (!editable) updateTodo(todo.id, task);
	}, [editable]);

	useEffect(() => {
		// don't use task since while editing if empty ("") -> deletes the todo
		if (!todo.task) deleteTodo(todo.id);
	}, [todo.task]);

	return (
		<div className="flex gap-6 bg-pink-300 rounded-lg px-4 py-2 items-center mb-4">
			<svg
				height={24}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				className="cursor-pointer hover:scale-110 duration-150 active:scale-90"
				onClick={() => setCompleted((prev) => !prev)}
			>
				<path
					d={
						completed
							? "M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
							: "M384 80c8.8 0 16 7.2 16 16V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V96c0-8.8 7.2-16 16-16H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
					}
				/>
			</svg>
			<textarea
				rows={1}
				cols={30}
				type="text"
				className={
					"focus:outline-none rounded-lg px-2 py-1 text-black bg-pink-300 border-2 font-medium overflow-hidden " +
					(editable ? "border-black" : "border-transparent")
				}
				value={task}
				onChange={(e) => setTask(e.target.value.trimStart())}
				readOnly={!editable}
			/>
			<svg
				height={20}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				className={
					completed
						? "opacity-40 cursor-not-allowed"
						: "cursor-pointer hover:scale-125 duration-150 active:scale-90"
				}
				onClick={editTodo}
			>
				<path
					d={
						editable
							? "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
							: "M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
					}
				/>
			</svg>
			<svg
				height={20}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
				className="cursor-pointer hover:scale-125 duration-150 active:scale-90"
				onClick={() => deleteTodo(todo.id)}
			>
				<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
			</svg>
		</div>
	);
}

export default TodoItem;
