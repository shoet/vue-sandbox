<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  name: string;
}
const props = defineProps<Props>();
const now = ref(getNowString());

function getNowString(): string {
  const n = new Date();
  return n.toDateString() + " " + n.toTimeString();
}

setInterval(
  (): void => {
    now.value = getNowString();
  },1000
)
</script>

<template>
  <div class="container">
    <p>氏名: {{ name }}</p>
    ステータス: <br/>
    <!-- 親要素から注入したコンテンツ -->
    <slot/>
    <p>現在時刻：{{ now }}</p>
    <p>コメント：</p>
    <div class="comment-block">
      <!-- 名前付きslot -->
      <slot name="comment"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 10px;
  border: 1px solid black;
}
</style>