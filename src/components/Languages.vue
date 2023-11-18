<script setup>
import language from '@/assets/company/language.svg'

const props = defineProps({
  languages: {
    type: Object,
    default: []
  },
})

const urlIcon = new URL(language, import.meta.url).href
</script>
<template>
  <div class="category">
    <div class="resumen--title">
      <figure>
        <img :src="urlIcon" alt="Category logo">
      </figure>
      <h1>
        <slot />
      </h1>
    </div>
    <div class="category--languages">
      <div class="category--item" v-for="item of languages">
        <span class="category--name">{{ item.name }}</span>
        <span class="category--level">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.category {
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3);
}

.resumen--title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.resumen--title figure {
  padding: 4px 5px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  background: var(--colores-semnticos-gray-gray-4);
}

.resumen--title h1 {
  color: var(--principales-primary-primary-1);
  text-align: center;
  font-family: 'Inter';
  font-size: 17px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.5px;
}

.category--item {
  display: flex;
  flex-direction: column;
  width: 115px;
}

.category--languages {
  display: flex;
  align-items: center;
}

.category--name {
  color: var(--colores-semnticos-gray-gray-1);
  font-family: 'Inter';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.5px;
}

.category--level {
  color: var(--colores-semnticos-gray-gray-3);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}
</style>
