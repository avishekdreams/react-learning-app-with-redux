// WHEN USING BUTTONS AND SUBMITTING

// import { useRef } from "react";
// import { useDispatch } from 'react-redux';
// import { setSearchValue } from '../../redux-store/reducer/allProductSlice';

// export function HeaderComponent() {
// 	const dispatch = useDispatch();
// 	const searchedValue = useRef<HTMLInputElement>(null);

// 	const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
// 		e.preventDefault();
// 		if (searchedValue.current?.value) {
// 			dispatch(setSearchValue(searchedValue.current?.value));
// 		} else {
// 			dispatch(setSearchValue(""));
// 		}
// 	};

// 	return (<>
// 		<div className="flex justify-between items-center h-10 bg-cyan-600 px-5 py-10">
// 			Header
// 			<div className="flex items-center">
// 				<input type="text" placeholder="Enter to search items" className="px-4 py-2 mr-2" ref={searchedValue} />
// 				<button className="bg-green-500 text-white px-4 py-2 rounded mr-5" onClick={handleSearch}>Search</button>
// 			</div>
// 		</div>
// 	</>)
// }

// export default HeaderComponent;
/**----------------------------------------------------------------------------------------------------------------------- */

// WHEN USING ONCHANGE METHOD DIRECTLY

import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux-store/reducer/allProductSlice';

export function HeaderComponent() {
	const dispatch = useDispatch();
	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setSearchValue(e.target.value));
  };

	return (<>
		<div className="flex justify-between items-center h-10 bg-cyan-600 px-5 py-10">
			Header
			<div className="flex items-center">
				<input type="text" placeholder="Enter to search items" className="px-4 py-2 mr-2" onChange={handleSearch} />
			</div>
		</div>
	</>)
}

export default HeaderComponent;