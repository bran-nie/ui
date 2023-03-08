import { App, Plugin } from 'vue';
import BoltCut from './src/index.vue';

export const BoltCutPlugin: Plugin = {
  install(app: App) {
    app.component('x-bolt-cut', BoltCut);
  },
};

export {
  BoltCut,
};
