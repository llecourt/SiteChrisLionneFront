import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Accueil from './components/Accueil.vue'
import ProjectDetails from './components/ProjectDetails.vue'
import Galerie from './components/Galerie.vue'
import Prestations from './components/Prestations.vue'
import MentionsLeg from './components/MentionsLeg.vue'
import LoginForm from './components/LoginForm.vue'
import Contact from './components/Contact.vue'
import NotFoundComponent from './components/NotFoundComponent.vue'

export const routesToShow = [
  { name: 'Accueil', path: '/', component: Accueil },
  { name: 'Prestations', path: '/prestations', component: Prestations },
  { name: 'Galerie', path: '/galerie/:basefilter?', component: Galerie },
  { name: 'Contact', path: '/contact', component: Contact },
]
export const routes = [
  ...routesToShow,
  { name: 'Projet', path : '/project/:id', component: ProjectDetails },
  { name: 'Mentions Légales', path: '/mentions-legales', component: MentionsLeg },
  // { name: 'Admin', path: '/admin', component: LoginForm },
  { name: '404', path: '/:pathMatch(.*)', component: NotFoundComponent }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})