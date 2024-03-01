import React from "react";
import {useState} from "react";

const Button = (props) => {
	const {children, onClick} = props;
	return (
		<button
			className="px-4 py-2 font-semibold text-white rounded-md shadow-md hover:shadow-lg focus:outline-double outline-black outline-2"
			style={{backgroundColor: children}}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
