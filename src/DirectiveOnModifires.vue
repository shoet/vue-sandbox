<script setup lang="ts">
import { ref } from 'vue';

const msg = ref("未入力");

const onEnter = (event: KeyboardEvent): void => {
  console.log(event);
  msg.value = "Enterが押されました。";
}

const onClickt = (event: MouseEvent): void => {
  console.log(event.button);
  console.log(event)
  switch (event.button) {
    case 0:
      msg.value = "左クリック";
      break;
    case 2:
      msg.value = "右クリック";
      break;
    default:
      window.alert("例外クリック");
      break;
  }
}
</script>

<template>
  <p>{{ msg }}</p>
  <p><input type="text" name="" id="" v-on:keydown.enter="onEnter"></p>
  <p><button v-on:click="onClickt">クリック</button></p>
  <p><button v-on:click.left="onClickt">左クリック</button></p>
  <p><button v-on:click.right="onClickt">右クリック</button></p>
  <p><button v-on:click.shift="onClickt">shiftクリック</button></p>
</template>

<style>
</style>