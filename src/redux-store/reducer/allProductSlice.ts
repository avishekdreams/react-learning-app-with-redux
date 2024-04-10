import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { AllProductStateInterface } from "../../interface/redux-state/AllProductStateInterface";

interface SearchState {
	searchValue: String;
}

const initialSearchState: SearchState = {
	searchValue: "",
}

interface ExtendedAllProductStateInterface extends AllProductStateInterface, SearchState {}

const initialState: ExtendedAllProductStateInterface = {
	products: [],
	isLoading: false,
	isSuccessful: false,
	error: {},
	...initialSearchState,
}

export const allProductSlice = createSlice({
	name: 'allProduct',
	initialState,
	reducers: {
		getAllProductRequestAction: (state: any) => {
			state.isLoading = true;
		},
		getAllProductSuccessAction: (state: any, action: PayloadAction<[]>) => {
			state.products = action.payload
			state.isLoading = false;
			state.isSuccessful = true
		},
		getAllProductFailedAction: (state: any, action: PayloadAction<{}>) => {
			state.isSuccessful = false
			state.result = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload
		}
	},
})

export const {
	getAllProductRequestAction,
	getAllProductSuccessAction,
	getAllProductFailedAction,
	setSearchValue
} = allProductSlice.actions

export default allProductSlice.reducer