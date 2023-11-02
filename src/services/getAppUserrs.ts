export const getAppUsers = async (appId: string) => {
	try {
		const response = await fetch(
			`/api/v1/app-service/get-app-overview-users/${appId}`,
			{
				headers: {
					"ngrok-skip-browser-warning": "69420",
					"Content-Type": "application/json",
				},
			}
		);
		const data = await response.json();
		return { appId, data: data.appUsers };
	} catch (error) {
		return { appId, data: [] };
	}
};
