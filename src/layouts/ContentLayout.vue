<script setup>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Profile from '@/components/Profile.vue'
</script>
<template>
  <Header />
  <Banner />
  <main class="main">
    <Profile />
  </main>
</template>
<style scoped>
.main {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 141px 0 141px;
}
</style>

