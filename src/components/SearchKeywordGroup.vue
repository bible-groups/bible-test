<template>
  <div class="search-keyword-group">
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
          <h4 class="pl-7 mb-7">
            * 그룹 검색 : <br class="hidden-md-and-up"><span>사용자의 속한 그룹원들이 등록한 내용을 키워드를 통해 검색할 수 있습니다.</span>
          </h4>
          <!-- <v-chip-group v-model="selectedTags" multiple class="mb-10">
            <v-chip v-for="tag in tags" :key="tag" class="ma-2" @click="addSearchQuery(tag)">
              {{ tag }}  
            </v-chip>
          </v-chip-group> -->
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
        <div class="text-right my-7">
          <v-btn size="small" icon @click="modalOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-title class="mb-3 text-center">
          <input v-model="title" class="text-center w-100 editable" height="auto">
        </v-card-title>
        <v-card-subtitle class="text-right mb-10">
          {{ selectedItem.createAt.toDate().toLocaleDateString() }} <strong class="ml-3">{{ selectedItem.authorName }}</strong>
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
import { collection, query, where, getDocs, getDoc, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'SearchKeywordGroup',
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
    const userIsAdmin = ref(false); 


    // 사용자의 태그 목록을 가져오는 함수
    async function fetchTags(email) {
      try {
        console.log('Fetching tags for email:', email); // 이메일 로그 추가
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
        console.log('Fetched tags:', tags.value); // 콘솔 로그 추가

      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    }
    
    // async function fetchStudyItems(email) {
    //   // 사용자의 이메일을 기준으로 사용자 정보를 조회하여 그룹명을 가져옵니다.
    //   // 해당 그룹명을 가진 모든 사용자의 이메일을 조회합니다.
    //   // 조회된 이메일 목록을 사용하여 해당 사용자들의 게시물을 가져옵니다.
    //   title.value = '';
    //   body.value = '';

    //   // 사용자의 그룹명을 가져오는 쿼리
    //   const userDoc = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
    //   const userGroup = userDoc.docs[0].data().group;

    //   // 해당 그룹명과 동일한 그룹에 속한 사용자들의 목록을 가져오는 쿼리
    //   const groupQuery = query(collection(db, 'users'), where('group', '==', userGroup));
    //   const groupQuerySnapshot = await getDocs(groupQuery);

    //   // 그룹에 속한 모든 사용자의 이메일을 배열로 추출
    //   const groupEmails = groupQuerySnapshot.docs.map(doc => doc.data().email);

    //   // 그룹에 속한 사용자들의 게시물을 가져오는 쿼리
    //   const postsQuery = query(
    //     collection(db, 'posts'),
    //     where('author', 'in', groupEmails),
    //     orderBy('createAt', 'desc')
    //   );
    //   const querySnapshot = await getDocs(postsQuery);

    //   const itemsWithAuthorNames = await Promise.all(querySnapshot.docs.map(async doc => {
    //     const postData = doc.data();
    //     const userDoc = await getDocs(query(collection(db, 'users'), where('email', '==', postData.author)));
    //     const userName = userDoc.docs[0].data().name; // 'name' 필드를 가져옵니다.
    //     return {
    //       id: doc.id,
    //       ...postData,
    //       authorName: userName // 'authorName' 필드에 사용자 이름 할당
    //     };
    //   }));
    //   studyItems.value = itemsWithAuthorNames;
    // }


    async function fetchStudyItems(email) {
      title.value = '';
      body.value = '';

      try {
        // 사용자의 그룹 목록을 가져오는 쿼리
        const userDocSnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', email)));
        if (userDocSnapshot.empty) {
          console.error('사용자 문서를 찾을 수 없습니다.');
          return;
        }

        const userDocData = userDocSnapshot.docs[0].data();
        const userGroups = userDocData.group; // 'group' 필드에 사용자가 속한 그룹 목록이 배열로 있다고 가정

        if (!Array.isArray(userGroups)) {
          console.error('userGroups는 배열이 아닙니다:', userGroups);
          return;
        }

        // 그룹 목록을 순회하며 각 그룹에 속한 사용자의 이메일을 가져오는 쿼리
        const groupEmailsSet = new Set();
        for (const group of userGroups) {
          const groupQuerySnapshot = await getDocs(query(collection(db, 'users'), where('group', 'array-contains', group)));
          groupQuerySnapshot.docs.forEach(doc => groupEmailsSet.add(doc.data().email));
        }

        const groupEmails = Array.from(groupEmailsSet);

        if (groupEmails.length === 0) {
          console.error('그룹에 속한 사용자의 이메일이 없습니다.');
          return;
        }

        // 그룹에 속한 사용자들의 게시물을 가져오는 쿼리
        const postsQuery = query(
          collection(db, 'posts'),
          where('author', 'in', groupEmails),
          orderBy('createAt', 'desc')
        );
        const querySnapshot = await getDocs(postsQuery);

        const itemsWithAuthorNames = await Promise.all(querySnapshot.docs.map(async doc => {
          const postData = doc.data();
          const userDocSnapshot = await getDocs(query(collection(db, 'users'), where('email', '==', postData.author)));
          const userName = userDocSnapshot.docs[0].data().name; // 'name' 필드를 가져옵니다.
          return {
            id: doc.id,
            ...postData,
            authorName: userName // 'authorName' 필드에 사용자 이름 할당
          };
        }));
        studyItems.value = itemsWithAuthorNames;
      } catch (error) {
        console.error('Error fetching study items:', error);
      }
    }


    // 모달을 열어 선택된 항목의 상세 정보를 보여주는 함수
    function openModal(item) {
      selectedItem.value = item;
      title.value = item.title; // 선택된 아이템의 제목을 title ref에 할당
      body.value = item.body; // 선택된 아이템의 내용을 body ref에 할당
      modalOpen.value = true;
    }

    // 편집된 내용을 업데이트하는 함수
    // async function editItem() {
    //   const postDoc = doc(db, 'posts', selectedItem.value.id);
    //   await updateDoc(postDoc, {
    //     title: title.value, // title ref에서 가져온 새로운 제목
    //     body: body.value // body ref에서 가져온 새로운 내용
    //   });
    //   fetchStudyItems(userEmail.value); // 수정 후 목록 새로고침
    //   modalOpen.value = false; // 모달 닫기
    // }
    async function editItem() {
      // 관리자이거나 글 작성자인 경우 수정 가능
      if (userEmail.value === selectedItem.value.author || userIsAdmin.value) {
        const postDoc = doc(db, 'posts', selectedItem.value.id);
        await updateDoc(postDoc, {
          title: title.value,
          body: body.value
        });
        fetchStudyItems(userEmail.value);
        modalOpen.value = false;
      } else {
        alert("수정 권한이 없습니다.");
      }
    }

    // 선택된 항목을 삭제하는 함수
    // async function deleteItem() {
    //   const item = selectedItem.value;
    //   if (!item || !item.id) {
    //     console.error("아이템이 정의되지 않았거나 ID가 없습니다.");
    //     return;
    //   }
    //   const postDoc = doc(db, 'posts', item.id);
    //   await deleteDoc(postDoc);
    //   fetchStudyItems(userEmail.value); // 삭제 후 목록 새로고침
    //   modalOpen.value = false; // 모달 닫기
    // }
    async function deleteItem() {
      // 관리자이거나 글 작성자인 경우 삭제 가능
      if (userEmail.value === selectedItem.value.author || userIsAdmin.value) {
        const postDoc = doc(db, 'posts', selectedItem.value.id);
        await deleteDoc(postDoc);
        fetchStudyItems(userEmail.value);
        modalOpen.value = false;
      } else {
        alert("삭제 권한이 없습니다.");
      }
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
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            userIsAdmin.value = userDoc.data().isAdmin || false;
          }

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
      userIsAdmin,
      fetchStudyItems,
      resetSearch,
      openModal,
      editItem,
      deleteItem,
      cancelEdit,
      addSearchQuery
    };
  }
}
</script>

<style scoped>  
  .search-keyword-group h4 span{
    font-size: 14px;
    color: #8e8e8e;
    padding-left: 10px;
  }

  /* Modal Area */ 
  .search-keyword-group .v-dialog > .v-overlay__content > .v-card{
    padding: 20px 70px 50px;
  }
  
  /* Textarea Scroll Remove */
  @media (max-width: 768px) { /* 모바일 화면 크기에 따라 조정 */

    .search-keyword-group h4 span{
      padding-left: 0;
    }

    textarea.editable {
      width: 100%; /* 전체 너비 사용 */
      min-height: 100%; /* 최소 높이 설정 */
    }
  }
</style>
