<script setup lang="ts">
import { ref, watch } from 'vue';

class InputModel {
  textAreaModel: string = "";
  radioModel: string = "";
  selectModel: string = "";
  checkboxModel: string = "";
  checkboxMultModel: Array<string> = [];
  selectModelMult: Array<string> = [];
}

const inputModel = ref<InputModel>(new InputModel());

const resultArea = ref('');
const onSubmit = (model: InputModel): void => {
  let resultText = '- textarea:' + '\n' + model.textAreaModel;
  resultText += '\n' + '- radio:' + '\n' + model.radioModel;
  resultText += '\n' + '- select:' + '\n' + model.selectModel;
  resultText += '\n' + '- checkbox:' + '\n' + model.checkboxModel;
  resultText += '\n' + '- checkboxMult:' + '\n' + model.checkboxMultModel.join(',')
  resultText += '\n' + '- selecctMult:' + '\n' + model.selectModelMult.join(',')
  resultArea.value = resultText;
}

watch(inputModel, (newInput: InputModel) => {
  onSubmit(newInput);
}, {deep: true})

</script>

<template>
  <div class="inputArea">
    <section>
      <p>textarea</p>
      <textarea name="" id="" cols="30" rows="5" v-model="inputModel.textAreaModel"></textarea>
    </section>

    <section>
      <p>radio button</p>
      <label><input type=radio value="a" name="radioModel" v-model="inputModel.radioModel">a</label>
      <label><input type=radio value="b" name="radioModel" v-model="inputModel.radioModel">b</label>
      <label><input type=radio value="c" name="radioModel" v-model="inputModel.radioModel">c</label>
    </section>

    <section>
      <p>drop down</p>
      <select v-model="inputModel.selectModel">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </section>

    <section>
      <p>check box</p>
      <label><input type="checkbox" name="" id="" v-model="inputModel.checkboxModel">同意する</label>
      <p>同意の結果: {{ inputModel.checkboxModel }}</p>
    </section>

    <section>
      <p>check box selected</p>
      <label><input type="checkbox" v-model="inputModel.checkboxMultModel" value="macOS">macOS</label>
      <label><input type="checkbox" v-model="inputModel.checkboxMultModel" value="Windows">Windows</label>
      <label><input type="checkbox" v-model="inputModel.checkboxMultModel" value="Linux">Linux</label>
      <label><input type="checkbox" v-model="inputModel.checkboxMultModel" value="iOS">iOS</label>
      <label><input type="checkbox" v-model="inputModel.checkboxMultModel" value="Android">Android</label>
      <p>選択されたOS:{{ inputModel.checkboxMultModel }}</p>
    </section>

    <section>
      <p>selector</p>
      <select multiple v-model="inputModel.selectModelMult">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <p>選択されたOS:{{ inputModel.selectModelMult }}</p>
    </section>

  </div>

  <div class="outputArea">
    <p>== result ==</p>
    <pre>{{ resultArea }}</pre>
  </div>
</template>

<style scoped>
pre {
  text-align: left;
}

.inputArea, .outputArea {
  width: 50%;
  float: left;
}

section {
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>