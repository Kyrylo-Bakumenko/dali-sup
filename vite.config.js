/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

export default defineConfig({
  plugins: [
    eslint(),
    // new FaviconsWebpackPlugin('src/imgs/bird-favicon.png'),
    vitePluginFaviconsInject('src/imgs/bird-favicon.png'),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
