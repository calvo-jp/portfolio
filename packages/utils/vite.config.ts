import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		ssr: true,
		lib: {
			name: 'index',
			entry: resolve(__dirname, 'src/index.ts'),
			formats: ['cjs', 'es'],
		},
	},
	plugins: [dts()],
});
