import React from "react";

const Bg = (props) => {
	const { bgColor = "white" } = props;
	
	return (
		<div
			className="flex items-center justify-center w-3/5 bg-gray-300 shadow-2xl rounded-3xl h-2/5"
			style={{
				backgroundColor: bgColor,
			}}
		>
			<h1 className="text-4xl font-bold">Background Changer by Areeb</h1>
		</div>
	);
};

export default Bg;
