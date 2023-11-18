<script setup>
import Resumen from '@/components/Resumen.vue'
import Category from '@/components/Category.vue'
</script>

<template>
  <Resumen />
  <section class="company company--one">
    <Category icon="pointer" :tags="3">Áreas de interés</Category>
    <Category icon="head" :tags="3">Vacantes sugeridas por AI</Category>
  </section>
</template>
<style scoped>
.company {
  width: 100%;
  display: flex;
  gap: 16px;
}

.company--one {
  margin-top: 16px;
}

.company {}
</style>
