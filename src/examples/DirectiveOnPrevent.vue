<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('未送信');

const onSubmit = (): void => {
  msg.value = 'submitされました'
}
</script>

<template>
  <form action="#" v-on:submit="onSubmit">
    <input type="text" name="" id="">
    <button type="submit">button</button>
    <p>{{ msg }}</p>
  </form>
</template>

<style>
</style>