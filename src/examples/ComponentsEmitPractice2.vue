<script setup lang="ts">
import { ref } from 'vue';

import EmitCard from '@/components/componentsbasic/EmitCard.vue';

interface Member {
  id: number;
  name: string;
  points: number;
}

const memberListInit = new Map<number, Member>();
memberListInit.set(1, {id: 1, name: "aaa", points: 0});
memberListInit.set(2, {id: 2, name: "bbb", points: 0});
memberListInit.set(3, {id: 3, name: "ccc", points: 0});
const memberList = ref(memberListInit);

// 3. emitを通じて子コンポーネントに引き渡す関数を定義どおりに実装する
// 4. 同時に引き渡した変数に処理する
const onAddPoint = (id: number): void => {
  const member = memberList.value.get(id);
  if (member != undefined) {
    member.points++;
  }
}

</script>

<template>
  <!--  5. emitで関数を引き渡す  -->
  <EmitCard v-for="[id, member] in memberList" v-bind:key="id" v-on:onAddPoint="onAddPoint"
  :id="member.id"
  :name="member.name"
  :points="member.points"
  />
</template>

<style>
</style>