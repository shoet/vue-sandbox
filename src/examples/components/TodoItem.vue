<script setup lang="ts">

interface TODO {
    text: string;
}

const props = defineProps<{
  todo: TODO
}>()

</script>
<template>
  <li>{{ todo.text }}</li>
</template>