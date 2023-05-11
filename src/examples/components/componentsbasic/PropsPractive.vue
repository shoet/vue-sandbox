<script setup lang="ts">
import { ref } from 'vue';


interface Props {
  id: string;
  message: string;
  parentId: string;
}
const props = defineProps<Props>();

const isReplyOpen = ref(false);

const onReply = (): void => {
  isReplyOpen.value = true;
}

</script>

<template>
  <div class="message">
    <p class="message__id">{{ id }}</p>
    <p class="message__text">{{ message }}</p>
    <template v-if="isReplyOpen">
      <textarea cols="30" rows="3"></textarea>
    </template>
    <template v-else>
      <button v-on:click="onReply">返信する</button>
    </template>
  </div>
</template>

<style scoped>
.container {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>