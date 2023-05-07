<script setup lang="ts">
import { ref } from 'vue';

const myMapInit = new Map<number, MyObj>();
myMapInit.set(1111, {name: "aaaa", age: 30, bloodType: "a"});
myMapInit.set(2222, {name: "bbbb", age: 30, bloodType: "b"});
myMapInit.set(3333, {name: "cccc", age: 30, bloodType: "o"});
myMapInit.set(4444, {name: "dddd", age: 30, bloodType: "ab"});

const myMapRef = ref(myMapInit);

interface MyObj {
  name: string;
  age: number;
  bloodType: string;
}
</script>

<template>
  <ul v-for="[id, obj] in myMapRef" v-bind:key="id">
    <li>{{ obj }}</li>
  </ul>
</template>

<style>
</style>