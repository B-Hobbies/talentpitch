<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useStore()

const menu = computed(() => store.getters['menu'])
const currentRoute = computed(() => route.path)

const changeStylesWhenRouteChange = () => {
  const path = currentRoute.value.replace('/', '')
  menu.value.forEach(element => {
    const current = element.path.replace('/', '')
    if (!current) return
    if (current === path) {
      element.active = true
    } else {
      element.active = false
    }
  });
}

onMounted(() => {
  changeStylesWhenRouteChange()
})

const changeStyles = (index) => {
  router.push(menu.value[index].path)
}
</script>

<template>
  <ul class="menu">
    <li v-bind:class="{ menuItemActive: item.active }" @click="changeStyles(index)" v-for="(item, index) in menu"
      class="menu--item">{{ item.name }}</li>
  </ul>
</template>
<style scoped>
.menu {
  width: 100%;
  height: 52px;
  display: flex;
  border-bottom: 1px solid var(--principales-primary-primary-3);
}

.menu--item {
  display: block;
  padding: 16px;
  color: var(--principales-primary-primary-2);
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.5px;
  cursor: pointer;
}

.menu--item.menuItemActive {
  color: var(--principales-secondary-secondary-1);
  border-bottom: 2px solid var(--principales-secondary-secondary-1);
}
</style>
