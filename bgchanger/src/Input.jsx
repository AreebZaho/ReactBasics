import React from "react";

const Input = (props) => {
	const {onKeyUp} = props;
	return (
		<input
			onKeyUp={onKeyUp}
			placeholder="enter color to display"
			type="text"
			className="px-4 py-2 rounded-md shadow-md bg-slate-300"
		/>
	);
};

export default Input;
