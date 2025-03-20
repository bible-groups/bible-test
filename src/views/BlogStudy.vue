<template>
  <div class="blog-study">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center mt-10">성경공부 내용등록</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-form ref="form" v-model="valid" class="bg-white pa-10 rounded-lg">
            <v-text-field
              v-model="studyTitle"
              :rules="[rules.required]"
              label="제목"
              required
              variant="outlined"
              class="mb-3"
            ></v-text-field>
            <!-- <v-text-field
              v-model="keywords"
              :rules="[rules.required]"
              label="키워드"
              required
              variant="outlined"
              class="mb-3"
            ></v-text-field> -->
            <v-textarea
              v-model="studyContent"
              :rules="[rules.required]"
              label="성경공부 내용"
              required
              variant="outlined"
              class="mb-3"
            ></v-textarea>

            <!-- 카테고리 라디오버튼 -->
            <h3 class="mb-3 mt-12 mb-5 text-center">[ 글등록 카테고리 ]</h3>
            <div class="radio-group">
              <label><input type="radio" v-model="category" value="성서이해"> 성서이해</label>
              <label><input type="radio" v-model="category" value="성서마당"> 성서마당</label>
              <label><input type="radio" v-model="category" value="카페신학"> 카페신학</label>
              <label><input type="radio" v-model="category" value="신학레시피"> 신학레시피</label>
              <label><input type="radio" v-model="category" value="말씀새김"> 말씀새김</label>
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
                @click="resetForm"
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

<script>
import { auth, db } from '@/firebase'; 
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default {
  name: 'BlogStudy',
  data() {
    return {
      valid: false,
      studyTitle: '',
      category: '',
      studyContent: '',
      user: null,
      rules: {
        required: value => !!value || '필수 입력 사항입니다.'
      }
    };
  },
  methods: {
    submitStudy() {
      if (this.$refs.form.validate()) {
        const blogData = {  
          title: this.studyTitle,
          author: this.user.email,
          createAt: serverTimestamp(),
          category: this.category,
          body: this.studyContent
        };
        addDoc(collection(db, 'blogs'), blogData)
          .then(() => {
            alert('성공적으로 제출되었습니다.');
            this.resetForm();
          })
          .catch(error => {
            console.error('Error submitting post:', error);
            alert('제출에 실패했습니다. 다시 시도해주세요.');
          });
      }
    },
    resetForm() {
      this.$refs.form.reset();
      this.studyTitle = '';
      this.category = '';
      this.studyContent = '';
    },
    initFirebaseAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    }
  },
  mounted() {
    this.initFirebaseAuth();
  }
};
</script>

<style scoped lang="scss">
  .blog-study .v-form{
    margin-bottom: 100px !important;
  }

  .blog-study h3{
    font-size: 1rem;
  }

  .blog-study .radio-group{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;

    label{
      margin-right: 30px;
    }
  }

  @media (max-width: 768px) {
    .blog-study .radio-group{
      flex-direction: column;
      width: 130px;
      margin: 20px auto 50px;
      
      input{
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
  }
</style>

