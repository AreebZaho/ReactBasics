import React from "react";

import UserContext from "./UserContext";
import {useState} from "react";

// can either declare the state variables here and provide them directly
const UserContextProvider = (props) => {
	const {children} = props;
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	);
};

//or can declare them in app.jsx where they are passed as value prop
// const UserContextProvider = (props) => {
// 	const {children} = props;
// 	return (
// 		<UserContext.Provider value={props.value}>
// 			{children}
// 		</UserContext.Provider>
// 	);
// };

export default UserContextProvider;
