import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/markdown.css';

// import MakeX_ui from '../packages';
import Preview from './components/Preview.vue';

const app = createApp(App);
app.component('Preview', Preview);
// app.use(router).use(MakeX_ui).mount('#app');
app.use(router).mount('#app');
