import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProductRequestAction } from "../../../redux-store/reducer/allProductSlice";
import { ProductInfoInterface } from "../../../interface/ProductInfoInterface";

export function HomeComponent() {
	const allProductState = useSelector((state: any) => state.allProduct);
	const searchedValue = useSelector((state: any) => state.allProduct.searchValue);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProductRequestAction());
	}, [dispatch]);

	console.log(searchedValue);
	const filterProducts = allProductState.products.filter((product: ProductInfoInterface) => 
		product.title.toLowerCase().includes(searchedValue.toLowerCase())
	);

	return (<>
		<div className="grid grid-cols-3 gap-3 p-2">
			{filterProducts.map((item: ProductInfoInterface, index: number) => {
				return <div className="flex flex-col justify-center items-center hover:cursor-pointer border shadow"
					key={index}>
					<img className="h-65 w-60" alt="" src={item.image} />
					<span>{`PRICE: ${item.price}`}</span>
					<span>{item.title}</span>
				</div>
			})}
		</div>
	</>)
}

export default HomeComponent;