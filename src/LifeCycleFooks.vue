<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onRenderTracked, onRenderTriggered} from 'vue';
import type { DebuggerEvent } from 'vue';

function dateFormatYYYYMMDDHHMISS(date: Date): string {
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  const hh = date.getHours().toString().padStart(2, "0");
  const mi = date.getMinutes().toString().padStart(2, "0");
  const ss = date.getSeconds().toString().padStart(2, "0");
  const sss = date.getMilliseconds().toString().padStart(3, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}.${sss}`;
}

class LogRecord {
  msg: string;
  datetime: Date;

  constructor(msg: string) {
    this.msg = msg;
    this.datetime = new Date();
  }

  datetimeYYYYMMDDHHMISS(): string {
    return dateFormatYYYYMMDDHHMISS(this.datetime);
  }

  format(): string {
    const dateStr = dateFormatYYYYMMDDHHMISS(this.datetime);
    return `[${dateStr}] ${this.msg}`;
  }

  consoleFlush(): void {
    console.log(this.format());
  }
}

const logList = ref<LogRecord[]>([]);

function logFlushConsole(): void {
  logList.value.map(
    (log: LogRecord): void => {
      log.consoleFlush();
    }
  )
}

onBeforeMount ( 
  (): void => {
    logList.value.push(new LogRecord("onBeforeMount"));
  }
);
onMounted(
  (): void => {
    logList.value.push(new LogRecord("onMounted"));
  }
);
onBeforeUpdate(
  (): void => {
    logList.value.push(new LogRecord("onBeforeUpdate"));
  }
);
onUpdated(
  (): void => {
    logList.value.push(new LogRecord("onUpdated"));
  }
);
// onRenderTracked(
//   (e: DebuggerEvent): void => {
//     logList.value.push(new LogRecord("onRenderTracked"));
//   }
// );
// onRenderTracked(
//   (e: DebuggerEvent): void => {
//     logList.value.push(new LogRecord("onRenderTracked"));
//   }
// )
</script>

<template>
  <p>ログ</p>
  <template v-for="log in logList" v-bind:key="log.datetimeYYYYMMDDHHMISS()">
    <div>{{ log.format() }}</div>
  </template>
  <button v-on:click="logFlushConsole">flush</button>
</template>

<style>
</style>