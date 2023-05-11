<script setup lang="ts">
import { ref, computed } from 'vue';

const randNum = ref(Math.round(Math.random()*100));

function is3baisu(num: number): boolean {
  return (num%3) == 0
}

function is3gaTsuku(num: number): boolean {
  return num.toString().includes("3")
}

const isNabeatsu = computed(() => {
  return function(num: number) {
    return is3baisu(num) || is3gaTsuku(num)
  }
})
</script>

<template>
  <p>なべあつ表示</p>
  <p>3の倍数と3が付く数字のときだけアホになります</p>
  <p>数字: {{ randNum }}</p>
  <template v-if="isNabeatsu(randNum)">
    <img class="true-img" src="https://contents.oricon.co.jp/upimg/news/20080806/57049_200808060612107001218027831c.jpg" alt="nabeatsu">
  </template>
  <img v-show="isNabeatsu(randNum)" class="true-img" src="https://contents.oricon.co.jp/upimg/news/20080806/57049_200808060612107001218027831c.jpg" alt="nabeatsu">
</template>

<style scoped>
.true-img {
  width: 200px;
  height: auto;
  object-fit: contain;
}
</style>