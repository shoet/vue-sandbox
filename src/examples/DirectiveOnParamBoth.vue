<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('before message');
const bgColor = ref('green');

const onClick = (bgC: string, e: MouseEvent): void => {
  msg.value = e.timeStamp.toString();
  bgColor.value = bgC;
  console.log(e);
}
</script>

<template>
  <p v-on:click="onClick('blue', $event)" v-bind:style="{backgroundColor: bgColor}">{{ msg }}</p>
</template>

<style>
</style>