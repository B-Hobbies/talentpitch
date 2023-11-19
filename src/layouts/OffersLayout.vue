<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import Card from '@/components/Card.vue'
import { Controller } from 'swiper/modules';
import { onMounted, ref } from 'vue'
import { getOffers } from '@/api'

const offers = ref([])
const controlledSwiper = ref(null);
const controlledSwiperTwo = ref(null);

const getOffersFromApi = async () => {
  offers.value = await getOffers()
}

const setControlledSwiper = (swiper) => {
  controlledSwiper.value = swiper;
}

const setControlledSwiperTwo = (swiper) => {
  controlledSwiperTwo.value = swiper;
}

onMounted(async () => {
  getOffersFromApi()
})
</script>
<template>
  <div v-if="offers.length">
    <span class="offers--title">Publicadas recientemente</span>
    <section v-if="offers.length > 0" class="offers--swiper">
      <button @click="controlledSwiper.slidePrev()" class="offers--next">
        <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
      </button>
      <swiper :modules="[Controller]" @swiper="setControlledSwiper" :slides-per-view="3" :space-between="16">
        <swiper-slide v-for="(offer, index) in offers" :key="index">
          <Card :name="offer.name" :companyName="offer.company_name" :description="offer.description" :image="offer.image" />
        </swiper-slide>
        <swiper-slide v-for="(offer, index) in offers" :key="index">
          <Card :name="offer.name" :companyName="offer.company_name" :description="offer.description" :image="offer.image" />
        </swiper-slide>
      </swiper>
      <button @click="controlledSwiper.slideNext()" class="offers--prev">
        <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
      </button>
    </section>
    <span class="offers--title offers--title-second">Publicadas recientemente</span>
    <section v-if="offers.length > 0" class="offers--swiper">
      <button @click="controlledSwiperTwo.slidePrev()" class="offers--next">
        <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
      </button>
      <swiper :modules="[Controller]" @swiper="setControlledSwiperTwo" :slides-per-view="3" :space-between="16">
        <swiper-slide v-for="(offer, index) in offers" :key="index">
          <Card :name="offer.name" :companyName="offer.company_name" :description="offer.description" :image="offer.image" />
        </swiper-slide>
        <swiper-slide v-for="(offer, index) in offers" :key="index">
          <Card :name="offer.name" :companyName="offer.company_name" :description="offer.description" :image="offer.image" />
        </swiper-slide>
      </swiper>
      <button @click="controlledSwiperTwo.slideNext()" class="offers--prev">
        <img src="@/assets/offers/arrow.svg" alt="Arrow logo">
      </button>
    </section>
  </div>
  <div class="loader--container" v-else>
    <div class="loader"></div>
  </div>
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
  margin-top: 40px;
}

.swiper {
  width: 100%;
}

.offers--swiper {
  width: 100%;
  overflow: hidden;
  display: flex;
}

.swiper-slide {
  width: 237.5px !important;
}
</style>
