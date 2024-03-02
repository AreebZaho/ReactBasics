import React from "react";

const Input = React.forwardRef((props, ref) => {
	const {value} = props;
	return (
		<input
			type="text"
			className="px-4 py-2 rounded-md shadow-md"
			placeholder="generated password..."
			value={value}
			ref={ref}
			readOnly
		/>
	);
});

export default Input;
