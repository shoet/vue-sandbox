<script setup lang="ts">
</script>

<template>
  <div class="block">
    <div class="block__title">
      title
    </div>
    <div class="block__content">
      content
    </div>
    <div class="block__bikou">
      <slot name="bikou"></slot>
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<style scoped>
.block {
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}

.block__title {
  font-size: 2rem;
  font-weight: bold;
  background-color: green;
}

.block__content {
  color: gray;
}

.block__bikou {
  background-color: yellow;
  font-weight: bold;
}

</style>