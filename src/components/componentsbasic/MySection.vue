<script setup lang="ts">
import { ref, defineProps } from 'vue';
import type { Content } from '../../models/model';

interface Property {
  title: string,
  description: string,
  author: string,
  created: string
}

defineProps<Property>();

</script>

<template>
  <div class="card">
    <div class="card__inner">
      <div class="card__title">{{ title }}</div>
      <div class="card__body">
        <div class="card__description">{{ description }}</div>
        <div class="card__attributes">
          <div class="card__created">{{ created }}</div>
          <div class="card__author">{{ author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid black;
  border-radius: 5px;
}
.card__inner {
  padding: 10px;
}
.card__title {
  font-size: 3rem;
}
.card__attributes {
  display: flex;
  font-weight: bold;
  color: gray;
  font-size: 1rem;
}
.card__created {
  display: inline-block;
}
.card__author {
  display: inline-block;
  padding-left: 20px;
}
</style>