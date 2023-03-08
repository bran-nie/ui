import { App, Plugin } from 'vue';
import Hello from './src/index';

export const HelloPlugin: Plugin = {
    install(app: App) {
        app.component('x-hello', Hello);
    },
};

export { Hello };
