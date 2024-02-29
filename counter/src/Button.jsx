import React from "react";

const Button = ({onClick, children}) => {
	return (
		<button
			className="flex items-center justify-center px-4 py-2 text-lg font-medium bg-yellow-400 rounded-md shadow-sm hover:bg-yellow-500 hover:shadow-md"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
