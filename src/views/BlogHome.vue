<template>
  <div class="blog-home">
    <v-container>      
      <v-row>
        <v-col class="px-10">
          <h1>신앙의 기초 앱 소개</h1>
          <h2>신앙의 기초를 다지세요!</h2>
          <p>신앙의 기초 앱은 초보 신자들이 신앙의 기본적인 내용을 쉽게 이해하고, 체계적으로 공부할 수 있도록 돕는 도구입니다. 이 앱을 통해 신앙의 기초를 더욱 깊이 이해하고, 자신만의 신앙 여정을 시작해보세요.</p>
          <h3>[ 주요 소개 ]</h3>
          <ul>
            <li><span>성서이해 :</span> 성경의 기본 개념과 이야기를 쉽게 이해할 수 있는 설명을 제공합니다. 성경의 중요한 인물과 사건을 배우고, 신앙의 기초를 탄탄히 다져보세요.</li>
            <li><span>성서마당 :</span> 다른 초보 신자들과 신앙에 대한 질문과 답변을 주고받을 수 있는 공간입니다. 함께 고민하고 성장하는 커뮤니티의 일원이 되어보세요.</li>
            <li><span>카페신학 :</span> 신앙의 다양한 주제에 대한 깊이 있는 논의를 제공합니다. 신앙의 기초를 넘어서 더 깊은 이해를 원한다면, 이곳에서 신학적인 토론을 즐겨보세요.</li>
            <li><span>신학레시피 :</span> 신앙 생활을 위한 실천적인 조언과 가이드를 제공합니다. 일상에서 신앙을 어떻게 실천할지에 대한 유용한 팁을 얻어보세요.</li>
            <li><span>말씀새김 :</span> 하루의 시작과 끝을 하나님의 말씀으로 채워보세요. 성경 구절을 묵상하며, 신앙의 기초를 굳건히 다질 수 있습니다.</li>
          </ul>
          <p>이제, 신앙의 기초 앱과 함께 신앙 생활을 시작하고, 더욱 풍성하게 만들어보세요!</p>
          <p class="text-center"><v-btn to="/home" color="primary">BIBLE GROUP 바로가기</v-btn></p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BlogHome',
};
</script>

<style lang="scss" scoped>
.blog-home {
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