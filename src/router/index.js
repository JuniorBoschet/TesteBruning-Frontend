import { createRouter, createWebHistory } from 'vue-router'
import RegistroView from '@/views/RegistroView.vue'
import ListaView from '@/views/ListaView.vue'
import EditarView from '@/views/EditarView.vue'

const routes = [
  {
    path: '/',
    name: 'Lista',
    component: ListaView
  },
  {
    path: '/registro',
    name: 'Registro',
    component: RegistroView
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: EditarView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
