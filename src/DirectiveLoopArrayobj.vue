<script setup lang="ts">
import { ref } from 'vue';

const myObjListInit: MyObj[] = [
  {name: "aaaa", age: 30, bloodType: "a"},
  {name: "bbbb", age: 30, bloodType: "b"},
  {name: "cccc", age: 30, bloodType: "o"},
  {name: "dddd", age: 30, bloodType: "ab"},
]

const myObjListRef = ref(myObjListInit);

interface MyObj {
  name: string;
  age: number;
  bloodType: string;
}
</script>

<template>
  <ul v-for="obj in myObjListRef" v-bind:key="obj.name">
    <li style="display: inline">name: {{ obj.name }}, </li>
    <li style="display: inline">age: {{ obj.age }}, </li>
    <li style="display: inline">bloodtype: {{ obj.bloodType }}</li>
  </ul>
</template>

<style>
</style>