<script setup lang="ts">
import { ref, computed } from 'vue';

const switchState = ref(false);
const switchStateClass = computed(
  () => (state: boolean): string => {
      return state ? "switch__button--on" : "switch__button--off";
    }
)
const onClick = (): void => {
  switchState.value = !switchState.value;
}

</script>

<template>
  <h2>ComponentsC</h2>
  <div class="switch" v-on:click="onClick">
    <a 
      href="#"
      v-bind:class="`switch__button ${switchStateClass(!switchState)}`"
      v-on:click="">Off</a>
    <a 
      href="#"
      v-bind:class="`switch__button ${switchStateClass(switchState)}`"
      v-on:click="">On</a>
  </div>
</template>

<style scoped>
.switch {
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  width: 100px;
}
.switch__button {
  padding: none;
  flex-grow: 1;
  text-align: center;
  transition: 0.25s;
  text-decoration: none;
}
.switch__button--off {
  background-color:rgb(166, 166, 166);
  color: gray;
}
.switch__button--on {
  background-color: rgb(0, 166, 255);
  color: white;
  font-weight: bold;
}
</style>