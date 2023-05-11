<script setup lang="ts">

interface Props {
  rand: number;
  isActive: boolean;
}

interface Emits {
  (event: "createNewRand"): void;
  (event: "onCheck"): void;
}

defineProps<Props>();

// emit機能を用いて子コンポーネントを使用している親コンポーネントに対してイベントを発生・変更を通知させている。
const emit = defineEmits<Emits>();

const onNewRandButtonClick = (): void => {
  emit("createNewRand");
}

// 2. このハンドラが呼ばれる
const onCheck = (): void => {
  // 3. emitを通じて親コンポーネントでv-onディレクティブに指定した関数に通知する
  emit("onCheck");
}
</script>

<template>
  <section class="box">
    <p>子コンポーネント{{ rand }}</p>
    <!-- 1. clickされてonClickが発動する -->
    <button v-on:click="onNewRandButtonClick">random</button>
    <input type="checkbox" v-on:click="onCheck">
  </section>
</template>

<style>
.box {
  border: 1px solid black;
  margin: 10px;
}
</style>