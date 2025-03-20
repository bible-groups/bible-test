<template>
  <div class="resource">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center my-10">성경공부 자료검색</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="d-flex">
          <v-text-field
            width="85%"
            v-model="searchQuery"
            label="검색"
            single-line
            hide-details
            class="mb-10"           
            variant="outlined"
            append-inner-icon="mdi-magnify"
            rounded
          ></v-text-field>
          <v-btn
            @click="resetSearch"
            class="rounded-lg ml-2"
            variant="tonal"
            size="x-large"
          >초기화</v-btn>
        </v-col>
      </v-row>
      <div class="v-row">
        <div class="v-col">
          <h4 class="pl-7 mb-4">
              * 카테고리 검색 : <span class="hidden-md-and-down">등록한 내용을 카테고리를 지정한 키워드와 태그를 선택하여 검색할 수 있습니다.</span>
          </h4>
          <v-chip-group v-model="selectedTags" multiple class="mb-12 px-8">
            <v-chip v-for="searchKeyword in searchKeywords" :key="searchKeyword" class="ma-2" @click="searchByKeyword(searchKeyword)">
              {{ searchKeyword }}  
            </v-chip>
          </v-chip-group>
        </div>
      </div>
      <v-row>
        <v-col>
          <v-card width="100%" class="mx-auto pa-0 rounded-lg" variant="outlined">
            <v-list lines="two">
              <v-list-item
                v-for="item in paginatedItems"
                :key="item.id"
                @click="openModal(item)"
              >
                <template v-slot:prepend>
                  <v-avatar color="amber">
                    <v-icon color="white">mdi-clipboard-text</v-icon>
                  </v-avatar>
                </template>

                <template v-slot:default>
                  <v-list-item-content class="d-flex flex-column">
                    <v-list-item-title>
                      {{ item.title.replace(/<\/?[^>]+(>|$)/g, "") }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-left hidden-md-and-down" style="font-size: 16px;">
                      {{ (item.body.length > 30 ? item.body.substring(0, 50) + '...' : item.body).replace(/<\/?[^>]+(>|$)/g, "") }}
                    </v-list-item-subtitle>
                    <v-list-item-subtitle class="text-left hidden-md-and-up" style="font-size: 16px;">
                      {{ (item.body.length > 30 ? item.body.substring(0, 20) + '...' : item.body).replace(/<\/?[^>]+(>|$)/g, "") }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </template>
                
                <template v-slot:append>
                  <v-list-item-subtitle>{{ item.createAt.toDate().toLocaleDateString() }} <strong class="ml-3">{{ item.authorName }}</strong></v-list-item-subtitle>                  
                </template>
              </v-list-item>
            </v-list>            
          </v-card>          
        </v-col>
      </v-row>
      <v-row>
        <v-col>
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
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="modalOpen" width="100%">
      <v-card class="overflow-y-auto rounded-lg">
        <div class="text-right">
          <v-btn size="small" icon @click="modalOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-title class="my-3 text-center">
          <input v-model="title" class="text-center w-100 editable" height="auto">
        </v-card-title>
        <v-card-subtitle class="text-right mb-10">
          {{ selectedItem.createAt.toDate().toLocaleDateString() }}
        </v-card-subtitle>
        <v-card-text>
          <textarea :rows="calculateRows(body)" v-model="body" class="w-100 editable"></textarea>
        </v-card-text>
        <v-card-actions class="mt-15 d-flex flex-column justify-center">
            <div class="mb-5">
              <v-btn
                size="small"
                color="primary"
                icon="mdi-pencil"
                @click.stop="editItem(item)"
              ></v-btn>
              <v-btn
                class="mx-3"
                size="small"
                color="error"
                icon="mdi-delete"
                @click.stop="deleteItem()"
              ></v-btn>          
              <v-btn
                size="small"
                color="grey"
                icon="mdi-cancel"
                @click.stop="cancelEdit(item)"
              ></v-btn>
            </div>
          </v-card-actions>          
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import { ref, computed, onMounted} from 'vue';
import { db, auth } from '@/firebase'; 
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'ResourceView', 
  data() {
    return {
      searchKeywords: ['신약', '구약', '아브라함', '하나님', '창조', '땅']
    }
  },
  methods: {
    calculateRows(text) {
      const lines = text.split('\n');
      let totalRows = lines.length;
      for (let line of lines) {
        totalRows += Math.floor(line.length / 120); // 80자가 넘어가면 추가 행 계산
      }
      return Math.max(15, totalRows); // 최소 15행을 보장
    },
    adjustTextareaHeight(event) {
      const textarea = event.target;
      textarea.style.height = 'auto'; // 높이를 자동으로 조절
      textarea.style.height = textarea.scrollHeight + 'px'; // 스크롤 높이만큼 높이 설정
    },
    searchByKeyword(keyword) {
      this.searchQuery = keyword; 
      const searchTerms = keyword.toLowerCase();
      this.filteredStudyItems = this.studyItems.filter(item => {
        return item.title.toLowerCase().includes(searchTerms) ||
              item.body.toLowerCase().includes(searchTerms) ||
              (Array.isArray(item.tags) && item.tags.some(tag => tag.toLowerCase().includes(searchTerms)));
      });
    }
  },
  setup() {
    const ADMIN_EMAIL = "admin@gmail.com"; // 관리자 이메일 상수로 정의
    const studyItems = ref([]);
    const searchQuery = ref('');
    const modalOpen = ref(false);
    const selectedItem = ref({});
    const userEmail = ref('');
    const page = ref(1);
    const itemsPerPage = 10;
    const title = ref('');
    const body = ref('');
    const tags = ref('');    


    // 항목을 가져오는 함수
    async function fetchStudyItems() {
      // 데이터 초기화
      title.value = '';
      body.value = '';

      const q = query(
        collection(db, 'posts'),
        where('author', '==', ADMIN_EMAIL),
        orderBy('createAt', 'desc') // 'createAt' 필드를 기준으로 내림차순 정렬
      );
      const querySnapshot = await getDocs(q);
      studyItems.value = querySnapshot.docs.map(doc => {
        const data = doc.data();
        const authorName = data.author === ADMIN_EMAIL ? '관리자' : data.authorName;
        return {
          id: doc.id,
          title: data.title,
          body: data.body,
          authorName: authorName, // 조건에 따라 '관리자'로 설정
          createAt: data.createAt
        };
      });
    }

    // 모달을 열어 선택된 항목의 상세 정보를 보여주는 함수
    function openModal(item) {
      selectedItem.value = item;
      title.value = item.title; // 선택된 아이템의 제목을 title ref에 할당
      body.value = item.body; // 선택된 아이템의 내용을 body ref에 할당
      modalOpen.value = true;
    }

    // 편집된 내용을 업데이트하는 함수
    function updateTitle(event) {
      title.value = event.target.innerText;
    }
    
    function updateBody(event) {
      body.value = event.target.innerText;
    }

    // 선택된 항목을 수정하는 함수
    async function editItem() {
      const postDoc = doc(db, 'posts', selectedItem.value.id);
      await updateDoc(postDoc, {
        title: title.value, // title ref에서 가져온 새로운 제목
        body: body.value // body ref에서 가져온 새로운 내용
      });
      fetchStudyItems(userEmail.value); // 수정 후 목록 새로고침
      modalOpen.value = false; // 모달 닫기
    }

    // 선택된 항목을 삭제하는 함수
    async function deleteItem() {
      const item = selectedItem.value;
      if (!item || !item.id) {
        console.error("아이템이 정의되지 않았거나 ID가 없습니다.");
        return;
      }
      const postDoc = doc(db, 'posts', item.id);
      await deleteDoc(postDoc);
      fetchStudyItems(userEmail.value); // 삭제 후 목록 새로고침
      modalOpen.value = false; // 모달 닫기
    }

    // 수정이나 삭제를 취소하는 함수
    function cancelEdit() {
      modalOpen.value = false;
    }

    // 검색 쿼리에 따라 항목을 필터링하는 함수
    const filteredStudyItems = computed(() => {
      if (searchQuery.value) {
        const searchTerms = searchQuery.value.toLowerCase().split(/\s*,\s*|\s+/);
        return studyItems.value.filter(item => {
          return searchTerms.some(term =>
            item.title.toLowerCase().includes(term) ||
            item.body.toLowerCase().includes(term) || 
            (Array.isArray(item.tags) && item.tags.some(tag => tag.toLowerCase().includes(term)))
          );
        });
      }
      return studyItems.value;
    });

    // Paginate filtered items
    const paginatedItems = computed(() => {
      const start = (page.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const items = filteredStudyItems.value.slice(start, end);
      return items;
    });

    // Calculate total pages for pagination
    const totalPages = computed(() => {
      return Math.ceil(filteredStudyItems.value.length / itemsPerPage);
    });

    // 검색 쿼리를 초기화하는 함수
    function resetSearch(){
      searchQuery.value = '';
    }

    // 사용자 상태 변경 감지 및 초기 데이터 로드
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          fetchStudyItems();
        } else {
          // 사용자가 로그인하지 않은 경우 처리
        }
      });

    });

    return {
      studyItems,
      searchQuery,
      modalOpen,
      selectedItem,
      filteredStudyItems,
      paginatedItems,
      page,
      totalPages,
      title,
      body,
      tags,
      openModal,
      updateTitle,
      updateBody,
      editItem,
      deleteItem,
      cancelEdit,
      resetSearch
    };
  }
}
</script>


<style scoped lang="scss">    
  .resource h4 span{
    font-size: 14px;
    color: #8e8e8e;
    padding-left: 10px;
    font-weight: 400;
  }

  @media (max-width: 768px) { /* 모바일 화면 크기에 따라 조정 */
    textarea.editable {
      width: 100%; /* 전체 너비 사용 */
      min-height: 150px; /* 최소 높이 설정 */
    }
  }
</style>