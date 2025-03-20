<template>
  <div class="search-word">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-form @submit.prevent="search" class="d-flex">
            <v-text-field
              v-model="searchTerm"
              label="검색어를 입력하세요"
              width="85%"
              single-line
              hide-details
              class="mx-auto mb-10"
              variant="outlined"
              append-inner-icon="mdi-magnify"
              rounded
              required
            ></v-text-field>  
            <v-btn
              @click="resetSearch"
              class="rounded-lg ml-2"
              variant="tonal"
              size="x-large"
            >초기화</v-btn>              
          </v-form>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg" variant="outlined">
            <v-card-text>
              <div v-if="paginatedResults.length">
                <v-list>
                  <v-list-item v-for="(result, index) in paginatedResults" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>{{ result.reference }}</v-list-item-title>
                      <v-list-item-subtitle>{{ result.text }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-pagination
                  v-model="page"
                  :length="totalPages"
                  :total-visible="7"
                  color="primary"
                  class="text-center hidden-md-and-down"
                ></v-pagination>
                <v-pagination
                  v-model="page"
                  :length="totalPages"
                  :total-visible="4"
                  color="primary"
                  class="text-center hidden-md-and-up"
                ></v-pagination>
              </div>
              <div v-else>
                검색 결과가 없습니다.
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'; // axios 라이브러리를 가져옴

export default {
  name: 'SearchWord',
  data() {
    return {
      searchTerm: '', // 사용자가 입력한 검색어를 저장
      results: [], // 검색 결과를 저장
      page: 1, // 현재 페이지 번호
      itemsPerPage: 10, // 페이지 당 항목 수
      selectedBook: '', // 선택된 성경책
      selectedChapter: '', // 선택된 장
      bookNames: [], // 성경책 이름 목록
      chapters: {}, // 각 성경책의 장 정보
      bibleData: {}, // 전체 성경 데이터
    };
  },
  computed: {
    filteredResults() {
      let results = [];
      if (this.selectedBook && this.selectedChapter) {
        // 선택된 성경책과 장에 대한 데이터 필터링
        const filteredEntries = this.bibleData.filter(entry =>
          entry.book === this.selectedBook && entry.chapter === this.selectedChapter
        );
        results = filteredEntries.map(entry => ({
          reference: `${entry.book} ${entry.chapter}:${entry.verse}`,
          text: entry.text
        }));
      } else if (this.searchTerm) {
        // 검색어를 포함하는 모든 구절 필터링
        results = this.bibleData.filter(entry =>
          entry.text.includes(this.searchTerm)
        ).map(entry => ({
          reference: `${entry.book} ${entry.chapter}:${entry.verse}`,
          text: entry.text
        }));
      }
      return results.slice(0, 2000); // 최대 2000개의 결과 반환
    },
    totalPages() {
      return Math.ceil(this.filteredResults.length / this.itemsPerPage); // 전체 페이지 수 계산
    },
    paginatedResults() {
      const start = (this.page - 1) * this.itemsPerPage; // 페이지 시작 인덱스
      const end = start + this.itemsPerPage; // 페이지 끝 인덱스
      return this.filteredResults.slice(start, end); // 현재 페이지의 결과 반환
    },
  },
  methods: {
    async loadBibleData() {
      try {
        const response = await axios.get('/db/bible.json'); // 성경 데이터를 서버에서 가져옴
        this.bibleData = response.data; // 가져온 데이터를 저장
        // 성경책 이름 목록을 추출
        this.bookNames = [...new Set(this.bibleData.map(item => item.book))];
      } catch (error) {
        console.error('Error loading Bible data:', error); // 데이터 로딩 실패 시 오류 로그
      }
    },
    search() {
      this.page = 1; // 검색 시 첫 페이지로 설정
      this.results = this.searchBible(this.searchTerm); // 검색 결과 업데이트
    },
    searchBible(searchTerm) {
      return this.bibleData.filter(entry => entry.text.includes(searchTerm)).map(entry => ({
        reference: `${entry.book} ${entry.chapter}:${entry.verse}`,
        text: entry.text
      }));
    },
    fetchChapters() {
      if (this.selectedBook) {
        const chapters = this.bibleData.filter(item => item.book === this.selectedBook)
          .map(item => item.chapter);
        this.chapters[this.selectedBook] = [...new Set(chapters)];
      } else {
        this.chapters[this.selectedBook] = [];
      }
      this.selectedChapter = ''; // 선택된 장 초기화
    },
    resetSearch() {
      this.searchTerm = ''; // 검색어 초기화
      this.selectedBook = ''; // 선택된 성경책 초기화
      this.selectedChapter = ''; // 선택된 장 초기화
      this.results = []; // 결과 초기화
      this.page = 1; // 페이지 번호 초기화
    },
  },
  mounted() {
    this.loadBibleData(); // 컴포넌트 마운트 시 성경 데이터 로드
  },
};
</script>

<style scoped lang="scss">
  .search-word .v-container .v-card{
    padding: 50px 20px !important;
    margin-bottom: 100px;

    .v-pagination{
      margin-bottom: 0 !important;
    }
  }
</style>
