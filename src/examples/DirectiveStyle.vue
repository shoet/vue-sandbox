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

// const style1or2 = ref('style1')
const style1or2 = ref({
  style: 'style1',
  msg: 'hoge'
})

function changeStyle() {
  if (style1or2.value.style = 'style1') {
    style1or2.value.style = 'style2';
    style1or2.value.msg = 'fuga';
  } else {
    style1or2.value.style = 'style1';
    style1or2.value.msg = 'hoge';
  }
  console.log('hoge');
}

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
  <p v-bind:class="style1or2.style">{{ style1or2.msg }}</p>
  <button v-on:click="changeStyle">button</button>
</template>

<style>
.style1 {
  font-weight: bold;
  font-size: 20px;
  color: green;
}

.style2 {
  font-size: 20px;
  color: white;
}
</style>