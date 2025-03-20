<template>
  <div class="signup">
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-card>
            <v-card-title class="headline text-center font-weight-bold my-4">회원가입</v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="이 름"
                  v-model="name"
                  prepend-icon="mdi-account"
                  variant="outlined"
                  type="text"
                  required
                ></v-text-field>
                <v-text-field
                  label="이메일"
                  v-model="email"
                  prepend-icon="mdi-email"
                  variant="outlined"
                  type="email"
                  required
                ></v-text-field>
                <v-text-field
                  label="비밀번호"
                  v-model="password"
                  prepend-icon="mdi-lock"
                  variant="outlined"
                  type="password"
                  required
                ></v-text-field>
                <v-text-field
                  label="성경공부 그룹명"
                  v-model="groupName"
                  prepend-icon="mdi-account-multiple"
                  variant="outlined"
                  type="text"
                  required
                ></v-text-field>
                <div class="text-center mt-7 mb-3">
                  <v-btn
                    :disabled="!valid"
                    color="primary"
                    class="mr-4"
                    @click="handleSignup"
                  >
                    가입하기
                  </v-btn>
                  <v-btn
                    color="info"
                    @click="reset"
                  >
                    초기화
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn text color="primary" @click="switchToLogin">
                이미 계정이 있으신가요? 로그인
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { auth, db } from '@/firebase'
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

export default {
  name: 'SignUpView',
  setup() {
    const ADMIN_EMAIL = "admin@gmail.com"; // 관리자 이메일 상수로 정의
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const groupName = ref([]);
    const router = useRouter();

    const valid = computed(() => {
      return email.value.includes('@') && password.value.length >= 6;
    });

    const handleSignup = async () => {
      try {
        // 1. 입력받은 groupName이 있는 경우 회원가입 진행
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        // 3. Firestore에 사용자 문서 추가
        const userDoc = {
          name: name.value, 
          email: email.value,
          // password: password.value,
          group: [groupName.value], // groupName을 배열로 처리
          role: email.value === ADMIN_EMAIL ? 'admin' : 'user' // role 설정
        };
        
        await setDoc(doc(db, 'users', user.uid), userDoc);

        alert('회원가입 성공!');
        router.push({ name: 'home' });
      } catch (error) {
        // alert(`회원가입 실패: ${error.message}`);
        let errorMessage = '회원가입에 실패했습니다.'
        if (error.code === 'auth/email-already-in-use') {
          errorMessage = '이미 사용 중인 이메일입니다. 다른 이메일을 사용해주세요.'
        } else if (error.code === 'auth/weak-password') {
          errorMessage = '비밀번호는 최소 6자 이상이어야 합니다.'
        } else if (error.code === 'auth/invalid-email') {
          errorMessage = '잘못된 이메일 형식입니다.'
        }
        alert(errorMessage)
      }
    };

    const reset = () => {
      name.value = '';
      email.value = '';
      password.value = '';
      groupName.value = '';
    };

    const switchToLogin = () => {
      router.push({ name: 'login' });
    };

    return { name, email, password, groupName, valid, handleSignup, reset, switchToLogin };
  }
}
</script>



<style scoped lang="scss">
  .signup .v-card{
    width: 55%;
    margin: 150px auto 100px;
  }
  
  @media screen and (max-width: 768px) {
    .signup .v-card{
      width: 80%;
      margin: 60px auto 100px;
    }
  }

  @media screen and (max-width: 480px) {
    .signup .v-card{
      width: 90%;
    }
  }
</style>
