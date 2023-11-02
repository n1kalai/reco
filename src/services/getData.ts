import { App } from "../types/AppType";

export const getData = async (): Promise<{
	appRows: App[];
	totalCount: number;
}> => {
	try {
		const response = await fetch("/api/v1/app-service/get-apps", {
			method: "PUT",
			body: JSON.stringify({
				pageNumber: 0,
				pageSize: 25,
			}),
			headers: {
				"ngrok-skip-browser-warning": "69420",
				"Content-Type": "application/json",
			},
		});
		console.log(response);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return {
			appRows: [],
			totalCount: 0,
		};
	}
};
