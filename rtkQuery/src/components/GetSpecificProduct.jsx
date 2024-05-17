import { useGetProductByIdQuery } from "../app/service/dummyData";

export const GetSpecificProduct = () => {
	const { data, isError, isLoading } = useGetProductByIdQuery(10);

	if (isError) {
		return <h1>error</h1>;
	}

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h1>{data?.brand}</h1>
			<h1>{data?.category}</h1>
			<h1>{data?.description}</h1>
		</div>
	);
};
