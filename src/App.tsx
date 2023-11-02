import { useEffect } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { getUsersThunk } from "./store/slices/users";
import { Modal } from "./components/Modal";

function App() {
	const dispatch = useAppDispatch();
	const users = useAppSelector((state) => state.users);

	const appId = useAppSelector((state) => state.appUsers.appId);

	console.log(users);

	useEffect(() => {
		dispatch(getUsersThunk());
	}, []);

	if (users.isLoading) {
		return <div>loading...</div>;
	}
	if (users.isError) {
		return <div>error</div>;
	}

	return (
		<>
			{appId && <Modal />}
			<Table />
		</>
	);
}

export default App;
