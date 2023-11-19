<script setup>
import Button from '@/components/Button.vue'
import { toRefs } from 'vue'
import defaultImage from '@/assets/offers/default.png'

const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  companyName: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
})

const { image, name, companyName, description } = toRefs(props)

</script>

<template>
  <section class="card">
    <img class="card--image" :src="image || defaultImage" alt="Card image">
    <section class="card--expertice">
      <div>
        <span class="card--description">Experticia</span>
        <img src="@/assets/offers/stars.svg" alt="Stars">
      </div>
      <img src="@/assets/offers/share.svg" alt="Share icon">
    </section>
    <section class="card--content">
      <span class="card--one truncate">{{ name ?? 'Lider UX/UI' }}</span>
      <div class="card--tag truncate">Creada por organización: {{ companyName ?? 'Nombre' }}</div>
      <span class="card--two">¿Cómo podrías crear un plan de ejecución a seis meses desde tu área de
        conocimiento para generar valor en una organización?</span>
      <section class="card--marks">
        <div>
          <p>60</p>
          <span>Vistas</span>
        </div>
        <div>
          <p>30</p>
          <span>Comentarios</span>
        </div>
        <div>
          <p>41</p>
          <span>Pitches</span>
        </div>
      </section>
      <div class="card--separator"></div>
      <Button>Aplicar a vacante</Button>
    </section>
  </section>
</template>
<style scoped>
.card {
  width: 236px;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3);
  background: #FFF;
  overflow: hidden;
}

.card .card--image {
  width: 100%;
  height: 73px;
}

.card--expertice {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  background: var(--colores-semnticos-gray-gray-4);
}

.card--expertice div {
  display: flex;
  align-items: center;
}

.card--expertice div span {
  color: var(--colores-semnticos-gray-gray-2);
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-right: 8px;
}

.card--content {
  padding: 11px 12px 12px 12px;
}

.card--content .card--one {
  display: block;
  color: var(--principales-primary-primary-1);
  font-size: 16px;
  font-weight: 400;
  line-height: 162%;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
}
.card--content .card--two {
  display: block;
  height: 72px;
  color: var(--gray-gray-2, #666);
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.card--tag {
  height: 18px;
  border-radius: 10px;
  background: var(--colores-semnticos-info-info-3);
  color: var(--colores-semnticos-info-info-1);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  cursor: pointer;
  padding: 0 5px;
  margin-bottom: 8px;
}

.card--marks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  margin-bottom: 16px;
}

.card--marks div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.card--marks div span {
  color: var(--colores-semnticos-gray-gray-2);
  font-size: 11px;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: 0.5px;
}

.card--marks p {
  border-radius: 10px;
  background: var(--principales-secondary-secondary-2);
  width: 24px;
  height: 18px;
  color: var(--principales-secondary-secondary-3);
  color: var(--principales-secondary-secondary-3, #FFFBFC);
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}

.card--separator {
  width: 100%;
  height: 1px;
  background-color: var(--principales-primary-primary-3);
  margin-bottom: 16px;
}
</style>
