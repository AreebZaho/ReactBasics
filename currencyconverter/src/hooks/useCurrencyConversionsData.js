import {useState, useEffect} from "react";

//called whever {from} currency changes in App.jsx
const useConversionRates = (fromCurrency) => {
	const [conversionRates, setConversionRates] = useState({});
	useEffect(() => {
		fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
			.then((response) => response.json())
			.then((data) => setConversionRates(data.rates));
	}, [fromCurrency]); //effect executes whenever {from} currency changes and rates updated
	return conversionRates; //then returned
};

export default useConversionRates;
