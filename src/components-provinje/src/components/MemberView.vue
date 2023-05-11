<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Member } from '../interface';

interface Props {
  id: number;
}
const props = defineProps<Props>();

const memberList = inject("memberList") as Map<number, Member>;

const member = computed(
  (): Member => {
    return memberList.get(props.id) as Member;
  }
);

const onAddPoint = (): void => {
  // memberはcomputedによって算出プロパティとして定義されているので.valueが必要になる
  member.value.points++;
}

</script>

<template>
  <div class="card">
    <p>氏名: {{ member.name }}</p>
    <p>保有ポイント: {{ member.points }}</p>
    <button v-on:click="onAddPoint">加算</button>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>