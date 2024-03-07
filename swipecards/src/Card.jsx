import React from "react";

function Card({hidden, num}) {
	return (
		<div
			className={
				"bg-green-400 p-8 w-[600px] rounded-lg shadow-lg" +
				(hidden ? " hidden" : "")
			}
		>
			<p className="font-bold text-xl">{num}</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non explicabo
				quae deserunt, eligendi debitis ipsum molestias, adipisci consequuntur
				reprehenderit porro architecto numquam magni est nam! Quaerat dolor
				perspiciatis sint nam?
			</p>
		</div>
	);
}

export default Card;
