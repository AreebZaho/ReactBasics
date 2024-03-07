import React from "react";
import Card from "./Card";

function App() {
	const [activeCard, setActiveCard] = React.useState(0);
	return (
		<div className="h-screen w-screen bg-slate-700 items-center justify-center flex flex-col gap-20 overflow-hidden">
			<div className="flex">
				{Array(5)
					.fill()
					.map((_, i) => (
            <Card key={i} hidden={activeCard === i ? 0 : 1} num={i} />
					))}
			</div>
			<div className="flex gap-10">
				<button
					className="bg-yellow-400 px-4 py-2 rounded-lg font-bold text-4xl pb-4"
					onClick={() => {
						setActiveCard((activeCard + 5 - 1) % 5);
					}}
				>
					{"<"}
				</button>
				<button
					className="bg-yellow-400 px-4 py-2 rounded-lg font-bold text-4xl pb-4"
					onClick={() => {
						setActiveCard((activeCard + 1) % 5);
					}}
				>
					{">"}
				</button>
			</div>
		</div>
	);
}

export default App;
