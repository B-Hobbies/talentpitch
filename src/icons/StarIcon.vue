<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'
const store = useStore()
const stars = computed(() => store.getters['stars'])
const maxStars = 5;

const setColor = (item) => {
  if (item <= stars.value) {
    return '#FFD54F'
  } else {
    return '#FFF8E1'
  }
}
const setNewStars = (item) => {
  store.commit('setStars', item)
}
</script>
<template>
  <svg @click="setNewStars(item)" v-for="item of maxStars" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.30598 1.51599C7.56329 0.724062 8.68366 0.724062 8.94097 1.51599L10.1756 5.31589C10.2907 5.67005 10.6207 5.90983 10.9931 5.90983H14.9886C15.8213 5.90983 16.1675 6.97536 15.4938 7.4648L12.2614 9.81326C11.9602 10.0321 11.8341 10.4201 11.9492 10.7743L13.1838 14.5742C13.4411 15.3661 12.5348 16.0246 11.8611 15.5352L8.62871 13.1867C8.32745 12.9679 7.9195 12.9679 7.61823 13.1867L4.38585 15.5352C3.7122 16.0246 2.8058 15.3661 3.06312 14.5742L4.29778 10.7743C4.41285 10.4201 4.28679 10.0321 3.98552 9.81326L0.753136 7.4648C0.0794839 6.97536 0.425696 5.90983 1.25838 5.90983H5.25382C5.62621 5.90983 5.95624 5.67005 6.07132 5.31589L7.30598 1.51599Z"
      :fill="setColor(item)" />
  </svg>
</template>
<style scoped>
svg {
  cursor: pointer;
  margin-right: 5px;
}
</style>
