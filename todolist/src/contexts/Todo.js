import {createContext, useContext} from "react";

const TodoContext = createContext({
	addTodo: (task) => {},
	updateTodo: (id, newTask) => {},
	toggleDone: (id) => {},
	deleteTodo: (id) => {},
});

const TodoProvider = TodoContext.Provider;

function useTodo() {
	return useContext(TodoContext);
}

export {TodoProvider, useTodo};
