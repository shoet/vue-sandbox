<!-- 子コンポーネント側に処理を寄せる -->
<script setup lang="ts">
import { computed } from 'vue';

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

const onClick = () => {
  emits("update:points", props.points+1);
}
// https://progtext.net/programming/vue-v-model-props/
</script>

<template>
  <div class="container">
    <p>{{ name }}</p>
    <p>{{ points }}</p>
    <button v-on:click="onClick">加算</button>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>