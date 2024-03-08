import React, {useState} from "react";
import Btn from "./Btn";

function App() {
	const [exp, setExp] = useState("");
	const [val, setVal] = useState("");

	const handleOperator = function (operator) {
		if (!val) return;
		setVal("");
		const last = exp[exp.length - 1];
		if (last === "+" || last === "-" || last === "*" || last === "/") {
			setExp((prev) => prev.slice(0, -1) + operator);
			return;
		}
		setExp((exp) => exp + val + operator);
	};
	const handleNum = function (num) {
		if (num === "0" && val === "0") return;
		if (num === ".") {
			if (val === "") setVal("0");
			else if (val.includes(".")) return;
		}
    setVal((val) => (val + num).toString());
	};

	return (
		<div className="flex flex-col items-center justify-center bg-slate-500 h-screen w-screen">
			<input
				type="text"
				className="w-[320px] h-8 rounded-t-xl bg-slate-300 text-md font-bold px-4 focus:outline-none text-center text-slate-500"
				readOnly={true}
				value={exp}
			/>
			<input
				type="text"
				className="w-[320px] h-12 bg-slate-300 text-xl font-bold px-4 focus:outline-none text-center"
				readOnly={true}
				value={val}
			/>
			<div className="flex flex-wrap w-[320px] h-[400px]">
				<Btn
					children="A/C"
					onClick={() => {
						setExp("");
						setVal("");
					}}
				/>
				<Btn
					children="+/-"
					onClick={() => {
						setVal((prev) =>
							prev[0] === "-" ? prev.substring(1) : "-" + prev
						);
					}}
				/>
				<Btn children="%" onClick={() => setVal((val / 100).toString())} />
				<Btn children="/" color={1} onClick={handleOperator} />
				<Btn children="7" onClick={handleNum} />
				<Btn children="8" onClick={handleNum} />
				<Btn children="9" onClick={handleNum} />
				<Btn children="*" color={1} onClick={handleOperator} />
				<Btn children="6" onClick={handleNum} />
				<Btn children="5" onClick={handleNum} />
				<Btn children="4" onClick={handleNum} />
				<Btn children="-" color={1} onClick={handleOperator} />
				<Btn children="3" onClick={handleNum} />
				<Btn children="2" onClick={handleNum} />
				<Btn children="1" onClick={handleNum} />
				<Btn children="+" color={1} onClick={handleOperator} />
				<Btn children="Del" onClick={() => setVal(val.slice(0, -1))} />
				<Btn children="0" onClick={handleNum} />
				<Btn children="." onClick={handleNum} />
				<Btn
					children="="
					color={1}
					onClick={() => {
						setVal(eval(exp + val).toString());
						setExp("");
					}}
				/>
			</div>
		</div>
	);
}

export default App;
