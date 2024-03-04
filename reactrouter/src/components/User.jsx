import React from "react";
import {useParams, Outlet} from "react-router-dom";

const User = () => {
	const {userid} = useParams();
	return (
		<>
			<div>User : {userid ? userid : "No user since empty parameters"}</div>
			{(userid) ? <Outlet /> : <h1 className="bg-green-600">No user id in params</h1>}
		</>
	);
};

export default User;
