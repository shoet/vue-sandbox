<script setup lang="ts">
import { provide, reactive } from 'vue';
import type { Todo } from './interface';
import TodoList from './components/TodoList.vue';

const todoList: Map<number, Todo> = new Map(
  [
    {id: 1, todo: "aaa", detail: "aaaa", do: false},
    {id: 2, todo: "bbb", detail: "bbbb", do: false},
    {id: 3, todo: "ccc", detail: "cccc", do: false},
  ]
  .map((todo) => [todo.id, todo])
  );

provide("todoList", reactive(todoList));

</script>

<template>
  <TodoList />
</template>

<style>
</style>