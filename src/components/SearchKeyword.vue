<template>
  <div class="search-keyword">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center">
          <v-text-field
            width="85%"
            v-model="searchQueryKeyword"
            label="검색"
            single-line
            hide-details
            class="mx-auto mb-2"
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
      <v-row>
        <v-col>
          <h4 class="pl-7 mb-4 d-flex flex-column">
            <div>
              * 개인 검색 :
              <v-btn size="small" variant="outlined" class="ml-7" @click="dialog = true">키워드 삭제</v-btn>
            </div> 
            <div class="mt-3"><span class="hidden-md-and-down">'개인키워드 검색' 에서만 사용자 등록한 내용을 키워드와 태그를 선택하여  검색할 수 있습니다.</span> 등록한 키워드를 삭제하려면  '키워드삭제' 버튼을 클릭하세요.</div>
          </h4>
          
          <v-chip-group v-model="selectedTags" multiple class="mb-12 px-8">
            <v-chip v-for="tag in tags" :key="tag" class="ma-2" @click="addSearchQuery(tag)">
              {{ tag }}  
            </v-chip>
          </v-chip-group>

          <v-dialog v-model="dialog">
            <v-card class="dialog-keyword">
              <v-card-title class="mb-5"><h5>키워드 삭제</h5></v-card-title>
              <v-card-text>
                <div class="mb-7 text-center">삭제할 키워드를 입력하고 '삭제' 버튼을 클릭하세요.</div>
                <v-text-field
                  v-model="keywordToDelete"
                  label="삭제할 키워드 입력"
                  variant="outlined"
                  rounded
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="blue darken-1" @click.stop="deleteTag(keywordToDelete)">삭제</v-btn>
                <v-btn color="grey" @click="dialog = false">취소</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
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
                    <v-list-item-title class="font-weight-bold" style="font-size: 16px;">
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
                  <v-list-item-subtitle>{{ item.createAt.toDate().toLocaleDateString() }}</v-list-item-subtitle>                  
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
        <div class="text-right my-7">
          <v-btn size="small" icon @click="modalOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-title class="mb-3 text-center">
          <input v-model="title" class="text-center w-100 editable" height="auto">
        </v-card-title>
        <v-card-subtitle class="text-right mb-10">
          {{ selectedItem.createAt.toDate().toLocaleDateString() }}
        </v-card-subtitle>
        <v-card-text>
          <!-- <textarea rows="15" v-model="body" class="w-100 editable"></textarea>             -->
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
            <!-- <div>
              <v-btn color="primary" variant="outlined" @click="modalOpen = false">창닫기</v-btn>
            </div> -->
          </v-card-actions>          
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { db, auth } from '../firebase'; // Adjust the path according to your project structure
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'SearchKeyword',
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
    }
  },
  setup() {
    const studyItems = ref([]);
    const searchQueryKeyword = ref('');
    const modalOpen = ref(false);
    const selectedItem = ref({});
    const userEmail = ref('');
    const page = ref(1);
    const itemsPerPage = 10;
    const title = ref('');
    const body = ref('');
    const tags = ref([]);
    const selectedTags = ref([]);
    const dialog = ref(false);
    const keywordToDelete = ref('');

    // 사용자의 태그 목록을 가져오는 함수
    async function fetchTags(email) {
      try {
        // console.log('Fetching tags for email:', email); 
        const postsQuery = query(collection(db, 'posts'), where('author', '==', email));
        const querySnapshot = await getDocs(postsQuery);

        const tagsSet = new Set(); // 중복 제거를 위한 Set

        querySnapshot.forEach(doc => {
          const postTags = doc.data().tags; // 각 문서의 태그 필드
          if (postTags && Array.isArray(postTags)) {
            postTags.forEach(tag => tagsSet.add(tag)); // Set에 태그 추가
          }
        });

        tags.value = Array.from(tagsSet); // Set을 배열로 변환하여 할당
        // console.log('Fetched tags:', tags.value); 

      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    }
    

    // 항목을 가져오는 함수
    async function fetchStudyItems(email) {
      // 데이터 초기화
      title.value = '';
      body.value = '';

      const q = query(
        collection(db, 'posts'),
        where('author', '==', email),
        orderBy('createAt', 'desc') // 'createAt' 필드를 기준으로 내림차순 정렬
      );
      const querySnapshot = await getDocs(q);
      studyItems.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    // 모달을 열어 선택된 항목의 상세 정보를 보여주는 함수
    function openModal(item) {
      selectedItem.value = item;
      title.value = item.title; // 선택된 아이템의 제목을 title ref에 할당
      body.value = item.body; // 선택된 아이템의 내용을 body ref에 할당
      modalOpen.value = true;
    }

    // 편집된 내용을 업데이트하는 함수
    async function editItem() {
      const postDoc = doc(db, 'posts', selectedItem.value.id);
      await updateDoc(postDoc, {
        title: title.value, // title ref에서 가져온 새로운 제목
        body: body.value // body ref에서 가져온 새로운 내용
      });
      fetchStudyItems(userEmail.value); // 수정 후 목록 새로고침
      modalOpen.value = false; // 모달 닫기
    }

    // 태그목록에서 태그 삭제
    async function deleteTag(tagToDelete) {
      console.log('tagToDelete : ', tagToDelete);

      // 로그인한 사용자의 모든 게시물을 조회
      const q = query(collection(db, 'posts'), where('author', '==', userEmail.value));
      const querySnapshot = await getDocs(q);
      let isTagDeleted = false; // 태그 삭제 여부를 추적하는 플래그

      // 각 게시물의 태그 배열을 검사하여 tagToDelete가 포함되어 있는지 확인
      querySnapshot.forEach(async (doc) => {
        const postTags = doc.data().tags;
        if (postTags.includes(tagToDelete)) { // tagToDelete가 포함되어 있다면
          const updatedTags = postTags.filter(tag => tag !== tagToDelete); // tagToDelete를 제외한 나머지 태그들
          await updateDoc(doc.ref, { tags: updatedTags }); // 문서를 업데이트
        }
        isTagDeleted = true; // 태그가 삭제되었음을 표시
      });

      // 태그 삭제 후 목록 새로고침
      if (isTagDeleted) {
        await fetchTags(userEmail.value); 
      }

      alert('태그가 정상적으로 삭제되었습니다!');
      keywordToDelete.value = ''; // 삭제할 키워드 입력창을 비우기
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
      if (searchQueryKeyword.value) {
        const searchTerms = searchQueryKeyword.value.toLowerCase().split(/\s*,\s*|\s+/);
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

    // 태그를 클릭했을 때 검색어에 추가하는 함수
    const addSearchQuery = (tag) => {
      searchQueryKeyword.value += (searchQueryKeyword.value ? ', ' : '') + tag;
    };

    // 검색 쿼리를 초기화하는 함수
    function resetSearch() {
      searchQueryKeyword.value = ''; // 검색 쿼리를 빈 문자열로 설정
    }

    // 사용자 상태 변경 감지 및 초기 데이터 로드
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userEmail.value = user.email;
          fetchStudyItems(user.email);
          fetchTags(user.email);
        } else {
          // 사용자가 로그인하지 않은 경우 처리
        }
      });
    });

    return {
      studyItems,
      searchQueryKeyword,
      modalOpen,
      selectedItem,
      filteredStudyItems,
      paginatedItems,
      page,
      totalPages,
      title,
      body,
      tags,
      selectedTags,
      dialog,
      keywordToDelete,
      resetSearch,
      openModal,
      editItem,
      deleteItem,
      deleteTag,
      cancelEdit,
      addSearchQuery,  
    };
  }
}
</script>

<style scoped>  
  .search-keyword h4 div.mt-3{
    font-size: 14px;
    color: #8e8e8e;
    padding-left: 10px;
    font-weight: 400;
  }

  /* Modal Area */ 
  .search-keyword .v-dialog > .v-overlay__content > .v-card{
    padding: 20px 70px 50px;
  }

  .search-keyword .v-dialog>.v-overlay__content>.v-card .dialog-keyword{
    width: 50%;
  }

  @media screen and (max-width: 768px) {      
    .search-keyword h4 div.mt-3{ padding-left: 0;} 
    .search-keyword .v-dialog > .v-overlay__content > .v-card{
      width: 95%;
      padding: 50px 20px;
    }

    .search-keyword .v-dialog>.v-overlay__content>.v-card .dialog-keyword{
      width: 90%;
    }

    textarea.editable {
      width: 100%; /* 전체 너비 사용 */
      min-height: 150px; /* 최소 높이 설정 */
    }
  }
</style>
