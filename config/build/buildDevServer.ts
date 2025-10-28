import {BuildOptions} from './types/config';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    const {paths, port} = options;

    return {
        open: true,
        port,
    }
}