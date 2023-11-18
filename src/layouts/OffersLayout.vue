<script setup>
import Card from '@/components/Card.vue'
import { onMounted,  ref } from 'vue'
import { getOffers } from '@/api'

const offers = ref([])

const getOffersFromApi = async () => {
  offers.value = await getOffers()
}

onMounted(async () => {
  getOffersFromApi()
})
</script>

<template>
  <span class="offers--title">Publicadas recientemente</span>
  <!-- <Card v-if="offers[0]" :image="offers[0].image" /> -->
  <section class="offers--swiper">

  </section>
</template>
<style scoped>
.offers--title {
  color: var(--principales-primary-primary-1);
  font-family: 'Roboto';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  letter-spacing: 0.5px;
  margin-bottom: 16px;
}

.offers--swiper {
  width: 100%;
}
</style>
