<script setup lang="ts">
import { ref } from 'vue';

const associateListInit = new Map<number, string>();
associateListInit.set(1111, "aaaa");
associateListInit.set(2222, "bbbb");
associateListInit.set(3333, "cccc");

const associateList = ref(associateListInit);
</script>

<template>
  <!--  連想配列は(value, id), mapは[id, value]  -->
  <ul v-for="[id, value] in associateList" v-bind:key="id">
    <li>{{ value + "_" + id.toString() }}</li>
  </ul>
</template>

<style>
</style>