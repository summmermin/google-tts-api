<script setup lang="ts">
import {postData} from "../api/index.ts"
import {computed, ref} from 'vue';

const inputText = ref('')
const data = computed(() => {
  return {
    "voice": {
      "languageCode": "ko-KR"
    },
    "input": {
      "text": inputText.value
    },
    "audioConfig": {
      "audioEncoding": "mp3"
    }
  }
})

console.log(data.value)

const playSound = async () => {
  try {
    const response = await postData(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${import.meta.env.VITE_ENV_KEY}`, data.value);
    console.log(response, "res", data.value);
    // audiocontent 오는거 소리 그대로 재생할 수 있게 만들기
    const audioFile = new Audio();
    let audioBlob = base64ToBlob(response.audioContent, "mp3");
    audioFile.src = window.URL.createObjectURL(audioBlob);
    audioFile.playbackRate = 1; //재생속도
    audioFile.play();
    inputText.value = '';
  } catch (error: any) {
    console.log(error, 'ERRRRRRRRR!!!!!!!!!!!!')
  }
};

// testFun 클릭 시 data 내용 post 형태로 구글 api 에 전달 && inputText 초기화

function base64ToBlob(base64: any, fileType: any) {
  let typeHeader = "data:application/" + fileType + ";base64,"; // base64 헤더 파일 유형 정의
  let audioSrc = typeHeader + base64;
  let arr = audioSrc.split(",");
  let array = arr[0].match(/:(.*?);/);
  let type: any
  let mime = (array && array.length > 1 ? array[1] : type) || type;
  // url헤더 제거하고 btye로 변환
  let bytes = window.atob(arr[1]);
  // 예외를 처리하고 0보다 작은 ASCII 코드를 0보다 큰 값으로 변환
  let ab = new ArrayBuffer(bytes.length);
  // 뷰 생성(메모리에 직접): 8비트 부호 없는 정수, 길이 1바이트
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: mime
  });
}
</script>

<template>
  <div class="home-container">
    <textarea id="testInput" rows="5" cols="20" v-model="inputText"></textarea>
    <button @click="playSound()">소리재생</button>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
}
</style>
