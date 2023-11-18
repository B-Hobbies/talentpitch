<script setup>
import { toRefs } from 'vue'

import more from '@/assets/button/more.svg'
import share from '@/assets/button/share.svg'
import follow from '@/assets/button/follow.svg'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  isLeft: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'medium'
  },
  type: {
    type: String,
    default: 'primary'
  }
})

const { icon, isLeft, size, type } = toRefs(props)

const icons = {
  more,
  share,
  follow
}

const urlIcon = new URL(icons[icon.value], import.meta.url).href

</script>

<template>
  <button v-bind:class="{
    left: isLeft,
    small: size === 'small',
    medium: size === 'medium',
    big: size === 'big',
    secondary: type !== 'primary'
  }">
    <slot />
    <img v-if="icon" :src="urlIcon" alt="Button logo" />
  </button>
</template>
<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--principales-secondary-secondary-3, #fffbfc);
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: 0.5px;
  border-radius: 5px;
  background: var(--principales-secondary-secondary-1, #de1c7d);
  padding: 5px 12px;
}

.left {
  flex-direction: row-reverse;
}

.small {
  font-size: 11px;
}

.medium {
  padding: 8px 12px;
}

.big {
  padding: 8px 12px;
  width: 100%;
}

.secondary {
  flex-direction: row-reverse;
  background-color: transparent;
  color: var(--principales-secondary-secondary-1);
  border: 1.2px solid var(--principales-secondary-secondary-1);
  padding: 8px 12px;
}
</style>
