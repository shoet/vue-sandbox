<script setup lang="ts">
import { ref } from 'vue';

const bgColor = ref('red');

const setBgColor = (color: string): void => {
  bgColor.value = color;
}
</script>

<template>
  <p v-bind:style="{backgroundColor: bgColor}" v-on:click="setBgColor('blue')">文字</p>
</template>

<style>
</style>