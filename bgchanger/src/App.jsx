import React, {useState} from "react";
import Bg from "./Bg";
import Button from "./Button";
import Input from "./Input";

const App = () => {
	const [color, setColor] = useState("white");
	const colors = ["red", "green", "blue"];
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen gap-12">
			<Bg bgColor={color} />
			<div className="flex gap-5">
				{colors.map((color, i) => (
					<Button
						children={color}
						onClick={() => setColor(() => color)}
						key={i}
					/>
				))}
				<Input onKeyUp={(e) => setColor(() => e.target.value)} />
			</div>
		</div>
	);
};

export default App;
