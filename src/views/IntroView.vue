<template>
  <div class="intro">
    <v-container>
      <v-row>
        <v-col>
          <div class="intro-content">
            <div><img src="/images/logo.png" alt="Bible Groups Logo" class="intro-logo"></div>
            <h2>BIBLE GROUPS</h2>
            <p class="mb-15">바이블그룹스과 함께 성경의 세계를 더 깊이 탐구하고,<br> 신앙 생활을 더욱 풍성하게 만들어보세요!</p>
            <v-btn to="/home" class="btn border" variant="tonal" append-icon="mdi-arrow-right-thin-circle-outline" size="large">시작하기</v-btn>
            <v-btn to="/blog" class="btn border" variant="tonal" append-icon="mdi-arrow-right-thin-circle-outline" size="large">블로그</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'IntroView',
  setup() {
    // 소개 페이지 스크립트를 여기에 추가하세요.
  }
}
</script>

<style scoped lang="scss">
  .intro {
    height: 100vh;
    overflow: hidden;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #942EFB;
  }
  .intro .intro-content {
    color: #fff;
    text-align: center;

    img{
      width: 100px;
    }
    h2{
      margin:30px 0 50px;
    }
  }

  @media (max-width: 768px) {
    .intro .intro-content h2 {
      font-size: 1.5rem;
    }
    .intro .intro-content p {
      font-size: 1.2rem;

      br{
        display: none;
      }
    }
  }
</style>
