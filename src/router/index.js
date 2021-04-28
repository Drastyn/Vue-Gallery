import Vue from 'vue';
import VueRouter from 'vue-router';
//import store from '../store';
import ImagesIndex from '../views/images/Index';
import ImagesNew from '../views/images/New';
import ImagesShow from '../views/images/Show';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'images_path', component: ImagesIndex, },
    {path: '/imagenes/nueva', name: 'new_image_path', component: ImagesNew, },
    {path: '/imagenes/:token', name: 'show_image_path', component: ImagesShow, },
  ],
});

export default router;