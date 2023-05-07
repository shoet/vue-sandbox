<script setup lang="ts">
import { ref } from 'vue';

// [key: number]で型指定しているのはTypeScriptのインデックスシグネチャ
const associateListInit: {[key: number]: string} = {
  1111: "aaaa",
  2222: "bbbb",
  3333: "cccc",
}
const associateList = ref(associateListInit);

</script>

<template>
  <p>(a) id: value</p>
  <ul v-for="(value, id) in associateList" v-bind:key="'a_'+id">
    <li>{{ id }} : {{ value }} , v-bind:key={{ 'a_' + id }}</li>
  </ul>
  <p>(b) id: value: index</p>
  <ul v-for="(value, id, index) in associateList" v-bind:key="'b_'+id">
    <li>{{ id }} : {{ value }} : {{ index }}, v-bind:key={{ 'b_' + id }}</li>
  </ul>

  <p>(a)と(b)は同じコンポーネント内にあるので、v-bind:keyは双方でかぶってはいけない</p>
</template>

<style>
</style>