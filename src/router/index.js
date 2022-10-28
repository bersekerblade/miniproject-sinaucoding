import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

  //barang
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },

  //suplier dashboard
  {
    path: '/supplier',
    name: 'supplier',
    component: () => import('../views/SupplierView.vue')
  },

  {
    path: '/tambahsupplier',
    name: 'tambahsupplier',
    component: () => import('../views/CreateSupplierView.vue')
  },

  //barang update
  {
    path: '/update/:id',
    name: 'update',
    component: () => import('../views/UpdateView.vue')
  },

  //barang tambah
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateView.vue')
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
