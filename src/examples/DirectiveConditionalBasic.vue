<script setup lang="ts">
import { ref, computed } from 'vue';

const number = ref(80);
const showOrNot = computed((): boolean => {
  let randNum = Math.round(Math.random() * 10);
  console.log(randNum);
  return (randNum >= 5) ? true : false
})
</script>


<template>
<p v-if="number >= 50">50以上</p>
<p v-if="Math.round(Math.random() * 100) >= 50">50以上</p>
<p v-if="showOrNot">5以上</p>

</template>

<style>
</style>