<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center my-10">성경공부 내용검색</h1>
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
        
        <!-- 첨부 파일 다운로드 섹션 추가 -->
        <v-card-text v-if="selectedItem.file" class="pt-0 mt-2">
          <v-divider class="mb-3"></v-divider>
          <div class="d-flex align-center">
            <v-icon color="primary" class="mr-2">mdi-file-document-outline</v-icon>
            <a :href="selectedItem.file" target="_blank" download class="text-primary text-decoration-none">
              {{ getFileName(selectedItem.file) }}
            </a>
          </div>
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
import { db, auth, storage } from '@/firebase'; 
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { ref as storageRef, deleteObject } from 'firebase/storage';

export default {
  name: 'StudyView', 
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
    const searchQuery = ref('');
    const modalOpen = ref(false);
    const selectedItem = ref({});
    const userEmail = ref('');
    const page = ref(1);
    const itemsPerPage = 10;
    const title = ref('');
    const body = ref('');
    const tags = ref('');    

    // 파일명을 추출하는 함수
    function getFileName(url) {
      if (!url) return '';
      // URL에서 파일명 추출 (파일명은 일반적으로 URL의 마지막 부분)
      const urlParts = url.split('/');
      let fileName = urlParts[urlParts.length - 1];
      
      // URL 파라미터 제거 (있을 경우)
      fileName = fileName.split('?')[0];
      
      // URL 인코딩 디코드
      try {
        // decodeURIComponent로 기본 디코딩
        fileName = decodeURIComponent(fileName);
        
        // Firebase Storage URL의 경우 특수 처리 (한글이 %로 인코딩된 경우)
        if (fileName.includes('%')) {
          // 여러 번 디코딩 시도 (중첩 인코딩의 경우)
          let prevFileName = '';
          while (prevFileName !== fileName && fileName.includes('%')) {
            prevFileName = fileName;
            try {
              fileName = decodeURIComponent(fileName);
            } catch (e) {
              break; // 더 이상 디코딩할 수 없으면 중단
            }
          }
        }
      } catch (e) {
        console.error('파일명 디코딩 오류:', e);
      }
      
      // study_files/ 접두사 제거
      if (fileName.startsWith('study_files/')) {
        fileName = fileName.substring('study_files/'.length);
      }
      
      // 타임스탬프 제거 (스토리지에 파일을 저장할 때 추가된 경우)
      // 예: 1742367572355_과정 안내서 (1).PDF -> 과정 안내서 (1).PDF
      const timestampMatch = fileName.match(/^\d+_(.+)$/);
      if (timestampMatch && timestampMatch[1]) {
        fileName = timestampMatch[1];
      }
      
      return fileName;
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

      try {
        // 파일이 있는 경우 스토리지에서 파일 삭제
        if (item.file) {
          try {
            // 파일 URL에서 경로 부분 추출
            const fileUrl = new URL(item.file);
            // URL 경로의 마지막 부분이 Firebase Storage 파일 경로
            const storagePath = decodeURIComponent(fileUrl.pathname.split('/o/')[1].split('?')[0]);
            
            // Storage 참조 생성 및 파일 삭제
            const fileRef = storageRef(storage, storagePath);
            await deleteObject(fileRef);
            console.log('스토리지 파일 삭제 완료:', storagePath);
          } catch (error) {
            console.error('스토리지 파일 삭제 오류:', error);
            // 파일 삭제에 실패해도 계속 진행
          }
        }

        // Firestore에서 문서 삭제
        const postDoc = doc(db, 'posts', item.id);
        await deleteDoc(postDoc);
        
        fetchStudyItems(userEmail.value); // 삭제 후 목록 새로고침
        modalOpen.value = false; // 모달 닫기
      } catch (error) {
        console.error('게시물 삭제 오류:', error);
        alert('게시물 삭제 중 오류가 발생했습니다.');
      }
    }

    // 팝업창 닫기
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
          userEmail.value = user.email;
          fetchStudyItems(user.email);
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
      resetSearch,
      getFileName
    };
  }
}
</script>


<style scoped lang="scss">    
  @media (max-width: 768px) { /* 모바일 화면 크기에 따라 조정 */
    textarea.editable {
      width: 100%; /* 전체 너비 사용 */
      min-height: 150px; /* 최소 높이 설정 */
    }
  }
</style>

