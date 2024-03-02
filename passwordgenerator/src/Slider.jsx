import React from "react";

const Slider = (props) => {
	const {labelVal, inputId, min, max, value, onChange} = props;
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<label htmlFor={inputId} className="text-lg font-semibold">
				{labelVal} : {value}
			</label>
			<input
				id={inputId}
				type="range"
				min={min}
				max={max}
				value={value}
				className="w-40 h-2 bg-gray-500 rounded-full appearance-none cursor-pointer accent-black"
				onChange={onChange}
			></input>
		</div>
	);
};

export default Slider;
