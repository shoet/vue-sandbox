<script setup lang="ts">
import { ref } from 'vue'
const text = ref('')
const isChecked = ref(false)
const checkedNames = ref<string[]>([])
const radio = ref('One')
const selected = ref('')
const multiSelected = ref<string[]>([])

function submit() {
  console.log(text.value)
  console.log(isChecked.value)
}

function pushName(event: any) {
  console.log(event.target)
  checkedNames.value.push(event.target)
}
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="input-group">
        <h3>Text Input</h3>
        <span><input v-model="text" placeholder="Edit me"> {{ text }}</span>
      </div>
    </div><!-- /.container -->
    <div class="container">
      <div class="input-group">
        <h3>Checkbox</h3>
        <span><input type="checkbox" v-model="isChecked"> Checked: {{ isChecked }}</span>
      </div>
    </div><!-- /.container -->
    <div class="container">
      <div class="input-group">
        <h3>Multi Checkbox</h3>
        <span><input type="checkbox" v-model="checkedNames" value="Jack"> Jack</span>
        <span><input type="checkbox" v-model="checkedNames" value="John"> John</span>
        <span><input type="checkbox" v-model="checkedNames" value="Mike"> Mike</span>
        <p><pre>{{ checkedNames }}</pre></p>
      </div>
    </div><!-- /.container -->
    <div class="container">
      <div class="input-group">
        <h3>Radio</h3>
        <span><input type="radio" v-model="radio" value="One"> One</span><br>
        <span><input type="radio" v-model="radio" value="Two"> Two</span><br>
        Picked: {{ radio }}
      </div>
    </div><!-- /.container -->
    <div class="container">
      <div class="input-group">
        <h3>Select</h3>
        <select v-model="selected">
          <option disabled value="">select one</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span> Selected: {{ selected }}</span>
      </div>
    </div><!-- /.container -->
    <div class="container">
      <div class="input-group">
        <h3>Multi Select</h3>
        <select v-model="multiSelected" multiple style="width: 100px">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ multiSelected }}</span>
        <button @click="submit">Submit</button>
      </div>
    </div><!-- /.container -->
  </main><!-- /.main -->
</template>

<style>
.main {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.container {
  border: 1px solid white;
  margin: 10px;
  padding: 20px;
  width: 300px;
}

h3 {
  font-weight: bold;
}

.input-group {
  margin-bottom: 2em;
}
</style>