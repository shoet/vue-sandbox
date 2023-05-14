<script setup lang="ts">
import { ref, computed } from 'vue';
import type { DefineComponent } from 'vue';

import ComponentsA from './components/ComponentsA.vue';
import ComponentsB from './components/ComponentsB.vue';
import ComponentsC from './components/ComponentsC.vue';

const componentList = [ComponentsA, ComponentsB, ComponentsC];
const currentComponentIndex = ref(0);
const currentComponent = computed(
  (): DefineComponent => {
    return componentList[currentComponentIndex.value] as DefineComponent;
  }
)

const onClick = (): void => {
  let idx = currentComponentIndex.value+1;
  if (idx == 3) {
    idx = 0;
  }
  currentComponentIndex.value = idx;
}

</script>

<template>
  <div class="container">
    <!-- KeepAliveによってunmountedが呼ばれずこの部分のDOMが初期化されずに状態が維持されるjkj:w
     -->
    <KeepAlive>
      <component v-bind:is="currentComponent"/>
    </KeepAlive>
  </div>
  <button v-on:click="onClick">切り替え</button>
</template>

<style scoped>
.container {
  min-height: 200px;
  border: 1px solid black;
}
</style>