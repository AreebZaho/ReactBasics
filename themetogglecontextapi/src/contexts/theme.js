import {useState} from "react";
import {createContext, useContext} from "react";

const ThemeContext = createContext({
	themeMode: "light",
	changeTheme: () => {},//name must be same as passed in value={} in ptovider wrapper
});

const ThemeProvider = ThemeContext.Provider;

function useTheme() {
	return useContext(ThemeContext);
}

export {ThemeProvider, useTheme};
