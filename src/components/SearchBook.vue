<template>
  <div class="search-book">
    <v-container>
      <v-row>
        <v-col class="d-flex">
          <v-select
            v-model="selectedBook"
            :items="bookNames"
            label="책을 선택하세요"
            :menu-props="{ maxHeight: '400' }"
            return-object
            item-text="book"
            item-value="book"
            class="rounded-lg" variant="outlined"
          ></v-select>

          <v-select
            v-model="selectedChapter"
            :items="availableChapters"
            label="장을 선택하세요"
            :disabled="!selectedBook"
            :menu-props="{ maxHeight: '400' }"
            return-object
            item-text="chapter"
            item-value="chapter"
            class="rounded-lg mx-4" variant="outlined"
          ></v-select>

          <v-btn 
            @click="fetchChapterContent" 
            :disabled="!selectedBook || !selectedChapter" 
            class="rounded-lg" 
            variant="tonal" 
            size="x-large"
          >검색</v-btn>

          <v-btn
            @click="resetSearch"
            class="rounded-lg ml-2"
            variant="tonal"
            size="x-large"
          >초기화</v-btn>

        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="rounded-lg" variant="outlined">
            <div v-if="chapterContent.length > 0">
              <h2 class="my-7 text-center">{{ selectedBook }} {{ selectedChapter }} 장</h2>
              <ul>
                <li v-for="verse in chapterContent" :key="verse.verse" class="my-3">
                  {{ verse.chapter }}:{{ verse.verse }} {{ verse.text }}
                </li>
              </ul>
            </div>
            <div v-else>
              검색 결과가 없습니다.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchBook',
  data() {
    return {
      bibleData: [],
      bookNames: [],
      selectedBook: '',
      selectedChapter: '',
      availableChapters: [],
      chapterContent: []
    };
  },
  methods: {
    async loadBibleData() {
      try {
        const response = await axios.get('/db/bible.json');
        this.bibleData = response.data;
        this.bookNames = [...new Set(this.bibleData.map(item => item.book))];
      } catch (error) {
        console.error('Error loading Bible data:', error);
      }
    },
    fetchChapterContent() {
      if (this.selectedBook && this.selectedChapter) {
        this.chapterContent = this.bibleData.filter(entry =>
          entry.book === this.selectedBook && entry.chapter === parseInt(this.selectedChapter)
        );
      }
    },
    resetSearch() {
      this.selectedBook = '';
      this.selectedChapter = '';
      this.chapterContent = [];
    }
  },
  watch: {
    selectedBook(newBook) {
      this.selectedChapter = ''; // Reset chapter selection
      this.availableChapters = [...new Set(this.bibleData.filter(item => item.book === newBook).map(item => item.chapter))];
    }
  },
  mounted() {
    this.loadBibleData();
  }
};
</script>

<style scoped>
  ul{
    list-style: none;
  }

  .search-book .v-container .v-card{
    padding: 50px 20px !important;
  }

  @media (max-width: 768px) {
    .search-book .v-col{
      flex-direction: column;
      align-items: center;
    }
    .search-book .v-select{
      width: 100%;
    }
    .search-book .v-btn{
      width: 100%;
      margin-bottom: 20px;
    }
    .search-book .v-btn+.v-btn{
      margin-bottom: 50px;
    }
  }

  .search-book .v-card{
    margin-bottom: 100px !important;
  }

  .search-book .v-btn{
    height: 55px;
    position: relative;
    top: 2px
  }

</style>

