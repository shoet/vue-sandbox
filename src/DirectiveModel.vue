<!-- 双方向バインディング -->
<script setup lang="ts">
  import { ref } from 'vue';

  const msgModel = ref('双方向');
</script>

<template>
  <p>双方向バインディング</p>
  <input type="text" v-model="msgModel">
  <p>{{ msgModel }}</p>
</template>

<style>
</style>