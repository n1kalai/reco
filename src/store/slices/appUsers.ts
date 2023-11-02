import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAppUsers } from "../../services/getAppUserrs";

type InitialState = {
	appId: string;
	data: Record<string, string[]>;
	isError: boolean;
	isLoadding: boolean;
};

const initialState: InitialState = {
	data: {},
	appId: "",
	isError: false,
	isLoadding: true,
};

export const getAppUsersThunk = createAsyncThunk("getAppUsers", getAppUsers);

const appOverviews = createSlice({
	name: "appOverviews",
	initialState,
	reducers: {
		closeModal: (state) => {
			state.appId = "";
			state.isError = false;
			state.isLoadding = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getAppUsersThunk.pending, (state, action) => {
			state.appId = action.meta.arg;
			state.isLoadding = true;
		});
		builder.addCase(getAppUsersThunk.fulfilled, (state, action) => {
			state.data[action.payload.appId] = action.payload.data;
			state.isLoadding = false;
		});
		builder.addCase(getAppUsersThunk.rejected, (state) => {
			state.appId = "";
			state.data = {};
			state.isError = true;
			state.isLoadding = false;
		});
	},
});

export const { closeModal } = appOverviews.actions;
export default appOverviews.reducer;
