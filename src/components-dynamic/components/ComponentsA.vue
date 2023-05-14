<script setup lang="ts">
import { ref } from 'vue';

const text = ref("");
</script>

<template>
  <h2>ComponentsA</h2>
  <input type="text" v-model="text">
  <p>{{ text }}</p>
</template>

<style>
</style>