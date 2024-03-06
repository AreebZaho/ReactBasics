import React, {useState} from "react";
import {useTodo} from "../contexts/Todo";

function Form() {
	const {addTodo} = useTodo();
	const [task, setTask] = useState("");
	return (
		<form action="" className="pl-4 py-2 pr-2 rounded-lg mb-6 bg-slate-200">
			<textarea
				rows={1}
				cols={40}
				type="text"
				placeholder="Add a new task"
				className="outline-none rounded-lg text-black bg-slate-200"
				value={task}
				onChange={(e) => setTask(e.target.value)}
			/>
			<button
				type="submit"
				className="px-4 py-2 bg-green-300 rounded-lg ml-2 text-black font-semibold shadow-md hover:bg-green-400 duration-150 hover:scale-105 active:scale-90"
				onClick={(e) => {
					e.preventDefault();
					if (!task) return;
					addTodo({id: Date.now(), task: task, completed: false});
					setTask("");
				}}
			>
				Add
			</button>
		</form>
	);
}

export default Form;
