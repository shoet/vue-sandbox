
<script setup lang="ts">
import { ref } from 'vue'

const message = ref('hello')
const isRed = ref(false)
const color = ref('green')

function toggleRed() {
  isRed.value = !isRed.value
}

function toggleColor() {
  color.value = color.value === 'green' ? 'blue' : 'green'
}

</script>

<template>
  <p>
    <span :title="message">helloaaaaaaaaaaaaaaaaaaaa</span>
  </p>

  <p :class="{ red: isRed }" @click="toggleRed">click toggle 1</p>

  <p :style="{ color: color }" @click="toggleColor">click toggle 2</p>

</template>

<style>
p {
  display: block;
  margin-bottom: 1em;
}

.red {
  color: red;
}
</style>