<!-- 
  emitで親の変数を引き込む 
-->
<script setup lang="ts">

interface Props {
  id: number;
  name: string;
  points: number;
}
const props = defineProps<Props>();

interface Emits {
  // 1. emitで引き込んだ関数に引数として取り込みたいものを定義する
  (event: "onAddPoint", id: number): void;
}
const emits = defineEmits<Emits>();

const onAddPoint = (): void => {
  // 2. 子コンポーネントの変数の受け皿をセットする
  emits("onAddPoint", props.id);
}
</script>

<template>
  <section class="container">
    <dl>
      <dt>id</dt>
      <dd>{{ id }}</dd>
      <dt>name</dt>
      <dd>{{ name }}</dd>
      <dt>points</dt>
      <dd>{{ points }}</dd>
    </dl>
    <button v-on:click="onAddPoint">ポイント加算</button>
  </section>
</template>

<style scoped>
.container {
  margin: 10px;
  border: 1px solid black;
}
</style>