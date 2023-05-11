<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from '@/components/TodoItem.vue'

const groceryList = ref([
  {id: 0, text: 'Vegetables'},
  {id: 1, text: 'Cheese'},
  {id: 2, text: 'Whater else humans'}
])
</script>

<template>
  <ol>
    <TodoItem 
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"></TodoItem>
  </ol>
</template>

<style>
</style>