<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

const store = useStore();

const resumen = computed(() => store.getters['company/resumen'])
</script>

<template>
  <section class="resumen">
    <div class="resumen--title">
      <figure>
        <img src="@/assets/company/user.svg" alt="User logo">
      </figure>
      <h1>Resumen de la empresa</h1>
    </div>
    <span class="resumen--label">{{ resumen[0].name }}</span>
    <span class="resumen--description">{{ resumen[0].value }}</span>
    <div class="resumen--content">
      <div>
        <span class="resumen--label">{{ resumen[1].name }}</span>
        <span class="resumen--description">{{ resumen[1].value }}</span>
      </div>
      <div>
        <span class="resumen--label">{{ resumen[2].name }}</span>
        <span class="resumen--description">{{ resumen[2].value }}</span>
      </div>
    </div>
    <div class="resumen--content">
      <div>
        <span class="resumen--label">{{ resumen[3].name }}</span>
        <span class="resumen--description">{{ resumen[3].value }}</span>
      </div>
      <div>
        <span class="resumen--label">{{ resumen[4].name }}</span>
        <span class="resumen--description">{{ resumen[4].value }}</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
.resumen {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3);
  padding: 16px;
}

.resumen--title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
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

.resumen--content {
  display: flex;
}

.resumen--content div {
  flex: 1;

}

.resumen--label {
  color: var(--colores-semnticos-gray-gray-1);
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.5px;
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
}

.resumen--description {
  color: var(--colores-semnticos-gray-gray-2);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}
</style>
