# Talent Pitch

## Tabla de contenidos

1. [Informacion](#información)
2. [Tecnologias](#tecnologías)
3. [Ejecución](#ejecución)

## Información

Este proyecto está creado con el framework Vue/Vite, para poder visualizar correctamente los diseños pixel to pixel, debe cargar el aplicativo sobre una pantalla superior a 1440px de ancho.


Estoy implementando:

Variables de CSS sacadas desde figma para un mejor mantenimiento o implementaciones de modos oscuros.

Implementación de Github Actions para hacer un deploy automático sobre los cambios de la rama main sobre Github Pages implementando un Hash Routing "ya que las rutas son manejadas desde el cliente" e imágenes dinámicas "sobre los componentes que usan iconos".

Implementación de rutas independientes para el manejo de ofertas y empresas.

Menú de "Perfil, Vanantes, Listas" funcional, cambia sus estilos según la ruta actual.

Implementación de Vuex con módulos independientes, se hace implementación del root state para la información general de la aplicación "header, estrellas, menú, panel izquierdo", así como módulos para manipulación del estado de ofertas y empresas con sus propias implementaciones, [Vuex](https://vuex.vuejs.org/installation.html#direct-download-cdn) 

Implementación sobre las estrellas para definir el status del perfil.

Implementación de la librería swiper para manejo de slides, los slides se llenan con la información del end point dado en la documentación, su llamado se hace con la API nativa de fetch para evitar dependencias extras.

Conventional commits para crear los commits. [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

Git Flow para crear una estrategia de ramas. [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/).

Semver para crear el versionamiento. [Semver](https://semver.org/).

Tailwind para los estilos "Solo instalado y configurado, no se ha implementado aún". [Tailwind CSS](https://tailwindcss.com/docs/guides/vite#vue)

## Tecnologías

Lista de tecnologías usadas en el proyecto

- [Node JS](https://nodejs.org/en/): Version v20.9.0
- [Vue](https://vuejs.org/guide/introduction.html): Version 3.3.4
- [Vuex](https://vuex.vuejs.org/installation.html#direct-download-cdn): Version 4.0.2
- [Tailwind](https://tailwindcss.com/docs/guides/vite#vue): Version 3.3.5
- [Vue Router](https://router.vuejs.org/): Version 4.2.5


## Ejecución

Una pequeña intro sobre la instalación.

1. Clone el repositorio: `git clone https://github.com/M8-Babbage/Talentpitch`
2. Entre en la carpeta Talentpitch: `cd Talentpitch`
3. Instale las dependencias: `npm install`.
4. Ejecute en modo desarrollo: `npm run dev`