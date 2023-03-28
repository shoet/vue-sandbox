<script setup lang="ts">
import { ref } from 'vue'

const message = ref('hello world')

function reverseMessage(mouseevent: MouseEvent) {
  console.log(mouseevent)
  message.value = message.value.split('').reverse().join('')
}

function notify() {
  alert('hoge')
}
</script>

<template>
  <h1>{{ message }}</h1>
  <button @click="reverseMessage">Reverse Message</button>

  <button @click="message += '!'">append !</button>

  <a href="https://vuejs.org" @click.prevent="notify">link</a>
</template>

<style>
button, a {
  display: block;
  margin-bottom: 1em;
}
</style>
