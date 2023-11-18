import { createStore } from 'vuex'
import offers from './offers'
import company from './company'

/**
 * Se importan los módulos del aplicativo, separados por funcionalidad
 */
export default createStore({
  state: {
    headerItems: [
      { name: 'Conéctate', route: '/' },
      { name: 'Mi muro', route: '/' },
      { name: 'Mis listas', route: '/' },
      { name: 'Aprende', route: '/' }
    ],
    stars: 4,
    options: [
      { icon: 'users', value: 'TALENTOS', status: 20 },
      { icon: 'eye', value: 'VISTAS DEL PERFIL', status: 20 },
      { icon: 'video', value: 'PITCHES RECIBIDOS', status: 20 },
      { icon: 'transporter', value: 'EXHIBICIONES', status: 20 },
      { icon: 'fileUser', value: 'VACANTES', status: 20 },
      { icon: 'photoVideo', value: 'CONTENIDOS', status: 20 }
    ],
    menu: [
      { name: 'Perfil', path: '/company', active: false },
      { name: 'Vacantes', path: '/offers', active: false },
      { name: 'Listas', path: '/', active: false },
    ]
  },
  getters: {
    headerItems: (state) => [...state.headerItems],
    stars: (state) => state.stars,
    options: (state) => [...state.options],
    menu: (state) => [...state.menu],
  },
  mutations: {
    setStars: (state, payload) => {
      state.stars = payload
    }
  },
  modules: {
    offers,
    company
  }
})

