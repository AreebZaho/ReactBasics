import React, {useState} from "react";
import Background from "./bg.jpg";
import {InputSection} from "./components/index";
import {useConversionRates} from "./hooks/index";

const App = () => {
	const [from, setFrom] = useState("USD");
	const [to, setTo] = useState("INR");
	const [amount, setAmount] = useState("");
	const [convertedAmount, setConvertedAmount] = useState("");
	const conversionRates = useConversionRates(from);
	return (
		<div
			className="flex items-center justify-center w-screen h-screen px-4 opacity-50"
			style={{
				backgroundImage: `url(${Background})`,
			}}
		>
			<div className="relative flex flex-col items-center justify-center flex-1 gap-4 p-8 border-2 max-w-[500px] rounded-xl border-slate-900 backdrop-blur-sm">
				<InputSection
					label="From"
					value={amount}
					currencies={Object.keys(conversionRates)}
					inputOnChange={(e) => {
						setAmount(e.target.value);
						setConvertedAmount(
							(Number(e.target.value) * conversionRates[to]).toString()
						);
					}}
					selectorDefault={from}
					selectorOnChange={(e) => setFrom(e.target.value)}
				/>
				<InputSection
					label="To"
					value={convertedAmount}
					currencies={Object.keys(conversionRates)}
					inputOnChange={() => {}}
					selectorDefault={to}
					selectorOnChange={(e) => setTo(e.target.value)}
				/>
				<button
					className="px-4 py-1 text-lg font-bold bg-yellow-400 border-2 border-black rounded-md shadow-md hover:bg-yellow-600 hover:shadow-xl"
					onClick={() => {
						setFrom(to);
						setTo(from);
						setAmount(convertedAmount);
						setConvertedAmount(amount);
					}}
				>
					Swap
				</button>
			</div>
		</div>
	);
};

export default App;
