<script setup>
import Tag from '@/components/Tag.vue'
import { toRefs } from 'vue'

import badge from '@/assets/company/badge.svg'
import brain from '@/assets/company/brain.svg'
import briefcase from '@/assets/company/briefcase.svg'
import comments from '@/assets/company/comments.svg'
import head from '@/assets/company/head.svg'
import language from '@/assets/company/language.svg'
import list from '@/assets/company/list.svg'
import paperclip from '@/assets/company/paperclip.svg'
import pointer from '@/assets/company/pointer.svg'
import tools from '@/assets/company/tools.svg'
import users from '@/assets/company/users.svg'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  tags: {
    type: Number,
    default: 0
  },
})

const { icon, tags } = toRefs(props)

const icons = {
  badge, brain, briefcase, comments, head, language, list, paperclip, pointer, tools, users
}

const urlIcon = new URL(icons[icon.value], import.meta.url).href
</script>
<template>
  <div class="category">
    <div class="resumen--title">
      <figure>
        <img :src="urlIcon" alt="Category logo">
      </figure>
      <h1>
        <slot />
      </h1>
    </div>
    <div class="category--tags">
      <Tag v-for="item of tags" />
    </div>
  </div>
</template>
<style scoped>
.category {
  width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3);
}

.resumen--title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.resumen--title figure {
  padding: 4px 5px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  background: var(--colores-semnticos-gray-gray-4);
}

.resumen--title h1 {
  color: var(--principales-primary-primary-1);
  text-align: center;
  font-family: 'Inter';
  font-size: 17px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.5px;
}

.category--tags {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 8px;
}
</style>
