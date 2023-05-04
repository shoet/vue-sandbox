<script setup lang="ts">
import { ref, computed } from 'vue';

const msg = ref("message");
const msgTextRed = ref("red");
const textSize = computed(
  (): string => {
    const size = Math.round(Math.random() * 25) + 10;
    return `${size}pt`;
  }
)
const msgTextColor = ref("blue");
const msgBgColor = ref("gray");
const msgStyle = ref({
  color: "pink",
  fontSize: "24px"
});
const msgStyle2 = ref({
  "color": "pink",
  "font-size": "24px",
  "background-color": "gray"
});
const msgStyle3 = ref({
  "color": "pink",
  "font-size": "50px",
})

</script>

<template>
  <p v-bind:style="{color: msgTextRed}">{{ msg }}</p>
  <p v-bind:style="{color: 'pink'}">{{ msg }}</p>
  <p v-bind:style="{fontSize: textSize}">{{ msg }}</p>
  <p v-bind:style="{color: msgTextColor, backgroundColor: msgBgColor}">{{ msg }}</p>
  <p v-bind:style="{'color': msgTextColor, 'background-color': msgBgColor}">{{ msg }}</p>
  <p v-bind:style="msgStyle">{{ msg }}</p>
  <p v-bind:style="msgStyle2">{{ msg }}</p>
  <p v-bind:style="[msgStyle2, msgStyle3]">{{ msg }}</p>
</template>

<style>
</style>