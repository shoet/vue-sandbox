<script setup lang="ts">
import { inject, computed } from 'vue';
import type { Todo } from '../interface';

interface Props {
  id: number;
}
const props = defineProps<Props>();

const todoList = inject("todoList") as Map<number, Todo>;
const todo = computed(
  (): Todo => {
    return todoList.get(props.id) as Todo;
  }
)

</script>

<template>
  <div class="container">
    <div class="todo__inner">
      <div class="todo__check">
        <input type="checkbox" v-model="todo.do">
      </div>
      <div class="todo__body">
        <div class="todo__title">
          {{ todo.todo }}
        </div>
        <div class="todo__detail">
          {{ todo.detail }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 10px 3px;
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 3px;
  box-shadow: 0px 1px 1px 1px;
}
.todo__inner {
  display: flex;
}
.todo__check {
  flex-grow: 1;
  text-align: center;
}
.todo__body {
  flex-grow: 5;
}
.todo__title {
  font-size: 1.5rem;
  font-weight: bold;
}
.todo__detail {
  font-size: 0.8rem;
  color: gray;
}
</style>