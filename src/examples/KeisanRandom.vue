<template>
  <div>
    半径{{ data.radius }}の円の面積を円周率{{ data.PI }}で計算すると、{{ area }}
  </div>
</template>
<script setup lang="ts">
import {ref, computed, reactive} from "vue"
const data = reactive({
  PI: 3.14,
  radius: Math.random() * 10
});
const area = computed(
  (): number => {
    return data.radius * data.radius * data.PI;
  }
)

setInterval(
  (): void => {
    data.radius = Math.round(Math.random() * 10);
  },
  1000
)
// export default {
// }
</script>
<style>
  
</style>