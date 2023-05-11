<script setup lang="ts">
import { ref } from 'vue';
import EmitCardModelClick from '@/components/componentsbasic/EmitCardModelClick.vue';

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

</script>

<template>
  <h1>会員情報</h1>
  <EmitCardModelClick 
    v-for="[id, member] in memberList"
    v-bind:key="id"
    :id="id"
    :name="member.name"
    v-model:points="member.points"
    />
</template>

<style>
</style>