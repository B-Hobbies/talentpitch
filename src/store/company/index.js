export default {
  namespaced: true,
  state: () => ({
    resumen: [
      { name: 'Descripción', value: 'En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo ' },
      { name: 'Correo electrónico', value: 'ejemplo@ejemplo.com' },
      { name: 'Número de contacto', value: '3005895648' },
      { name: 'Estados deseados buscados', value: 'Emprendedor, practicas, primer empleo ' },
      { name: 'Rol más buscado', value: 'Lider UX' },
    ],
    categories: [
      { name: 'Áreas de interés', icon: 'pointer', tags: 3},
      { name: 'Vacantes sugeridas por AI', icon: 'head', tags: 3},
      { name: 'Conocimientos', icon: 'brain', tags: 8},
      { name: 'Habilidades', icon: 'paperclip', tags: 8},
      { name: 'Herramientas', icon: 'tools', tags: 8},
      { name: 'Metodologías', icon: 'list', tags: 4},
      { name: 'Beneficios que ofrecemos', icon: 'badge', tags: 8},
      { name: 'Formas de trabajo que ofrecemos ', icon: 'briefcase', tags: 8},
      { name: 'Cultura que ofrecemos', icon: 'comments', tags: 4},
      { name: 'Comunidades', icon: 'users', tags: 4},
    ],
    languages: [
      { name: 'Ingles', value: 'Avanzado' },
      { name: 'Francés', value: 'Avanzado' },
      { name: 'Francés', value: 'Avanzado' },
    ]
  }),
  getters: {
    resumen: (state) => [...state.resumen],
    categories: (state) => [...state.categories],
    languages: (state) => [...state.languages],
  },
  actions: {},
  mutations: {}
}
