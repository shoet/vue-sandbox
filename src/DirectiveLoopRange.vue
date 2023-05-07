<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <ul v-for="r in 5" v-bind:key="r">{{ r }}: {{ 2 * r * 3.14 }}</ul>
</template>

<style>
</style>