<script setup lang="ts">
import { ref } from 'vue';

const inputValue = ref('');

const onSubmit = (e: Event, value: string): void => {
  window.alert(value);
}
</script>

<template>
  <p>双方向バインディング</p>
  <input v-model="inputValue">
  <p>{{ inputValue }}</p>
  <button v-on:click="onSubmit($event, inputValue)">submit</button>

</template>

<style>
</style>