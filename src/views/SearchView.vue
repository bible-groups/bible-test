<template>
  <div class="search-view">
    <h1 class="text-center mt-14 mb-10">성경공부 및 성경검색</h1>

    <v-container>
      <v-row>
        <v-col cols="12" class="text-center search-menu">
          <v-btn color="primary" @click="currentComponent = 'SearchWord'">성경단어</v-btn>
          <v-btn color="primary" @click="currentComponent = 'SearchBook'">성경장별</v-btn>
          <v-btn color="primary" @click="currentComponent = 'SearchKeyword'">개인키워드</v-btn>
          <v-btn color="primary" @click="currentComponent = 'SearchKeywordGroup'">그룹키워드</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <component :is="currentComponent"></component>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SearchBook from '@/components/SearchBook.vue';
import SearchKeyword from '@/components/SearchKeyword.vue';
import SearchWord from '@/components/SearchWord.vue';
import SearchKeywordGroup from '@/components/SearchKeywordGroup.vue';

export default {
  name: 'SearchView',
  data() {
    return {
      currentComponent: 'SearchWord'
    }
  },
  components: {
    SearchBook,
    SearchKeyword,
    SearchWord, 
    SearchKeywordGroup
  }
}
</script>

<style scoped lang="scss">
  .search-menu {
    .v-btn {
      width: 100px;
      margin: 0 5px;
    }
  }

  @media (max-width: 768px) {
    .search-menu {
      padding: 0 50px;

      .v-btn {
        width: 40%;
        margin: 0 10px 10px;
      }
    }
  }
</style>
