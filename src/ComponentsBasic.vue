<script setup lang="ts">
import { ref } from 'vue';
import { Content } from './models/model';

import MySection from './components/componentsbasic/MySection.vue';

const contentListAInit = [
  new Content("title1", "description1", "author1", "2023/05/09"),
  new Content("title2", "description2", "author2", "2023/05/09"),
  new Content("title3", "description3", "author3", "2023/05/09"),
]
const contentListA = ref(contentListAInit);
</script>

<template>
  <div class="main">
    <h1 class="main-title">タイトル</h1>
    <div>
      <h2 class="sub-title">セクション1</h2>
      <MySection class="card-item" v-for="content in contentListA" v-bind:key="content.title" 
      :title=content.title :description=content.description :author=content.author :created=content.created />
    </div>
    <div>
      <h2 class="sub-title">セクション2</h2>
    </div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
.card-item {
  margin-bottom: 10px;
}
.card-item:last-child {
  margin-bottom: 0px;
}
</style>