import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';

const routes = [{{ routes }}];
 
const routerConfig: RouterOptions = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
	if (to.path !== from.path) {
	  return { top: 0 };
	}
  },
};

const router = createRouter(routerConfig);

export default router;
