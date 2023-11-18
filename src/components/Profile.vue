<script setup>
import StarIcon from '../icons/StarIcon.vue'
import Button from '../components/Button.vue'
import Option from '../components/Option.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/reactivity';

const store = useStore()

const options = computed(() => store.getters['options'])

const download = () => {
  console.log('download')
}

const setFb = () => {
  console.log('FB')
}

const setIg = () => {
  console.log('Ig')
}

const setX = () => {
  console.log('X')
}

const setIn = () => {
  console.log('In')
}

const setImg = () => {
  console.log('Image')
}

const share = () => {
  console.log('share')
}

const setOption = (item) => {
  console.log('Option: ', item)
}
</script>

<template>
  <aside class="aside">
    <section class="aside--photo">
      <span>AC</span>
    </section>
    <span class="aside--name">A.C. Telecom</span>
    <span class="aside--hash">@ac-telecom</span>
    <span class="aside--tech">Startup - tecnología</span>
    <section class="aside--active">
      <div></div>
      <span>Empresa activa</span>
    </section>
    <section class="aside--city">
      <img src="@/assets/profile/marker.svg" alt="Marker Logo" />
      <span>Floridablanca - Colombia</span>
    </section>
    <section class="aside--stars">
      <StarIcon />
      <span>(10 Reviews)</span>
    </section>
    <section class="aside--social">
      <img @click="setFb" src="@/assets/profile/facebook.svg" alt="Facebook Logo" />
      <img @click="setIg" src="@/assets/profile/instagram.svg" alt="Instagram Logo" />
      <img @click="setX" src="@/assets/profile/x.svg" alt="X Logo" />
      <img @click="setIn" src="@/assets/profile/linkedin.svg" alt="Linkedin Logo" />
    </section>
    <section class="aside--links">
      <img src="@/assets/profile/link.svg" alt="Link Logo" />
      <a href="https://www.actelecom.net/teleco">https://www.actelecom.net/telecom</a>
    </section>
    <section class="aside--video">
      <img @click="setImg" src="@/assets/profile/foto.png" alt="Photo" />
    </section>
    <section class="aside--qr">
      <img src="@/assets/profile/qr.png" alt="QR Code" />
    </section>
    <section class="aside--profile">
      <Button @click="share" type="primary" icon="share" :isLeft="true" size="big">Compartir perfil</Button>
    </section>
    <section class="aside--cv">
      <button @click="download">
        <div>
          <img src="@/assets/profile/cv.svg" alt="QR Code" />
        </div>
        <span>Descargar resumen</span>
      </button>
    </section>
    <Option @click="setOption(index)" v-for="(item, index) in options" :icon="item.icon" :status="item.status">{{ item.value }}</Option>
  </aside>
</template>
<style scoped>
.aside {
  position: relative;
  width: 100%;
  min-width: 336px;
  max-width: 336px;
  padding: 32px 24px 16px 24px;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3, );
  background: #fff;
  margin-top: -150px;
  z-index: 10px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
}

.aside--photo {
  width: 170px;
  height: 170px;
  border-radius: 185px;
  background: var(--principales-primary-primary-3);
  display: grid;
  place-items: center;
  margin-bottom: 16px;
}

.aside--photo span {
  display: block;
  width: max-content;
  color: var(--principales-primary-primary-1, #1a237e);
  font-size: 80px;
  font-weight: 700;
  letter-spacing: -12px;
}

.aside--name {
  color: var(--principales-primary-primary-1, #1a237e);
  font-family: 'Inter';
  font-size: 24px;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.aside--hash {
  color: var(--colores-semnticos-gray-gray-2, #666);
  text-align: center;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.aside--tech {
  color: var(--principales-primary-primary-2, #9fa8da);
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.aside--active,
.aside--city {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 11px;
}

.aside--active span {
  color: var(--principales-success-succes-1, #8bc34a);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}

.aside--active div {
  padding: 5px;
  border-radius: 50%;
  margin-right: 5px;
  border-radius: 24px;
  background: var(--principales-success-succes-1, #8bc34a);
}

.aside--city img {
  margin-right: 5px;
}

.aside--city span {
  color: var(--colores-semnticos-gray-gray-2, #666);
  text-align: center;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}

.aside--stars {
  display: flex;
}

.aside--stars span {
  color: var(--colores-semnticos-gray-gray-2);
  text-align: center;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-left: 5px;
  margin-bottom: 11px;
}

.aside--social {
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
}

.aside--social img {
  cursor: pointer;
}

.aside--links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.aside--links a {
  color: var(--principales-secondary-secondary-1);
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-left: 4px;
  cursor: pointer;
}

.aside--links a:hover {
  text-decoration: underline;
}

.aside--video {
  border-radius: 10px;
  margin-bottom: 16px;
}

.aside--video img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.aside--qr {
  display: grid;
  place-items: center;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3, #E8EAF6);
  background: #FFF;
  padding: 18px 28px;
  margin-bottom: 16px;
}

.aside--profile {
  width: 100%;
  margin-bottom: 16px;
}

.aside--cv {
  width: 100%;
}

.aside--cv button {
  width: 100%;
  display: flex;
  align-items: center;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--principales-primary-primary-3, #E8EAF6);
  margin-bottom: 16px;
}

.aside--cv button div {
  background: var(--principales-secondary-secondary-1, #DE1C7D);
  display: grid;
  border-radius: 8px;
  place-items: center;
  width: 44px;
  height: 44px;
}

.aside--cv button span {
  margin-left: 16px;
  color: var(--colores-semnticos-gray-gray-2);
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
}
</style>
