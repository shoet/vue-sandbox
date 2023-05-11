<script setup lang="ts">

interface Props {
  id: number;
  name: string;
  age: number;
  points: number;
}
const props = defineProps<Props>();

interface Emits {
  (event: "onAddPoint", id: number): void;
}
const emits = defineEmits<Emits>();

const onAddPoint = (): void => {
  emits("onAddPoint", props.id);
}

</script>

<template>
  <section class="card">
    <div class="card__title">氏名：{{ name }}</div>
    <div class="card__body">
      <div class="card__age">年齢：{{ age }}</div>
      <div class="card__points">保有ポイント：{{ points }}</div>
    </div>
    <button v-on:click="onAddPoint">ポイント追加</button>
  </section>
</template>

<style scoped>
.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
.card__body {
  display: flex
}
.card__age, .card__points {
  flex-grow: 1;
}
</style>