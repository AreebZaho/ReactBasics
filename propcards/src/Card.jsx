import React from "react";

const Card = (props) => {
	const {desc = "no desc provided", username = "unknown identity", designation = "staff member"} = props;
	return (
		<figure className="w-2/5 p-8 bg-slate-100 rounded-xl dark:bg-slate-800">
			<img
				className="w-24 h-24 mx-auto rounded-full"
				src="./logo.png"
				alt="img"
				width="384"
				height="512"
			/>
			<div className="pt-6 space-y-4">
				<blockquote>
					<p className="text-lg font-medium text-white">{desc}</p>
				</blockquote>
				<figcaption className="font-medium">
					<div className="text-sky-500 dark:text-sky-400">{username}</div>
					<div className="text-sm text-gray-400">{designation}</div>
				</figcaption>
			</div>
		</figure>
	);
};

export default Card;
