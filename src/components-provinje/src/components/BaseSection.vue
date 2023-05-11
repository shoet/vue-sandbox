<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Member } from '../interface';
import MemberView from '../components/MemberView.vue';

const memberList = inject("memberList") as Map<number, Member>;
const totalPoints = computed(
  (): number => {
    let total = 0;
    for (const member of memberList.values()) {
      total += member.points;
    }
    return total;
  }
)
</script>

<template>
  <h1>会員リスト</h1>
  <p>ポイント合計: {{ totalPoints }}</p>
  <MemberView 
    v-for="id in memberList.keys()" 
    v-bind:key="id"
    :id="id"
    />
</template>

<style>
</style>