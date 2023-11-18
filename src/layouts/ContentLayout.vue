<script setup>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Profile from '@/components/Profile.vue'
import Status from '@/components/Status.vue'
</script>
<template>
  <Header />
  <Banner />
  <main class="main">
    <Profile />
    <section class="content">
      <Status />
    </section>
  </main>
</template>
<style scoped>
.main {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 141px 0 141px;
  display: flex;
}

.content {
  width: 100%;
  margin-bottom: 80px;
}
</style>

