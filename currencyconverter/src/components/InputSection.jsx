import React, {useId} from "react";

const InputSection = (props) => {
	const {
		label,
		value,
		currencies,
		inputOnChange,
		selectorDefault,
		selectorOnChange,
	} = props;
	const id = useId();
	return (
		<div className="flex flex-col items-center justify-between w-full h-full gap-6 p-4 shadow-xl bg-slate-100 rounded-xl sm:flex-row">
			<div className="flex flex-col justify-between w-full gap-6 items-between">
				<label htmlFor={id} className="ml-0.5 font-semibold">
					{label}
				</label>
				<input
					id={id}
					type="number"
					value={value}
					className="p-2 text-lg font-bold rounded-md shadow-md outline-none input bg-slate-300"
					readOnly={label === "To"}
					onChange={inputOnChange}
				/>
			</div>
			<div className="flex items-center justify-start gap-6 sm:items-end sm:flex-col">
				<p className="font-semibold text-nowrap">Currency Type</p>
				<select
					className="w-20 p-1 text-lg font-semibold rounded-lg shadow-md cursor-pointer bg-slate-300"
					value={selectorDefault}
					onChange={selectorOnChange}
				>
					{currencies.map((currency) => (
						<option value={currency} key={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default InputSection;
