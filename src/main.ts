import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './router'
import PrimeVue from 'primevue/config';
// @ts-ignore
import Lara from '@/presets/lara';
import 'primeicons/primeicons.css'
import { MotionPlugin } from '@vueuse/motion'
import { createPinia } from 'pinia'

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(PrimeVue, {
        unstyled: true,
        pt: Lara   
    })
    .use(MotionPlugin, {
        directives: {
          'slide-up': {
            initial: {
              // scale: 0.8,
              opacity: 0,
              y: 100,
              rotateX: '75deg',
            },
            visibleOnce: {
              // scale: 1,
              opacity: 1,
              y: 0,
              rotateX: '0deg',
              transition: {
                type: 'spring',
                stiffness: 50,
                damping: 12,
                mass: 0.5,
            },
            },
          },
          'hover-scale': {
            initial: {
                scale: 1,
              },
              hover: {
                scale: 1.2,
              },
          },
        },
      })
    .use(pinia)
    .mount('#app')