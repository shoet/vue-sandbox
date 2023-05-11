<script setup lang="ts">
import { ref } from 'vue';
import EmitSection from '@/components/componentsbasic/EmitSection.vue';

const rand = ref(Math.round(Math.random() * 10));
const isActive = ref(false);
// 4. 子コンポーネントのemitが発火した通知により、このハンドラが呼び出される
const onCreateNewRand = (): void => {
  rand.value = Math.round(Math.random()*10);
}
const onCheck = (): void => {
  isActive.value = !isActive.value;
}
</script>

<template>
  <section>
    <p>親コンポーネント{{ rand }}</p>
    <EmitSection v-on:createNewRand="onCreateNewRand" :rand="rand" :is-active="isActive" v-on:onCheck="onCheck"/>
    <p>check: {{ isActive }}</p>
  </section>
</template>

<style>
</style>