<script setup lang="ts">
import { provide, reactive } from 'vue';
import type { Profile } from './interface';
import SlotScopedChild from './components/SlotScopedChild.vue';

const profileList: Map<number, Profile> = new Map(
    [
      {id: 1, name: "a"},
      {id: 2, name: "b"},
    ].map((profile: Profile) => [profile.id, profile])
)
provide("profileList", reactive(profileList));

</script>

<template>
  <h1>スコープ付きslot</h1>
  <SlotScopedChild v-for="id of profileList.keys()" v-bind:key="id" :id="id">
    <template v-slot:default="slotProps">
      <!-- slot側でbindしておく -->
      {{ slotProps.profile.name }}
    </template>
  </SlotScopedChild>
</template>

<style>
</style>