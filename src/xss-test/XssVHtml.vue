<script setup lang="ts">
import { ref } from 'vue';

const inputHtml = ref("");
</script>

<template>
  <h1>入力値をv-htmlから描画</h1>
  <input type="text" v-model="inputHtml">
  <div v-html="inputHtml"></div>
</template>

<style>
</style>