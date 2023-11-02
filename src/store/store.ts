import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/users";
import appUsers from "./slices/appUsers";

export const store = configureStore({
	reducer: {
		users: usersSlice,
		appUsers: appUsers,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
