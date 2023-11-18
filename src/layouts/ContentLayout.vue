<script setup>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Profile from '@/components/Profile.vue'
import Status from '@/components/Status.vue'
import Menu from '@/components/Menu.vue'
import CompanyLayout from '@/layouts/CompanyLayout.vue'
import OffersLayout from '@/layouts/OffersLayout.vue'
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router'

const route = useRoute()
const currentRoute = computed(() => route.path.replace('/', ''))
</script>
<template>
  <Header />
  <Banner />
  <main class="main">
    <Profile />
    <section class="content">
      <Status />
      <Menu />
      <div v-if="currentRoute === 'company'" class="content--route">
        <CompanyLayout />
      </div>
      <div v-else class="content--route">
        <OffersLayout />
      </div>
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

.content--route {
  padding-top: 24px;
}
</style>

