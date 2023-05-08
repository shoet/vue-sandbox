<!-- 
  options api
  optionsapi
  OptionsAPI
  defineComponent
  reactive
  toRefs
-->
<script lang="ts">

import { defineComponent, ref, reactive, toRefs } from 'vue';

export default defineComponent({
  name: "App",
  setup() {
    const data = ref(0);
    const onIncrement = (): void => {
      data.value += 1
    }
    const reactiveData = reactive({
      x: 0,
      y: 0,
    });

    return {
      data,
      onIncrement,
      ...toRefs(reactiveData),
    }
  }
})
</script>

<template>
  <p>{{ data }}</p>
  <p>{{ x }}</p>
  <p>{{ y }}</p>
  <button v-on:click="onIncrement">+1</button>
</template>

<style>
</style>