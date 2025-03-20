<template>
  <div class="home">
    <v-container>      
      <v-row>
        <v-col class="px-10">
          <h1>바이블그룹 앱 소개</h1>
      
          <h2>성경을 더 깊이 탐구하세요!</h2>

          <p>바이블그룹은 여러분이 성경을 더 쉽게 탐구하고, 체계적으로 공부할 수 있도록 돕는 도구입니다. 이 앱을 통해 성경의 지혜를 더욱 깊이 이해하고, 자신만의 공부 방법을 찾아보세요.</p>

          <h3>[ 주요 기능 ]</h3>

          <ul>
            <li><span>단어 검색 기능:</span> 원하는 단어를 입력하면 성경 전체에서 해당 단어를 검색할 수 있습니다. 필요한 구절을 빠르고 정확하게 찾아보세요.</li>
            <li><span>해쉬태그 기능:</span> 각 구절에 해쉬태그를 등록하고, 해쉬태그로 검색할 수 있습니다. 자신만의 성경 태그를 만들어 체계적으로 관리해보세요.</li>
            <li><span>작성한 글 보기 및 필터링:</span> 성경을 공부하면서 작성한 글을 모아보고, 필요에 따라 필터링할 수 있습니다. 중요한 내용을 놓치지 않고 복습할 수 있습니다.</li>
            <li><span>성경공부 내용 등록:</span> 자신이 성경을 공부한 내용을 앱에 등록하여 기록하고, 언제든지 다시 볼 수 있습니다. 꾸준한 학습과 성장을 도와드립니다.</li>
          </ul>

          <p>이제, 바이블그룹과 함께 성경의 세계를 더 깊이 탐구하고, 신앙 생활을 더욱 풍성하게 만들어보세요!</p>
          <p class="text-center"><v-btn to="/blog" color="primary">BLOG 바로가기</v-btn></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default ({
  name: 'HomeView',
  components: {
    
  },
});
</script>

<style scoped lang="scss">
  .home {
    padding: 20px 20px 180px;

    h1 {margin: 30px 0 50px;}
    h2 {margin-bottom: 10px;}
    h3 {margin: 70px 0 20px;}
    ul{
      padding-left: 20px;
      
      li{
        margin-bottom: 20px;

        span{
          display: block;
          font-weight: bold; 
          margin-bottom: 5px;
        }
      }
    }
    p{margin-top: 50px;}
    .text-center{margin-top: 80px;}
  }
</style>
