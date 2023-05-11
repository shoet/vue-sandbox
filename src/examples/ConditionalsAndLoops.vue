<script setup lang="ts">
import { ref } from 'vue'
const numbers = ref([1, 2, 3])
const isDisplayList = ref(true)

function push() {
  numbers.value.push(numbers.value.length+1)
}

function pop() {
  numbers.value.pop()
}

function reverse() {
  numbers.value.reverse()
}

function toggleList() {
  isDisplayList.value = !isDisplayList.value
}

</script>
<template>
  <button @click="toggleList">toggle</button>
  <button @click="push">push</button>
  <button @click="pop">pop</button>
  <button @click="reverse">reverse</button>

  <div v-if="isDisplayList && numbers.length">
    <ul>
      <li v-for="(element, key) of numbers" :key="key">{{ element }}</li>
    </ul>
  </div>
  <p v-else-if="numbers.length">List is not empty, but hidden.</p>
  <p v-else>List is empty</p>

</template>
<style>
button {
  display: inline;
  margin-right: 0.5em;
}
</style>