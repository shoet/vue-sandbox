<script setup lang="ts">
import { computed } from 'vue';

const getRandomNumber = computed((): number => {
  const randNum = Math.round(Math.random() * 10);
  console.log(randNum);
  return randNum;
}
)

</script>

<template>
  <p>計算値は、 {{ getRandomNumber }} です。</p>
  <p v-if="getRandomNumber == 10">=10</p>
  <p v-else-if="getRandomNumber >= 7">&gt;= 7</p>
  <p v-else-if="getRandomNumber >= 4">&gt;= 4</p>
  <p v-else-if="getRandomNumber >= 1">&gt;= 1</p>
  <p v-else="getRandomNumber == 0">= 0</p>
</template>

<style>
</style>