<script setup>
import Button from '@/components/Button.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const items = computed(() => store.getters.headerItems)

const onButton = () => {
  console.log('onButton')
}

const onEmail = () => {
  console.log('onEmail')
}

const onBell = () => {
  console.log('onBell')
}

const onUser = () => {
  console.log('onUser')
}

const onLogo = () => {
  console.log('onLogo')
}
</script>

<template>
  <header class="header">
    <div class="header--logo">
      <img @click="onLogo" src="@/assets/header/logo.svg" alt="TalentPitch Logo" />
    </div>
    <ul class="header--items">
      <RouterLink v-for="item of items" :to="item.route">{{ item.name }}</RouterLink>
    </ul>
    <div class="header--options">
      <Button @click="onButton" type="primary" icon="more">Comenzar</Button>
      <!-- <Button type="primary" icon="share" :isLeft="true" size="big">Comenzar</Button> -->
      <!-- <Button type="primary" size="small">Comenzar</Button> -->
      <!-- <Button type="secondary" icon="follow">Comenzar</Button> -->
      <img @click="onEmail()" src="@/assets/header/email.svg" alt="Email Logo" />
      <img @click="onBell()" src="@/assets/header/bell.svg" alt="Bell Logo" />
      <img @click="onUser()" src="@/assets/header/user.svg" alt="User Logo" />
      <img @click="onUser()" class="header--arrow" src="@/assets/header/arrow.svg" alt="Arrow Logo" />
    </div>
  </header>
</template>
<style scoped>
.header {
  width: 100%;
  max-width: 1440px;
  background: var(--principales-primary-primary-1);
  height: 85px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.header--logo {
  cursor: pointer;
}

.header--items a {
  color: var(--principales-primary-primary-3);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-right: 24px;
}

.header--options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.header--options img {
  cursor: pointer;
}

.header--arrow {
  margin-left: -20px;
}
</style>
