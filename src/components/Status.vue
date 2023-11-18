<script setup>
import Button from '../components/Button.vue'

</script>

<template>
  <section class="status">
    <div class="status--left">
      <span>Match con la cultura</span>
      <p>80%</p>
      <div class="status--progress"></div>
    </div>
    <div class="status--right">
      <Button type="primary" size="medium">Enviar Pitch</Button>
      <Button type="secondary" icon="follow">Seguir</Button>
    </div>
  </section>
</template>
<style scoped>
.status {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.status--left {
  display: flex;
  align-items: center;
}

.status--left span {
  color: var(--principales-primary-primary-2);
  text-align: center;
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-right: 8px;
}

.status--left p {
  color: var(--principales-success-succes-1);
  text-align: center;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.5px;
  margin-right: 8px;
}

.status--progress {
  width: 276px;
  height: 14px;
  border-radius: 30px;
  background: var(--principales-primary-primary-3);
}

.status--progress::before {
  content: "";
  display: block;
  width: 207px;
  height: 100%;
  border-radius: 30px;
  background: var(--principales-success-succes-1);
}

.status--right {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
