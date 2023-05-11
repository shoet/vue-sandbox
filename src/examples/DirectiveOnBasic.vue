<script setup lang="ts">
import { ref } from 'vue';

const onButtonClick = (): void => {
  const randNum = Math.random();
  result.value = String(randNum);
}

const onFocusButton = (e: Event): void => {
  console.log(e);
}

const result = ref("まだです");
</script>

<template>
  <button v-on:click="onButtonClick">button</button>
  <p>clickの結果: {{ result }}</p>
  <a href="#" class="my-button" v-on:focus="onFocusButton">link button</a>
  <a href="#" class="my-button" v-on:mouseenter="onFocusButton">link button</a>
</template>

<style>
.my-button {
  width: 200px;
  height: 80px;
  line-height: 80px;
  color: white;
  background-color: orange;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  transition: 0.5s;
}

</style>