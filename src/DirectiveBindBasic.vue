<script setup lang="ts">
import { ref } from 'vue';

const url = ref('https://blog.shoet.team/');
const value = ref('aaa');
const isButtonDisabled = ref(true);
const isButtonDisabled2 = ref(false);
const button2class = ref("button2red");

function button2Click(e: Event) {
  isButtonDisabled2.value = !isButtonDisabled2.value;
  button2class.value = isButtonDisabled2.value ? "button2red" : "button2blue";
  console.log(button2class.value);
}

const widthOrHeight = ref("height");
const widthOrHeightValue = ref("100");
const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "ロゴ",
  width: 75,
  height: 75
})
</script>


<template>
  <p>
    <a v-bind:href="url" target="_blank">shoet blogs</a>
  </p>
  <p>
    <a v-bind:href="url+'/activities/2'" target="_blank">shoet blogs</a>
  </p>
  <p><button b-bind:disabled="isButtonDisabled">送信</button></p>
  <p>
    <button b-bind:class="{{ button2class }}" type="button" v-on:click="button2Click">button</button>
  </p>
  <p><img src="./assets/logo.svg" alt="logo" v-bind:[widthOrHeight]="widthOrHeightValue"></p>
  <p><img v-bind="imgAttributes"/></p>
</template>

<style>
.button2red {
  background-color: red;
  color: red;
}
.button2blue {
  background-color: blue;
  color: blue;
}
</style>