import { createRouter, createWebHistory } from 'vue-router';
import CreateReservation from './components/CreateReservation.vue';
import ConsultReservation from './components/ConsultReservation.vue';
import UpdateReservation from './components/UpdateReservation.vue';

const routes = [
  {
    path: '/',
    alias: '/create-reservation',
    name: 'create-reservation',
    component: CreateReservation
  },
  {
    path: '/consult-reservation',
    alias: '/consult-reservation',
    name: 'consult-reservation',
    component: ConsultReservation
  },
  {
    path: '/update-reservation/:id',
    alias: '/update-reservation',
    name: 'update-reservation',
    component: UpdateReservation
  },
  {
    path: '/get-reservation/:id',
    alias: '/get-reservation',
    name: 'update-reservation',
    component: UpdateReservation
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;