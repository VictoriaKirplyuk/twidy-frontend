import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildOptions, BuildPaths} from "./config/build/types/config";
import path from "path";

const mode = "development";
const isDev = mode === "development"

const buildPaths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const buildOptions: BuildOptions = {
    mode: "development",
    paths: buildPaths,
    isDev,
}

const config: webpack.Configuration = buildWebpackConfig(buildOptions)
;

export default config;