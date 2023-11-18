<script setup>
import { toRefs } from 'vue'
import eye from '@/assets/option/eye.svg'
import fileUser from '@/assets/option/fileUser.svg'
import photoVideo from '@/assets/option/photoVideo.svg'
import transporter from '@/assets/option/transporter.svg'
import users from '@/assets/option/users.svg'
import video from '@/assets/option/video.svg'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  status: {
    type: Number,
    default: 0
  }
})

const { icon, status } = toRefs(props)

const icons = {
  eye,
  fileUser,
  photoVideo,
  transporter,
  users,
  video
}

const urlIcon = new URL(icons[icon.value], import.meta.url).href

</script>

<template>
  <section class="option">
    <div>
      <img v-if="icon" :src="urlIcon" alt="Option logo" />
      <slot />
    </div>
    <span>{{ status }}</span>
  </section>
</template>
<style scoped>
.option {
  width: 100%;
  height: 56px;
  background: #FFFDFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--principales-primary-primary-3);
  cursor: pointer;
}

.option div {
  display: flex;
  align-items: center;
}

.option div img {
  margin-right: 4px;
}

.option div {
  color: var(--colores-semnticos-gray-gray-2);
  text-align: center;
  font-family: 'Inter';
  font-size: 9px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.option span {
  color: var(--colores-semnticos-gray-gray-2, #666);
  text-align: center;
  font-family: 'INter';
  font-size: 17px;
  font-weight: 700;
  line-height: 125%;
  letter-spacing: 0.5px;
}
</style>
