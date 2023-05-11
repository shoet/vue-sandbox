<script setup lang="ts">
import { ref } from 'vue';
import EmitPractive3 from '@/components/componentsbasic/EmitPractive3.vue';

interface Member {
  id: number;
  name: string;
  age: number;
  points: number;
}

const memberListInit = new Map<number, Member>();
memberListInit.set(1, {id: 1, name: "aaaa", age: 30, points: 0});
memberListInit.set(2, {id: 2, name: "bbbb", age: 30, points: 0});
memberListInit.set(3, {id: 3, name: "cccc", age: 30, points: 0});
memberListInit.set(4, {id: 4, name: "dddd", age: 30, points: 0});
const memberList = ref(memberListInit);

const onAddPoint = (id: number): void => {
  const member = memberList.value.get(id);
  if (member != undefined) {
    member.points++;
  }
}

</script>

<template>
  <h1>会員情報</h1>
  <EmitPractive3 v-for="[id, member] in memberList" v-bind:key="id"
    :id="id" :name="member.name" :age="member.age" :points="member.points"
    v-on:onAddPoint="onAddPoint" />
</template>

<style>
</style>