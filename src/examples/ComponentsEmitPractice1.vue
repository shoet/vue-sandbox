<script setup lang="ts">
import { ref } from 'vue';
import EmitButton from '@/components/componentsbasic/EmitButton.vue';

const rand = ref(Math.round(Math.random() * 10));
const onClick = (): void => {
  rand.value = Math.round(Math.random() * 10);
}
</script>

<template>
  <div class="container">
    <EmitButton v-on:onClick="onClick" :rand="rand"/>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  border: 1px solid black;
}
</style>