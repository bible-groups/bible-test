<template>
  <div class="user">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center my-10">회원 페이지</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-card width="75%" class="mx-auto mb-10">
            <v-card-title class="headline text-center my-4 font-weight-bold">회원 기본정보</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item-content>
                    <v-list-item-title><strong>이 름 : </strong> {{ userName }}</v-list-item-title>
                    <v-list-item-subtitle class="my-5"><strong>이메일 : </strong> {{ userEmail }}</v-list-item-subtitle>
                    <v-list-item-title class="mb-7"><strong>성경공부 그룹명 : </strong> {{ studyGroupName }}</v-list-item-title>
                    <p class="text-sm text-muted font-weight-bold" style="color: red;">* 비밀번호는 개인정보 차원에서 제공하지 않습니다!</p>
                  </v-list-item-content>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card width="75%" class="mx-auto">
            <v-card-title class="headline text-center my-4 font-weight-bold">회원 정보수정</v-card-title>
            <v-card-text>
              <v-form>
                
                <p class="text-center">
                  회원정보 수정은 비밀번호만 수정이 가능합니다. 비밀번호를 재설정하시겠습니까?
                </p>

                <div class="text-center mt-7 mb-3">
                  <v-btn
                    color="secondary"
                    @click="sendResetEmail"
                  >
                    비밀번호 재설정 이메일 보내기
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { auth } from '@/firebase'
import { ref, onMounted } from 'vue';
import {  sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  name: 'UserView',
  setup() {
    const userName = ref('');
    const userEmail = ref('');    
    const studyGroupName = ref('');
    const db = getFirestore();

    // 회원 정보 가져오기
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          userName.value = userData.name;
          userEmail.value = userData.email;
          studyGroupName.value = userData.group;
        } else {
          console.log('No such document!');
        }
      }
    };

    // 비밀번호 재설정 이메일 보내기
    const sendResetEmail = async () => {
      try {
        await sendPasswordResetEmail(auth, userEmail.value);
        alert('비밀번호 재설정 이메일을 보냈습니다. 이메일을 확인해주세요.');
      } catch (error) {
        alert(`비밀번호 재설정 이메일 전송 실패: ${error.message}`);
      }
    };

    // onMounted 시키기
    onMounted(() => {
      fetchUserData();
    });

    return { userName, userEmail, studyGroupName, sendResetEmail };
  }
}
</script>

<style scoped lang="scss">
.user .v-card{
  margin-bottom: 100px !important;
}
</style>
