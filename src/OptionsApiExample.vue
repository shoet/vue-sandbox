<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  data() {
    return {
      x: Math.round(Math.random() * 10),
      y: Math.round(Math.random() * 10),
      msg: "",
    }
  },
  computed: {
    area(): number {
      return this.x * this.y;
    }
  },
  methods: {
    update(): void {
      this.x = Math.round(Math.random() * 10);
      this.y = Math.round(Math.random() * 10);
    }
  },
  watch: {
    x(newVal, oldVal): void {
      this.msg = `xに変更がありました。[${oldVal} → ${newVal}]`
    }
  },
  created(): void {
    console.log("created");
  },
  beforeCreate(): void {
    console.log("beforeCreate");
  },
  beforeMount(): void {
    console.log("beforeMount");
  },
  mounted(): void {
    console.log("mounted");
  },
  beforeUpdate(): void {
    console.log("beforeUpdate");
  },
  updated(): void {
    console.log("updated");
  },
})
</script>

<template>
  <p>{{ `${x} * ${y} = ${area}` }}</p>
  <button v-on:click="update">update</button>
  <p>{{ msg }}</p>
</template>
<style>
</style>