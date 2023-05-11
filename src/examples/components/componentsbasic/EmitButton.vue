<script setup lang="ts">

interface Props {
  rand: number;
}
const props = defineProps<Props>();

interface Emits {
  (event: "onClick"): void;
}
const emit = defineEmits<Emits>();

const onClick = (): void => {
  emit("onClick");
}
</script>

<template>
  <p>{{ rand }}</p>
  <button v-on:click="onClick">ランダム生成</button>
</template>

<style>
</style>