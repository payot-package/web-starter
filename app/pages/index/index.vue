<script setup lang="ts">
import Test from './components/test.vue';
import * as Rx from 'rxjs';

const called = () => {
  console.log('test');
}

const progress = () => Rx.lastValueFrom(Rx.of(null).pipe(
  Rx.tap(() => useModal().loading('로딩중...')),
  Rx.delay(1000),
  Rx.tap(() => useModal().loading('수정중 ...')),
  Rx.delay(1000),
  Rx.finalize(() => useModal().loading(false))
));

</script>

<template>
  <UButton @click="useModal().confirm({ title: '확인', message: '확인하시겠습니까?' }).then(called)">확인</UButton>
  <UButton @click="progress()">로딩</UButton>
  <UButton @click="useNotify({ title: '알림', description: '알림입니다' })">알림</UButton>
  <Test />
</template>