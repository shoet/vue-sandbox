<!-- 
  親コンポーネントから子コンポーネントへのデータの伝播
  受け渡し
  props
-->
<script setup lang="ts">
import { ref, defineProps, computed } from 'vue';

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
  deleteFlg?: boolean;
}
// const props = defineProps<Props>();
const props = withDefaults(
  defineProps<Props>(),
  {deleteFlg: false}
)

const localPoints = ref(props.points);
const localNote = computed(
  (): string => {
    let localNote = props.note;
    if (localNote == undefined) {
      localNote = "--";
    }
    return localNote;
  }
);

const status = computed(
  (): string => {
    let status = "会員";
    if (props.deleteFlg) {
      status = "退会済み";
    }
    return status
  }
);

const addPoint = (): void => {
  // このやり方では直接propsの持つpointsを更新できない。最終的にサーバーに更新を送る必要がある。
  localPoints.value++;
}
</script>

<template>
  <section class="box">
    <div class="box__title">{{ name }}さんの情報</div>
    <dl>
      <dt>ステータス</dt>
      <dd>{{ status }}</dd>
      <dt>ID</dt>
      <dd>{{ id }}</dd>
      <dt>メールアドレス</dt>
      <dd>{{ email }}</dd>
      <dt>保有ポイント</dt>
      <dd>{{ localPoints }}</dd>
      <dt>備考</dt>
      <dd>{{ localNote }}</dd>
    </dl>
    <button v-on:click="addPoint">ポイント加算</button>
  </section>
</template>

<style scoped>
.box {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
}
.box__title {
  font-size: 2rem;
  font-weight: bold;
}

</style>