<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Ref } from 'vue';
import SlotExampleChild from './components/SlotExampleChild.vue';
import SlotFallbackExampleChild from './components/SlotFallbackExampleChild.vue';
import SlotExampleChilde2Vue from './components/SlotExampleChild2.vue';
import type { Member } from './interface';

const name = ref("taro");

const comment = ref("");

// TODO
const onClick = (): void => {
  commentList.value.push(comment.value);
  comment.value = "";
}
const commentList: Ref<string[]> = ref([]);

const memberListInit: Map<number, Member> = new Map(
  [
    {id: 1, name: "aaaa"},
    {id: 2, name: "bbbb", status: "生存確認"},
    {id: 3, name: "cccc"},
  ].map((member) => [member.id, member])
);
const memberList = ref(memberListInit);

const bikouSlot = (member: Member): string => {
  if (member.status != undefined) {
    return "bikou"
  }
  return "default"
}
// xss
// <a onmouseover=alert(document.cookie)>click me!</a>
</script>

<template>
  <div class="container">
    <h1>状況確認</h1>
    <SlotExampleChild :name="name">
      <p>健康</p>
      <!-- 名前付きslot -->
      <template v-slot:comment>
        <!-- 動的なHTMLを渡す -->
        <ul>
          <li v-for="comment in commentList">{{ comment }}</li>
        </ul>
      </template>
    </SlotExampleChild>
    <div class="post-area">
      <input type="text" placeholder="コメント" v-model="comment">
      <button v-on:click="onClick">投稿</button>
    </div>
    <SlotFallbackExampleChild>
      <p>親からコンテンツ注入</p>
    </SlotFallbackExampleChild>
    <SlotFallbackExampleChild/>
    <SlotFallbackExampleChild :name="'fuga'">
      <p>{{ name }}</p>
    </SlotFallbackExampleChild>
    <SlotExampleChilde2Vue v-for="[id, member] in memberList" v-bind:key="id">
      <template v-slot:[bikouSlot(member)]>{{ member.status }}</template>
    </SlotExampleChilde2Vue>
    <!-- <SlotExampleChilde2Vue>
      <template v-slot:bikou>備考を注入</template>
    </SlotExampleChilde2Vue>
    <SlotExampleChilde2Vue>
      <template v-slot:default>備考なし</template>
    </SlotExampleChilde2Vue> -->
  </div>
</template>

<style scoped>
.container {
  width: 1230px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
.post-area {
  display: block;
  margin-bottom: 10px;
}
</style>