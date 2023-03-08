import { App, Plugin } from 'vue';
import Button from './src/index.vue';

export const ButtonPlugin: Plugin = {
    install(app: App) {
        app.component('x-button', Button);
    },
};
export { Button };
