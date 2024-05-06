import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Accueil from './components/Accueil.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import Galerie from './components/Galerie.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/prestations', component: App },
  { name: 'galerie', path: '/galerie/:basefilter?', component: Galerie },
  { path: '/contact', component: App },
  { path: '/partenaires', component: App },
  { name: 'project-details', path : '/project-details/:id', component: ProjectDetails }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})