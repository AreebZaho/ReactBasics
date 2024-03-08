import React from "react";

function Btn({children, color, onClick}) {
	return (
		<div
			className={
				"flex items-center justify-center font-semibold text-xl w-20 h-20 shadow-inner cursor-pointer " +
				(color ? "bg-orange-500 " : "bg-slate-700 ") +
				(children === "Del"
					? "rounded-bl-xl"
					: children === "="
					? "rounded-br-xl"
					: "")
			}
			onClick={() => onClick(children)}
		>
			{children}
		</div>
	);
}

export default Btn;
