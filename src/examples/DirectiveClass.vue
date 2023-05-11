<script setup lang="ts">
import { ref, computed } from 'vue';

const myClass = computed(
  (): string => {
    let num = Math.round(Math.random());
    console.log(num);
    return `class${num}`
  }
)

const msg = ref("hoge");

const computedClass = computed(
  (): {textColorRed: boolean; bgColorBlue: boolean;} => {

    const randTextColor = Math.round(Math.random());
    let textColorFlg = true;
    if (randTextColor == 0) {
      textColorFlg = false;
    }

    const randBgColor = Math.round(Math.random());
    let bgColorFlg = true;
    if (randBgColor == 0) {
      bgColorFlg = false;
    }
    return {
      textColorRed: textColorFlg,
      bgColorBlue: bgColorFlg
    }
  }
)

</script>

<template>
<p v-bind:class="myClass">aaa</p>

<p v-bind:class="{'text-color-pink': true}">{{ msg }}</p>

<p v-bind:class="computedClass">{{ msg }}</p>
</template>

<style>
.class0 {
  font-size: 10px;
}

.class1 {
  font-size: 100px;
}

.text-color-pink {
  color: pink;
}

.textColorRed {
  color: red;
}

.bgColorBlue {
  background-color: blue;
}
</style>