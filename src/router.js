import Vue from 'vue';
import Router from 'vue-router';

import CharacterView from '@/views/CharacterView';
import EpisodeView from '@/views/EpisodeView';

Vue.use(Router);

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'character',
      component: CharacterView
    },
    {
      path:'/episode',
      name: 'episode',
      component: EpisodeView,
      props: true
    }
  ]
});
