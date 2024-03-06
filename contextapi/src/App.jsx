import React, { useState } from "react";
import UserContextProvider from "./contexts/UserContextProvider";
import { Login, Profile } from "./components";

const App = () => {
	//can pass these here or directly in the where the UserContextProvider is declared and just using the wrapper here with no props used
	const [user, setUser] = useState(null);
	return (
		<UserContextProvider value={{user, setUser}}>
			<h1 className="text-3xl bg-green-400">User Context Provider</h1>
			<Login />
			<Profile />
		</UserContextProvider>
	);
};

export default App;
