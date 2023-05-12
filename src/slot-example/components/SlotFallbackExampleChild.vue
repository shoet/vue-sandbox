<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  name?: string;
}
const props = defineProps<Props>();
const name = ref(props.name);
</script>

<template>
  <div class="container">
    <p>親要素からの注入があるとは限らない</p>
    <slot>
      <p>親からのコンテンツの注入がなかった</p>
    </slot>
    <slot name="name">
      <!-- 親から<p>{{ name }}</p>が渡されてくるが、ここでのnameは親コンポーネントの変数が使われる -->
      <!-- 親から子に渡される前に変数展開済みのHTMLが渡される -->
    </slot>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid black;
  /* margin: 10px;
  padding: 10px; */
}
</style>