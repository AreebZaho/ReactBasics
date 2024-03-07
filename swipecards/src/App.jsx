import React from "react";
import Card from "./Card";

function App() {
	return (
		<div className="flex justify-center h-screen w-screen bg-slate-700">
			<div className="rounded-lg shadow-md bg-slate-300 p-4 mt-4 h-fit gap-8 flex flex-col">
				{Array(4)
					.fill()
          .map((_, i) => (
            <Card key={i} id={i} />
					))}
			</div>
		</div>
	);
}

export default App;
