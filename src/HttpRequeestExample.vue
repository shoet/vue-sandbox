<!-- 
  fetch
  httpbin
  watch
-->
<script setup lang="ts">
import { ref, watch } from 'vue';

const result = ref("");
const successFlg = ref(false);
const bodyClass = ref("");

const onGet = (): void => {
  fetch("https://httpbin.org/get", {
    method: "GET"
  })
  .then(res => {
    if (!res.ok) {
      successFlg.value = false;
      return "エラーになりました。"
    }
    successFlg.value = true;
    return res.json()
  })
  .then(data => result.value = data);
}

watch(
  successFlg, 
  (newVal, oldVal): void => {
    if (newVal) {
      bodyClass.value = "success";
    } else {
      bodyClass.value = "";
    }
  }
);

</script>

<template>
  <div v-bind:class="bodyClass">
    <p>HTTPリクエストする</p>
    <button v-on:click="onGet">GET</button>
    <p>{{ result }}</p>
  </div>
</template>

<style scoped>
.success {
  background-color: rgb(172, 239, 238);
}
</style>