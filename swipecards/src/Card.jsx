import React from "react";

function Card() {
	const [answerVisibibility, setAnswerVisibibility] = React.useState(false);
	return (
		<div className="flex items-center justify-center flex-col">
			<div className="flex items-center gap-10 border-b-[1px] border-black pb-4">
				<p className="font-bold text-lg">
					Lorem ipsum dolor sit amet, consectetur adipisicing?
				</p>
				<svg
					height={20}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 384 512"
					className={
						"duration-300 cursor-pointer" +
						(answerVisibibility ? " rotate-90" : "")
					}
					onClick={(e) => {
						setAnswerVisibibility(!answerVisibibility);
					}}
				>
					<path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
				</svg>
			</div>
			<div
				className={
					"pt-4 text-center duration-300 transition-all ease-in-out w-[501px] h-0 overflow-hidden" +
					(answerVisibibility ? " h-[110px]" : "")
				}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, non
				porro! Dolore vel et odio ipsam, enim veniam eum facere aliquid
				exercitationem deserunt. Quas corrupti soluta reiciendis perferendis
				quae maxime.
			</div>
		</div>
	);
}

export default Card;
