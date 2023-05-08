<script setup lang="ts">
import { ref, computed } from 'vue';
const moguraList = [1,2,3,4,5,6,7,8,9]
const moguraListRef = ref(moguraList);
const moguraImgPath = "https://gogen-yurai.jp/wp-content/uploads/6447014_675.jpg";
const soilImgPath = "https://www.hyponex.co.jp/plantia/wp/wp-content/uploads/2016/12/2.jpg";
const moguraActiveId = ref(1);
const totalScore = ref(0);

const ActivePanelClass = {
  Active: "active-panel--active",
  InActive: "active-panel--inactive",
};
const activePanelClass = ref(ActivePanelClass.InActive);

interface Mogura {
  id: number;
  // isActive: boolean;
}

const onHammer = (): void => {
  // moguraActiveId.value = 0;
  activePanelClass.value = ActivePanelClass.Active;
  totalScore.value += 200;
}

setInterval((): void => {
  setTimeout(function(){
    moguraActiveId.value = 0;
  }, 800);
  const rand = Math.floor(Math.random() * 9) + 1;
  activePanelClass.value = ActivePanelClass.InActive;
  moguraActiveId.value = rand;
}, 900)
</script>

<template>
  <p>スコア: {{ totalScore }}</p>
  <div class="container">
    <div class="mogura-area" v-for="mogura in moguraListRef" v-bind:key="mogura">
      <img class="mogra-area__img" v-bind:src="soilImgPath" alt="">
      <template v-if="mogura == moguraActiveId">
      <div v-bind:class="'active-panel ' + activePanelClass">
        <img class="mogra-area__img" v-bind:src="moguraImgPath" alt="" v-on:click="onHammer">
      </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

html {
  overflow: scroll;
}


.container {
  width: 600px;
  height: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border: solid 1px black;
  display: flex;
  flex-flow: wrap;
}

.mogura-area {
  border-collapse: collapse;
  border: solid 1px black;
  width: 33%;
  text-align: center;
  position: relative;
}

.active-panel {
  position: absolute;
  display: block;
  top: 0px;
  width: 100%;
  height: 100%;
}
.active-panel--inactive {
  background-color: rgba(246, 255, 0, 0.315);
}
.active-panel--active {
  background-color: rgba(255, 0, 128, 0.315);
}

.mogra-area__img {
  width: 100%;
  height: auto;
  vertical-align: center;
  object-fit: contain;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
</style>