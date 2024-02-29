import React from "react";
import "./index.css";
import Heading from "./Heading";
import Button from "./Button";
import DisplayVals from "./DisplayVals";
import {useState} from "react";

const App = () => {
	const [counter, setCounter] = useState(10);
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen bg-slate-400">
			<Heading />
			<div className="flex gap-20 mt-8">
				<Button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
					Increment
				</Button>
				<Button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
					Decrement
				</Button>
			</div>
			<DisplayVals count={counter} />
		</div>
	);
};

export default App;
