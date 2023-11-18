export default {
  namespaced: true,
  state: () => ({
    resumen: [
      { name: 'Descripción', value: 'En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo ' },
      { name: 'Correo electrónico', value: 'ejemplo@ejemplo.com' },
      { name: 'Número de contacto', value: '3005895648' },
      { name: 'Estados deseados buscados', value: 'Emprendedor, practicas, primer empleo ' },
      { name: 'Rol más buscado', value: 'Lider UX' },
    ]
  }),
  getters: {
    resumen: (state) => [...state.resumen]
  },
  actions: {},
  mutations: {}
}
