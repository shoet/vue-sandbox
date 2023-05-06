<!-- 片方向バインディング -->
<script setup lang="ts">
import { ref } from 'vue';

const inputNameValue = ref('v-bind:value');

const inputName = ref('v-on:input');
const onInput = (e: Event) => {
  const element = e.target as HTMLInputElement;
  inputName.value = element.value;
}

const onSubmit = (event: Event, value: string): void => {
  window.alert(value);
}

</script>

<template>
  <p>片方向バインディング</p>

  <p>テンプレート変数(ref)→コントロール入力値(v-bind:value)</p>
  <p>(これではsubmit時にinputの変更内容が反映されない)</p>
  <input type="text" v-bind:value="inputNameValue">
  <button v-on:click="onSubmit($event, inputNameValue)">submit</button>

  <br>

  <p>コントロール入力値(v-on:input)→テンプレート変数(ref)</p>
  <p>v-on:inputでの変更を変数を挟んで取得する必要がある</p>
  <input type="text" v-on:input="onInput">
  <p>{{ inputName }}</p>
  <button v-on:click="onSubmit($event, inputName)">submit</button>

</template>

<style scoped>
input {
  display: block;
}
</style>