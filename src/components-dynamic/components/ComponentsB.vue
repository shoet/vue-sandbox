<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Member } from '@/components-dynamic/interface';

const memberList = ref(new Map<number, Member>(
  [
    {id: 1, name: "aaaa", age: 20},
    {id: 2, name: "bbbb", age: 30},
    {id: 3, name: "cccc", age: 40},
  ].map((member) => [member.id, member])
));
const selectedMemberId = ref([...memberList.value.keys()][0]);
const selectedMember = computed(
  (): Member => {
    return memberList.value.get(selectedMemberId.value) as Member;
  }
)
</script>

<template>
  <h2>ComponentsB</h2>
  <input type="radio" v-for="[id, member] in memberList" v-bind:key="id" v-model="selectedMemberId" :value="id">
  <p>{{ selectedMember }}</p>
</template>

<style>
</style>