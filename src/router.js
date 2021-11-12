import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Inicio',
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "NotFound" */'./componentes/NotFound.vue') 
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "Inicio" */'./componentes/Inicio.vue')
  },
  {
    path: '/Entrada',
    name: 'Entrada',
    component: () => import(/* webpackChunkName: "Entrada" */'./componentes/Entrada.vue'),
    children: [
      {
        path: ':Articulo',
        name: 'Articulo',
        component: () => import(/* webpackChunkName: "Articulo" */'./componentes/Articulo.vue'),
      },
    ]
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    alias: ['/contactame'],
    component: () => import(/* webpackChunkName: "Contacto" */'./componentes/Contacto.vue'),
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    alias: ['/acerca'],
    component: () => import(/* webpackChunkName: "SobreMi" */'./componentes/SobreMi.vue'),
  },
  {
      path: '/Administrador',
      name: 'Administrador',
      component: () => import(/* webpackChunkName: "Administrador" */'./componentes/Administrador.vue'),
      children: [
        {
          path: '/Simple',
          name: 'AdministradorSimple',
          component: () => import(/* webpackChunkName: "AdministradorSimple" */'./componentes/Simple.vue') 
        },
        {
          path: '/Avanzado',
          name: 'AdministradorAvanzado',
          component: () => import(/* webpackChunkName: "AdministradorAvanzado" */'./componentes/Avanzado.vue') 
        },
      ]
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/inicio",
    redirect: "/"
  },
  {
    path: "/portada",
    redirect: "/"
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
