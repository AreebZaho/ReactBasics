import AllProducts from "./components/AllProducts";
import GetSpecificProduct from "./components/GetSpecificProduct";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";

const App = () => {
	return (
		<div>
			<AllProducts />
			<GetSpecificProduct />
			<AddNewProduct />
			<UpdateProduct productId={4} />
			<DeleteProduct productId={2} />
		</div>
	);
};

export default App;
