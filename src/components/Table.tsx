import { CSSProperties } from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAppUsersThunk } from "../store/slices/appUsers";

const tdStyles: CSSProperties = {
	width: "30%",
	textAlign: "left",
};

const Thead = () => (
	<thead>
		<tr>
			<td>Application Name</td>
			<td>Category</td>
			<td>Connectors</td>
		</tr>
	</thead>
);

export const Table = () => {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();
	return (
		<table>
			<Thead />
			<tbody>
				{users.data?.appRows?.map((user) => (
					<tr
						onClick={() => dispatch(getAppUsersThunk(user.appId))}
						style={{ cursor: "pointer", textAlign: "left" }}
						key={user.appId}
					>
						<td style={tdStyles}>{user.appName}</td>
						<td style={tdStyles}>{user.category}</td>
						<td style={tdStyles}>{user.appSources}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
