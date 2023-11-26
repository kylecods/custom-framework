import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    source: {
        entry: {
          cust: './src/framework/runtime/src/index.js',
        },
    }
});
