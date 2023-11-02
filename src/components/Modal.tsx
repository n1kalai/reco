import { CSSProperties } from "styled-components";
import { useAppSelector } from "../store/hooks";
import { useDispatch } from "react-redux";
import { closeModal } from "../store/slices/appUsers";

const modalStyle: CSSProperties = {
	position: "fixed",
	left: 0,
	right: 0,
	top: 0,
	height: "100vh",
	width: "100vw",
	backgroundColor: "white",
};

export const Modal = () => {
	const app = useAppSelector((state) => state.appUsers);
	const appUsers = app.data[app.appId];

	const dispatch = useDispatch();

	const appData = useAppSelector((state) => state.users.data.appRows).find(
		(app) => app.appId === app.appId
	);

	return (
		<div style={modalStyle}>
			{appData ? (
				<div style={{ padding: 150, borderBottom: "solid 1px black" }}>
					<div>
						<span>App name:</span>
						<span>{appData?.appName}</span>
					</div>
					<div>
						<span>category:</span>
						<span>{appData?.category}</span>
					</div>
					<div>
						<span>connector:</span>
						<span>{appData?.appSources}</span>
					</div>
					<div>
						<span>users</span>
						<span>{appUsers?.length || 0}</span>
					</div>

					<button onClick={() => dispatch(closeModal())}>Close modal</button>
				</div>
			) : (
				"Sorry, try later"
			)}
			<table>
				<thead>
					<tr>
						<td>firstname</td>
					</tr>
				</thead>
				<tbody>
					{app.isLoadding && (
						<tr>
							<td>loading...</td>
						</tr>
					)}
					{app.isError && (
						<tr>
							<td>try again later...</td>
						</tr>
					)}
					{appUsers?.length > 0 &&
						appUsers.map((user) => (
							<tr key={user}>
								<td
									style={{
										textAlign: "left",
										borderBottom: "solid 1px lightgray",
									}}
								>
									{user}
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};
