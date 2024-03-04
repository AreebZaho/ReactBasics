import React, {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

const GitHub = () => {
	const data = useLoaderData(); //optimised for performance

	// const [data, setData] = useState();
	// useEffect(() => {
	//     fetch('https://api.github.com/users/hiteshchoudhary')
	//     .then((response) => response.json())
	//     .then(data => {
	//         console.log(data)
	//         setData(data)
	//     })
	// }, [])

	return (
		<>
			<div>followers: {data.followers}</div>
			<img src={data.avatar_url} alt="img" />
		</>
	);
};

const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/AreebZaho");
	return response.json();
};

export {GitHub, githubInfoLoader};
