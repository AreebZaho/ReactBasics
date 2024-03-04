import React from "react";
import UserContext from "../contexts/UserContext";
import {useState} from "react";
import {useContext} from "react";

const Login = () => {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const {setUser} = useContext(UserContext);

	return (
		<div>
			<h1>Login form</h1>
			<form action="">
				<input
					type="text"
					placeholder="enter username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					type="submit"
					className="border-2 border-black"
					onClick={(e) => {
						e.preventDefault();
						setUser(username);
					}}
				>
					Submit Details
				</button>
			</form>
		</div>
	);
};

export default Login;
