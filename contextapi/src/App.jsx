import React from "react";
import UserContextProvider from "./contexts/UserContextProvider";
import {Login, Profile} from "./components";
const App = () => {
	return (
		<UserContextProvider>
			<h1 className="text-3xl bg-green-400">User Context Provider</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
};

export default App;
