<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Profile } from '../interface';

interface Props {
  id: number;
}
const props = defineProps<Props>();

const memberList = inject("profileList") as Map<number, Profile>;

const profile = computed(
  (): Profile => {
    return memberList.get(props.id) as Profile;
  }
)

</script>

<template>
  <div class="container">
    <!-- slotから親コンポーネントに渡す -->
    <slot v-bind:profile="profile" name="default">
      <p>ステータス</p>
      {{ profile.name }}
    </slot>
  </div>
</template>

<style>
.container {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
}
</style>