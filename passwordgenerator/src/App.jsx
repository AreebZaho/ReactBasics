import React from "react";
import {useState, useCallback, useEffect, useRef} from "react";
import Input from "./Input";
import Slider from "./Slider";
import ChecklistItem from "./ChecklistItem";

const App = () => {
	const [password, changePassword] = useState("");
	const [length, changeLength] = useState(8);
	const [numbersChecked, changeNumbersChecked] = useState(true);
	const [charactersChecked, changeCharactersChecked] = useState(true);

	const passwordRef = useRef(null);

	const generatePassword = useCallback(() => {
		let characterKey = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (numbersChecked) characterKey += "0123456789";
		if (charactersChecked) characterKey += "!@#$%^&*()_+{}[];:,.<>?";
		let pass = "";
		for (let i = 0; i < length; i++) {
			pass += characterKey.charAt(
				Math.floor(Math.random() * characterKey.length)
			);
		}
		changePassword(pass);
	}, [length, numbersChecked, charactersChecked]);

	useEffect(() => {
		generatePassword();
	}, [length, numbersChecked, charactersChecked]);

	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen gap-10 bg-slate-400">
			<h1 className="text-4xl font-bold">Password Generator by Areeb</h1>
			<div className="relative flex items-center justify-center gap-4 p-2 rounded-md shadow-lg bg-amber-400">
				<Input value={password} ref={passwordRef} />
				<div className="flex items-center justify-center mr-2 text-3xl">
					<i
						className="cursor-pointer fa-regular fa-copy"
						onClick={(e) => {
							passwordRef.current?.select();
							navigator.clipboard.writeText(password);
							e.target.classList.add("fa-solid", "fa-check");
							setTimeout(() => {
								e.target.classList.remove("fa-solid", "fa-check");
							}, 1500);
						}}
					></i>
				</div>
			</div>
			<Slider
				labelVal="Length"
				inputId="slider"
				min={4}
				max={20}
				value={length}
				onChange={(e) => changeLength(e.target.value)}
			/>
			<div className="flex items-center justify-center gap-10">
				<ChecklistItem
					value="numbers"
					onChange={() =>
						changeNumbersChecked((numbersChecked) => !numbersChecked)
					}
				/>
				<ChecklistItem
					value="characters"
					onChange={() =>
						changeCharactersChecked((charactersChecked) => !charactersChecked)
					}
				/>
			</div>
		</div>
	);
};

export default App;
