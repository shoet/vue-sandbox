<script setup lang="ts">
import { ref, computed } from 'vue'
import { marked } from 'marked'
import { debounce } from 'lodash-es'

const input = ref('')
const output = computed<string>(() => marked(input.value))

// function update(e: any) {
//   console.log(e.target.value)
//   input.value = e.target.value
// }
const update = debounce((e: any) => {input.value = e.target.value}, 100)

</script>

<template>
  <div class="editor">
    <textarea class="input" :value="input" @input="update"></textarea>
    <div class="output" v-html="output"></div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  width: 50%;
}

.input {
  background-color: #f6f6f6;
}
</style>