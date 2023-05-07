<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(2345, "ホワイトレディ");
cocktailListInit.set(4412, "ブルーハワイ");
cocktailListInit.set(6792, "ニューヨーク");
const cocktailList = ref(cocktailListInit);
const cocktailDeleteIdxList: Ref<number[]> = ref([]);


</script>

<template>
  <ul class="cocktailList">
    <li v-for="[id, cocktailName] in cocktailList" v-bind:key="id">
      <label><input type="checkbox" v-model="cocktailDeleteIdxList" :value=id>{{ cocktailName }}</label>
    </li>
  </ul>
  <p>{{ cocktailDeleteIdxList.map((value) => value.toString()).join(",") }}</p>
</template>

<style>
.cocktailList {
  list-style: none;
  padding-left: 0;
}
</style>