import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Accueil from './components/Accueil/Accueil.vue'
import ProjectDetails from './components/ListProjects/ProjectDetails.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/prestations', component: App },
  { path: '/galerie', component: App },
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