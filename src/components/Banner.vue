<script setup>
const editBanner = () => {
  console.log('Edit banner')
}
</script>

<template>
  <section class="banner">
    <img src="@/assets/banner/background.png" alt="Banner" />
    <div @click="editBanner" class="banner--frame">
      <img src="@/assets/banner/edit.svg" alt="Edit banner logo" />
    </div>
  </section>
</template>
<style scoped>
.banner {
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 230px;
  margin: 0 auto;
}

.banner--frame {
  position: absolute;
  top: 17px;
  right: 25px;
  height: 35px;
  width: 35px;
  z-index: 20;
  display: grid;
  place-items: center;
  cursor: pointer;
}
</style>
