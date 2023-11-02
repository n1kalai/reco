import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
// 	plugins: [react()],
// 	server: {
// 		proxy: {
// 			"/api": {
// 				target: "https://5474-83-24-150-181.ngrok-free.app",
// 				changeOrigin: true,
// 				rewrite: (path) => path.replace(/^\/api/, ""),
// 			},
// 		},
// 	},
// });

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3001,
		proxy: {
			"/api": {
				target: "https://5474-83-24-150-181.ngrok-free.app",
				changeOrigin: true,
				secure: false,
				// rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
