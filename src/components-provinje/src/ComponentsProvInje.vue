<script setup lang="ts">
import { reactive, provide } from 'vue';
import type { Member } from './interface';
import BaseSection from './components/BaseSection.vue';

const memberList = new Map<number, Member>();
memberList.set(1111, {id: 1111, name: "aaaa", points: 0});
memberList.set(2222, {id: 2222, name: "bbbb", points: 0});
memberList.set(3333, {id: 3333, name: "cccc", points: 0});

provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>

<style>
</style>