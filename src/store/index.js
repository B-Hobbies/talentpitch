import { createStore } from 'vuex'
import offers from './offers'
import company from './company'

/**
 * Se importan los módulos del aplicativo, separados por funcionalidad
 */
export default createStore({
  state: {},
  getters: {},
  modules: {
    offers,
    company
  }
})
