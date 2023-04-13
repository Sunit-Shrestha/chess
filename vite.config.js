import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
	build: {
		outDir: "build",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				game: resolve(__dirname, "game.html"),
			},
		},
	},
});
