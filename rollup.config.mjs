import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

export default {
	input: './src/framework/runtime/src/index.js',
	output: [
        {
            file: './dist/roto-fwk.js',
            format: 'esm'
        },
        { file: "./dist/roto-fwk.min.js", 
            format: "esm", 
            plugins: [terser()] 
        }
    ],
    plugins: [commonjs()]
};