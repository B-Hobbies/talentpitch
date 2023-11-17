<script setup>
import ContentLayout from '@/layouts/ContentLayout.vue'
import { onMounted, reactive } from 'vue'
import { getOffers } from '@/api'

const offers = reactive({})

const getOffersFromApi = async () => {
  offers.value = await getOffers()
}

onMounted(async () => {
  getOffersFromApi()
})
</script>
<template>
  <ContentLayout />
</template>
<style scoped></style>

