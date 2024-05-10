import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Accueil from './components/Accueil.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import Galerie from './components/Galerie.vue'
import Prestations from './components/Prestations.vue'
import MentionsLeg from './components/MentionsLeg.vue'

const routes = [
  { path: '/', component: Accueil },
  { path: '/prestations', component: Prestations },
  { name: 'galerie', path: '/galerie/:basefilter?', component: Galerie },
  { path: '/contact', component: App },
  { path: '/partenaires', component: App },
  { name: 'project-details', path : '/project-details/:id', component: ProjectDetails },
  { path: '/mentions-legales', component: MentionsLeg },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})