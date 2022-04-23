import { createApp } from 'vue'
import { router } from '@src/router';
import template from '@src/app.html';

const app = createApp({
  name: 'app',
  mounted: () => document.dispatchEvent(new Event('render-event')),
  template
})

app.use(router);

app.mount('[data-app-container]');
