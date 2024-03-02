import React from "react";

const ChecklistItem = (props) => {
	const {value, onChange} = props;
	return (
		<div className="flex items-center justify-center gap-2 text-lg font-semibold">
			<input
				id={value}
				type="checkbox"
				defaultChecked="checked"
				className="w-5 h-5 cursor-pointer"
				onChange={onChange}
			/>
			<label htmlFor={value} className="cursor-pointer">
				{value === "numbers" ? "Numbers" : "Characters"}
			</label>
		</div>
	);
};

export default ChecklistItem;
