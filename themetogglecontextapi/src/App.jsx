import React from "react";
import {ThemeProvider, useTheme} from "./contexts/theme";
import {Card, ThemeBtn} from "./components";
import {useState} from "react";
import {useEffect} from "react";

const App = () => {
	const [themeMode, setThemeMode] = useState("light");
	const changeTheme = () => {
		setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
	}
	useEffect(() => {
		if (themeMode === "light") {
			document.querySelector("html").classList.remove("dark");
		} else {
			document.querySelector("html").classList.add("dark");
		}
	}, [themeMode]);
	return (
		<ThemeProvider value={{themeMode, changeTheme}}>
			<h1 className="text-4xl">Theme toggler</h1>
			<ThemeBtn />
			<Card />
		</ThemeProvider>
	);
};

export default App;
