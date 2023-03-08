import { App, Plugin } from 'vue';
import Zzj from './src/index.vue';

export const ZzjPlugin: Plugin = {
  install(app: App) {
    app.component('x-zzj', Zzj);
  },
};

export {
  Zzj,
};
