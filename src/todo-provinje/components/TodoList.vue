<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Todo } from '../interface';
import TodoView from './TodoView.vue';

const todoList = inject("todoList") as Map<number, Todo>;
const remainTodo = computed(
  (): number => {
    let count = 0;
    for (const todo of todoList.values()) {
      if (!todo.do) {
        count++;
      }
    }
    return count;
  }
);
</script>

<template>
  <h1>TODO List</h1>
  <p>残りのタスク: {{ remainTodo }}</p>
  <TodoView 
    v-for="id in todoList.keys()" 
    v-bind:key="id"
    :id="id" 
  />
</template>

<style>
</style>