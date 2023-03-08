import { App, Plugin } from 'vue';
import Bran from './src/index.vue';

export const BranPlugin: Plugin = {
  install(app: App) {
    app.component('x-bran', Bran);
  },
};

export {
  Bran,
};
