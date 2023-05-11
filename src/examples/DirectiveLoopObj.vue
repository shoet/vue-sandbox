<script setup lang="ts">
import { ref } from 'vue';

const sampleObject: {
  name: string,
  age: number,
  gender: number,
} = {
  name: "mike",
  age: 30,
  gender: 0
};

const sampleObjectRef = ref(sampleObject);
</script>

<template>
  <!--  連想配列と同様に(value, col)の形で入ってくる  -->
  <ul v-for="(value, col) in sampleObjectRef" v-bind:key="col">
    
    <li>{{ value }}_{{ col }}</li>
  </ul>
</template>

<style>
</style>