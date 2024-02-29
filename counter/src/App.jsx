import React from "react";
import "./index.css";
import Heading from "./Heading";
import Button from "./Button";
import DisplayVals from "./DisplayVals";
import {useState} from "react";

const App = () => {
	const [counter, setCounter] = useState(10);
	return (
		<>
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
		</>
	);
};

export default App;
