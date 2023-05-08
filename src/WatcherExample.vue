<script setup lang="ts">
import { ref, computed, watchEffect, watch } from 'vue';

const humanList: Map<number, Human> = new Map();
humanList.set(1, {id: 1, name: "aaaa", age: 30, bloodtype: "a"});
humanList.set(2, {id: 2, name: "bbbb", age: 30, bloodtype: "b"});
humanList.set(3, {id: 3, name: "cccc", age: 30, bloodtype: "o"});
humanList.set(4, {id: 4, name: "dddd", age: 30, bloodtype: "ab"});

const currentHumanIdComputed = ref(1);
const currentHumanIdWatchEffect = ref(1);
const currentHumanIdWatch = ref(1);

function getMsg(id: number): string {
  let msg = "該当する人がいません。";
  const human = humanList.get(id);
  if (human != undefined) {
    msg = `該当する人は${human.name}です。`
  }
  return msg;
}

const msgComputed = computed(
  (): string => {
    return getMsg(currentHumanIdComputed.value);
  });

const msgWatchEffect = ref("");
watchEffect(
  (): void => {
    msgWatchEffect.value = getMsg(currentHumanIdWatchEffect.value);
  });

const msgWatch = ref("");
const msgWatchBeforeAfter = ref("");
watch(
  currentHumanIdWatch,
  (newVal, oldVal): void => {
    msgWatch.value = getMsg(currentHumanIdWatch.value);
    if (oldVal != undefined && newVal != undefined) {
      msgWatchBeforeAfter.value = '前回: ' + getMsg(oldVal) + '\n今回: ' + getMsg(newVal);
    }
  }, {immediate: true});


interface Human {
  id: number;
  name: string;
  age: number;
  bloodtype: string;
}

setInterval(
  (): void => {
    currentHumanIdComputed.value = Math.round(Math.random() * 3) + 1;
    currentHumanIdWatchEffect.value = Math.round(Math.random() * 3) + 1;
    currentHumanIdWatch.value = Math.round(Math.random() * 3) + 1;
  },
  1000
);

</script>

<template>
  <p>msgComputed</p>
  <p>{{ msgComputed }}</p>

  <p>msgWatchEffect</p>
  <p>{{ msgWatchEffect }}</p>

  <p>msgWatch</p>
  <p>{{ msgWatch }}</p>
  <pre>{{ msgWatchBeforeAfter }}</pre>
</template>

<style>
</style>