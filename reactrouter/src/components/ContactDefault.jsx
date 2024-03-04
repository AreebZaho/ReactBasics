import React from "react";
import {NavLink} from "react-router-dom";

const ContactDefault = () => {
	return (
		<>
			<div className="flex gap-6 text-lg">
				This is the default contact page with no num or email / path. Click on
				these 2 to go anywhere:
				{/* note that in the NavLink's to= just use the next page name don't put /num or /email as directs from homepage
				but without, directs from contact page only -> contact /num or /email */}
				<NavLink to="num" className="text-red-500">
					number
				</NavLink>
				<NavLink to="email" className="text-red-500">
					email
				</NavLink>
			</div>
		</>
	);
};

export default ContactDefault;
