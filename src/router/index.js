import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Catalog from '@/views/Catalog.vue'
import Gallery from '@/views/Gallery.vue'

const routes = [
  { 
    path: '/', 
    component: Home 
  },

  { 
    path: '/catalog', 
    component: Catalog 
  },
  { 
    path: '/gallery', 
    component: Gallery 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router