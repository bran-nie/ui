import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';

const routes = [{
	  meta: {title: '按钮',},
	  name: 'Button',
	  path: '/components/Button',
	  component: () => import('packages/Button/docs/README.md'),
	},{
	  meta: {title: '鹏程',},
	  name: 'Bran',
	  path: '/components/Bran',
	  component: () => import('packages/Bran/docs/README.md'),
	},{
	  meta: {title: '输入框',},
	  name: 'Input',
	  path: '/components/Input',
	  component: () => import('packages/Input/docs/README.md'),
	},{
	  meta: {title: '你好',},
	  name: 'Hello',
	  path: '/components/Hello',
	  component: () => import('packages/Hello/docs/README.md'),
	},{
	  meta: {title: '张泽佳',},
	  name: 'Zzj',
	  path: '/components/Zzj',
	  component: () => import('packages/Zzj/docs/README.md'),
	},{
	  meta: {title: '选择器',},
	  name: 'Select',
	  path: '/components/Select',
	  component: () => import('packages/Select/docs/README.md'),
	},{
	  meta: {title: '闪剪',},
	  name: 'BoltCut',
	  path: '/components/BoltCut',
	  component: () => import('packages/BoltCut/docs/README.md'),
	},{
	  meta: {title: '帅气',},
	  name: 'Tk',
	  path: '/components/Tk',
	  component: () => import('packages/Tk/docs/README.md'),
	}];
 
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
