<template>
  <div class="study">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center mt-10">성경공부 내용등록1</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" class="bg-white pa-10 rounded-lg" @submit.prevent>
            <v-text-field
              v-model="studyTitle"
              :rules="[rules.required]"
              label="제목"
              required
              variant="outlined"
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="keywords"
              :rules="[rules.required]"
              label="키워드"
              required
              variant="outlined"
              class="mb-3"
            ></v-text-field>
            <v-textarea
              v-model="studyContent"
              :rules="[rules.required]"
              label="성경공부 내용"
              required
              variant="outlined"
              class="mb-3"
            ></v-textarea>
            
            <!-- key를 추가하여 컴포넌트가 완전히 다시 생성되도록 함 -->
            <div class="file-input-container mb-3">
              <v-file-input 
                :key="fileInputKey"
                v-model="studyFile"
                label="첨부파일" 
                variant="outlined"
                prepend-icon="mdi-paperclip"
              ></v-file-input>
            </div>
            
            <v-row justify="center" class="mt-4">
              <v-btn
                class="mr-3"
                :disabled="!valid"
                color="success"
                @click="submitStudy"
              >
                제출
              </v-btn>
              <v-btn
                color="error"
                @click="manualResetForm"
              >
                초기화
              </v-btn>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth, db, storage } from '@/firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

// 반응형 데이터 정의
const form = ref(null);
const valid = ref(false);
const studyTitle = ref('');
const keywords = ref('');
const studyContent = ref('');
const studyFile = ref(null);
const user = ref(null);
// 파일 입력 컴포넌트를 강제로 리렌더링하기 위한 키
const fileInputKey = ref(0);

// 유효성 검사 규칙
const rules = {
  required: value => !!value || '필수 입력 사항입니다.'
};

// 제출 함수
const submitStudy = async () => {
  if (!form.value || !form.value.validate()) return;
  
  try {
    let fileUrl = null;
    
    // 파일이 첨부된 경우 먼저 Storage에 업로드
    if (studyFile.value) {
      const timestamp = new Date().getTime();
      const fileName = studyFile.value.name;
      // 한글 파일명 처리를 위한 인코딩
      const encodedFileName = encodeURIComponent(`${timestamp}_${fileName}`);
      const fileRef = storageRef(storage, `study_files/${encodedFileName}`);
      
      console.log('업로드할 파일:', studyFile.value);
      console.log('파일 경로:', `study_files/${encodedFileName}`);
      
      try {
        const snapshot = await uploadBytes(fileRef, studyFile.value);
        console.log('파일 업로드 완료:', snapshot);
        fileUrl = await getDownloadURL(snapshot.ref);
        console.log('파일 URL 가져오기 성공:', fileUrl);
      } catch (uploadError) {
        console.error('파일 업로드 오류:', uploadError);
        if (!confirm('파일 업로드에 실패했습니다. 파일 없이 게시물만 등록하시겠습니까?')) {
          throw new Error('사용자가 취소함');
        }
      }
    }
    
    // Firestore에 데이터 저장
    const postData = {
      title: studyTitle.value,
      author: user.value ? user.value.email : '익명',
      createAt: serverTimestamp(),
      tags: keywords.value.split(',').map(tag => tag.trim()),
      body: studyContent.value,
      file: fileUrl
    };
    
    console.log('Firestore에 저장할 데이터:', postData);
    await addDoc(collection(db, 'posts'), postData);
    
    alert('성공적으로 제출되었습니다.');
    manualResetForm();
  } catch (error) {
    console.error('Error submitting post:', error);
    if (error.message !== '사용자가 취소함') {
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    }
  }
};

// 수동 폼 초기화 함수 (form.reset() 사용하지 않음)
const manualResetForm = () => {
  // 모든 필드 수동 초기화
  studyTitle.value = '';
  keywords.value = '';
  studyContent.value = '';
  
  // 파일 입력 컴포넌트 리셋을 위해 key 변경
  studyFile.value = null;
  fileInputKey.value += 1;  // key를 변경하여 컴포넌트 강제 리렌더링
  
  // 유효성 상태 리셋
  valid.value = false;
};

// Firebase 인증 초기화 함수
const initFirebaseAuth = () => {
  onAuthStateChanged(auth, (authUser) => {
    if (authUser) {
      user.value = authUser;
    } else {
      user.value = null;
    }
  });
};

// 컴포넌트 마운트 시 인증 초기화
onMounted(() => {
  initFirebaseAuth();
});
</script>

<style scoped lang="scss">
.study .v-form {
  margin-bottom: 100px !important;
}

.file-input-container {
  width: 100%;
}
</style>

