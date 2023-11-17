<script setup></script>

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
  </aside>
</template>
<style scoped>
.aside {
  position: relative;
  width: 336px;
  padding: 32px 24px 16px 24px;
  border-radius: 10px;
  border: 1px solid var(--principales-primary-primary-3,);
  background: #fff;
  margin-top: -150px;
  z-index: 10px;
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
</style>
