<script setup lang="ts">
import { ref } from 'vue';
import MemberView from './components/MemberView.vue';

const memberListInit = new Map<number, Member>();
memberListInit.set(1, {id: 1, name: "aaaa", email: "aaaa@example.com", points: 10, note: "優待あり"});
memberListInit.set(2, {id: 2, name: "bbbb", email: "bbbb@example.com", points: 20, note: "優待あり"});
memberListInit.set(3, {id: 3, name: "cccc", email: "cccc@example.com", points: 30});

const memberList = ref(memberListInit);

interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
</script>

<template>
  <section>
    <h1>会員リスト</h1>
    <MemberView
      v-for="[id, member] in memberList" 
      v-bind:key="id"
      :id="id"
      :name="member.name"
      :email="member.email"
      :points="member.points"
      :note="member.note"
      />
  </section>
</template>

<style>
</style>