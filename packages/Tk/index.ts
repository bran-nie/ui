import { App, Plugin } from 'vue';
import Tk from './src/index.vue';

export const TkPlugin: Plugin = {
  install(app: App) {
    app.component('x-tk', Tk);
  },
};

export {
  Tk,
};
