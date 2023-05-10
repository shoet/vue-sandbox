<script setup lang="ts">

interface Props {
  id: number;
  name: string;
  points: number;
}
const props = defineProps<Props>();

interface Emits {
  (event: "update:points", points: number): void;
}
const emits = defineEmits<Emits>();

const onInput = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  const inputPoints = Number(element.value);
  emits("update:points", inputPoints);
}
</script>

<template>
  <div class="container">
    <p>{{ name }}</p>
    <input type="number" v-bind:value="points" v-on:input="onInput">
    <p>保有ポイント：{{ points }}</p>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>