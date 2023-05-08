<script setup lang="ts">
import { ref, computed } from 'vue'

const humanList: Human[] = [
  {name: "aaaa", age: 30, bloodtype: "a"},
  {name: "bbbb", age: 30, bloodtype: "b"},
  {name: "cccc", age: 30, bloodtype: "o"},
  {name: "dddd", age: 30, bloodtype: "ab"},
  {name: "eeee", age: 30, bloodtype: "a"},
]
const humanListRef = ref(humanList);

const humanListRefA = computed((): Human[] => {
  return humanListRef.value.filter((obj: Human) => obj.bloodtype === "a");
})

interface Human {
  name: string,
  age: number,
  bloodtype: string
}

</script>

<template>
  <p>すべてのHuman</p>
  <ul>
    <li v-for="obj in humanListRef" v-bind:key="obj.name">{{ obj }}</li>
  </ul>

  <p>血液型A</p>
  <ul>
    <li v-for="obj in humanListRefA" v-bind:key="obj.name">{{ obj }}</li>
  </ul>
</template>

<style>
</style>