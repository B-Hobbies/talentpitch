<script setup>
import Resumen from '@/components/Resumen.vue'
import Category from '@/components/Category.vue'
import Languages from '@/components/Languages.vue'
import { useStore } from 'vuex';
const store = useStore();

const languages = store.getters['company/languages']
const categories = store.getters['company/categories']
</script>

<template>
  <Resumen />
  <section class="company">
    <Category :icon="categories[0].icon" :tags="categories[0].tags">{{ categories[0].name }}</Category>
    <Category :icon="categories[1].icon" :tags="categories[1].tags">{{ categories[1].name }}</Category>
  </section>
  <section class="company--title">
    <span>Lo que buscamos en el talento</span>
    <div></div>
  </section>
  <section class="company">
    <Category :icon="categories[2].icon" :tags="categories[2].tags">{{ categories[2].name }}</Category>
    <Category :icon="categories[3].icon" :tags="categories[3].tags">{{ categories[3].name }}</Category>
  </section>
  <section class="company">
    <Category :icon="categories[4].icon" :tags="categories[4].tags">{{ categories[4].name }}</Category>
    <Languages :languages="languages">Idiomas</Languages>
  </section>
  <section class="company">
    <Category :icon="categories[5].icon" :tags="categories[5].tags">{{ categories[5].name }}</Category>
  </section>
  <section class="company--title">
    <span>Lo que ofrecemos en la empresa</span>
    <div></div>
  </section>
  <section class="company">
    <Category :icon="categories[6].icon" :tags="categories[6].tags">{{ categories[6].name }}</Category>
    <Category :icon="categories[7].icon" :tags="categories[7].tags">{{ categories[7].name }}</Category>
  </section>
  <section class="company">
    <Category :icon="categories[8].icon" :tags="categories[8].tags">{{ categories[8].name }}</Category>
    <Category :icon="categories[9].icon" :tags="categories[9].tags">{{ categories[9].name }}</Category>
  </section>
</template>
<style scoped>
.company {
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
}

.company--title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  margin-bottom: 24px;
}

.company--title span {
  display: block;
  width: max-content;
  color: var(--principales-primary-primary-1);
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.5px;
  min-width: max-content;
  margin-left: 16px;
  margin-right: 16px;
}

.company--title div {
  width: 100%;
  height: 1px;
  background: var(--principales-primary-primary-3);
}
</style>
