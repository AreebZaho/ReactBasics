import React from "react";
import Val from "./Val";

const DisplayVals = ({count}) => {
	return (
		<div className="flex items-center justify-center w-2/5 h-16 p-4 mt-8 bg-green-200 rounded-lg shadow-md">
			{Array(15)
				.fill()
				.map((_, i) => (
					<React.Fragment key={i}>
						<Val>{count}</Val>
						&nbsp;&nbsp;
					</React.Fragment>
				))}
		</div>
	);
};

export default DisplayVals;
