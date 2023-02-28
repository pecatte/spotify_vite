import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import AlbumsView from '../views/AlbumsView.vue'
import ArtistsView from '../views/ArtistsView.vue'
import AlbumDetailView from '../views/AlbumDetailView.vue'

// === définition des routes de l'application
// --- principalement les items du menu
// --- mais aussi des navigations internes comme 'master/detail'

// !!! important : la navigation doit se faire entre des "views" qui ne gèrent que l'affichage
// !!!  le code fonctionnel doit être uniquement dans les 'components'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsView
    },
    {
      path: '/artists',
      name: 'artists',
      component: ArtistsView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/detail/:idAlbum',
      name: 'detail',
      component: AlbumDetailView
    }
  ]
})

export default router
