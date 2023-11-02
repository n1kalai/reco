import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../services/getData";
import { App } from "../../types/AppType";

type CounterStateType = {
	isLoading: boolean;
	isError: boolean;
	data: {
		appRows: App[];
		totalCount: number;
	};
};

const initialState: CounterStateType = {
	isLoading: true,
	isError: false,
	data: {
		appRows: [],
		totalCount: 0,
	},
};

export const getUsersThunk = createAsyncThunk("users/getUsers", getData);

const counterSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getUsersThunk.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload; // change
			})
			.addCase(getUsersThunk.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
				state.data = initialState.data;
			});
	},
});

export default counterSlice.reducer;
