import React from "react";
import Card from "./Card";

const App = () => {
	return (
		<div className="flex flex-col flex-wrap items-center justify-center w-screen h-screen gap-5 bg-slate-500">
			<Card desc="hello world"/>
			<Card username="Pikachu"/>
			<Card designation="L3 at Google"/>
		</div>
	);
};

export default App;
