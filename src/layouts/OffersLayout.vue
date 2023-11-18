<script setup>
import Card from '@/components/Card.vue'
import { onMounted, ref } from 'vue'
import { getOffers } from '@/api'
import 'swiper/css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/vue';
// import { register } from "swiper/element/bundle";

// register();

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
  <section v-if="offers.length > 0" class="offers--swiper">
    <button @click="" class="offers--next">
      <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
    </button>
    <swiper :slides-per-view="3" :space-between="16" :initial-slide="1" :centered-slides="true">
      <swiper-slide v-for="(offer, index) in offers" :key="index">
        <Card :image="offer.image" />
      </swiper-slide>
    </swiper>
    <button @click="" class="offers--prev">
      <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
    </button>
  </section>
  <span class="offers--title offers--title-second">Publicadas recientemente</span>
  <section v-if="offers.length > 0" class="offers--swiper">
    <button @click="" class="offers--next">
      <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
    </button>
    <swiper :slides-per-view="3" :space-between="16" :initial-slide="1" :centered-slides="true">
      <swiper-slide v-for="(offer, index) in offers" :key="index">
        <Card :image="offer.image" />
      </swiper-slide>
    </swiper>
    <button @click="" class="offers--prev">
      <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
    </button>
  </section>
</template>
<style scoped>
.offers--title {
  display: block;
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
  overflow: hidden;
  display: flex;
}

.swiper-slide {
  width: 236px !important;
}

.offers--next,
.offers--prev {
  display: grid;
  place-items: center;
  width: 25px;
  border-radius: 0px 5px 5px 0px;
  background: var(--principales-primary-primary-3);
}

.offers--next {
  border-radius: 5px 0px 0px 5px;
  margin-right: 8px;
}

.offers--prev {
  margin-left: 8px;
}

.offers--prev img {
  transform: rotate(180deg);
}

.offers--title-second {
  margin-top: 16px;
}
</style>
