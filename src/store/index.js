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
      { name: 'Mis muros', route: '/' },
      { name: 'Mis listas', route: '/' },
      { name: 'Aprende', route: '/' }
    ]
  },
  getters: {
    headerItems: (state) => state.headerItems
  },
  modules: {
    offers,
    company
  }
})

