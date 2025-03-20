<template>
  <div class="admin">
    <v-container>
      <v-row>
        <v-col>
          <h1 class="text-center my-10">관리자 페이지</h1>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12">
          <v-card width="100%" class="mx-auto mb-10">
            <v-card-title class="headline text-center my-4 font-weight-bold">관리자 기본정보</v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item-content>
                  <v-list-item-title><strong>이 름 : </strong> {{ userName }}</v-list-item-title>
                  <v-list-item-subtitle class="my-5"><strong>이메일 : </strong> {{ userEmail }}</v-list-item-subtitle>
                  <v-list-item-title class="mb-7"><strong>성경공부 그룹명 : </strong> {{ studyGroupName }}</v-list-item-title>
                  <p class="text-sm text-muted font-weight-bold" style="color: red;">
                    * 회원들의 비밀번호는 개인정보 차원에서 제공하지 않습니다!<br> 
                    * 관리자는 회원들의 이메일과 성경공부그룹명만 확인가능하며, 수정은 성경공부 그룹명만 수정할 수 있습니다!<br> 
                    * 관리자는 회원들이 이메일과 성경공부그룹명 분실 후 확인 요청시, 이메일 확인과 성경공부그룹명만 확인 가능하며, 비밀번호 재설정은 회원 개별로 로그인 후 가능합니다!<br>
                  </p>
                </v-list-item-content>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card width="100%" class="mx-auto mb-6">
            <v-card-title class="headline text-center my-4 font-weight-bold">관리자 정보수정</v-card-title>
            <v-card-text>
              <v-form>
                <p class="text-center">
                  관리자정보 수정은 비밀번호만 수정이 가능합니다. 비밀번호를 재설정하시겠습니까?
                </p>
                <div class="text-center mt-7 mb-3">
                  <v-btn
                    color="secondary"
                    @click="sendResetEmail"
                  >
                    비밀번호 재설정 이메일 보내기
                  </v-btn>
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" class="rounded-lg" variant="outlined">
          <v-card width="100%" class="mx-auto pa-0 user-list">
            <v-card-title class="text-center my-4 font-weight-bold">유저 목록</v-card-title>
            <v-card-text>
              <v-list lines="two">
                <v-list-item
                  v-for="user in paginatedResults"
                  :key="user.id"
                >
                  <template v-slot:prepend>
                    <v-avatar color="amber">
                      <v-icon color="white">mdi-account</v-icon>
                    </v-avatar>
                  </template>
                  <template v-slot:default>
                    <v-list-item-content class="d-flex flex-column">
                      <v-list-item-title class="mr-10 font-weight-bold">{{ user.data.name }}</v-list-item-title>
                      <div class="d-flex user-align">
                        <v-list-item-subtitle class="hidden-sm-and-down hidden-md-and-down" style="font-size: 16px; width: 250px;">{{ user.data.email }}</v-list-item-subtitle>
                        <input v-model="user.data.group" class="editable" style="width: 100%;" height="auto">
                      </div>
                    </v-list-item-content>
                  </template>
                  <template v-slot:append>
                    <v-list-item-action class="d-flex flex-grow-1">
                      <v-btn
                        size="small"
                        color="primary"
                        @click="openModal(user)">
                        그룹명 수정
                      </v-btn>
                      <v-btn
                        class="mx-3"
                        size="small"
                        color="error"
                        @click.stop="deleteUser(user.id)"
                      >회원삭제</v-btn>
                      <v-btn
                        size="x-small"
                        color="grey"
                        icon="mdi-cancel"
                        @click.stop="cancelEdit(user.id)"
                        style="display: none;"
                      ></v-btn>
                    </v-list-item-action>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <v-pagination
            v-model="page"
            :length="totalPages"
            :total-visible="7"
            color="primary"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>

    <!-- 성경공부 그룹명 수정팝업창 -->
    <v-dialog v-model="modalOpen" class="w-75">
      <v-card class="overflow-y-auto rounded-lg">
        <div class="text-right">
          <v-btn size="small" icon @click="modalOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-title class="my-3 text-center">
          성경공부 그룹명 수정
        </v-card-title>        
        <v-card-text>
          <input v-model="newGroupName" placeholder="새로운 그룹명 입력" class="editable input-group" style="width: 100%;" />
          <ol class="text-sm text-muted mt-7" style="color: red; list-style: none; font-size:14px">
            <li>* 그룹명은 하나씩 등록해주세요! 그룹명은 최대 5개까지 입력 가능합니다!</li>
            <li>* 여러 그룹명을 등록시 구분은 콤마(,)로 해주세요!</li>
            <li>* 그룹명은 중복되지 않아야 합니다.</li>
            <li>* 그룹명을 초기화하면 기존 그룹명이 삭제되며, 초기화 후 새로운 그룹명을 재등록해주세요!</li>
          </ol>
        </v-card-text>
        <v-card-actions class="mt-15 d-flex flex-column justify-center">
          <div class="mb-5">
            <v-btn 
              size="small"
              color="primary"
              variant="outlined"
              @click="updateGroupName">
              그룹명 수정
            </v-btn>   
            <v-btn 
              size="small"
              color="error"
              variant="outlined"
              @click="resetGroupName">
              그룹명 초기화
            </v-btn>
            <v-btn
              size="small"
              color="grey"
              variant="outlined"
              @click.stop="closeModal">
              취 소
            </v-btn>
          </div>
        </v-card-actions>          
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { auth } from '@/firebase';
import { ref, computed, onMounted } from 'vue';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore'; 

export default {
  name: 'AdminView',
  setup() {
    // 반응형 참조 변수들을 선언합니다.
    const newGroupName = ref('');
    const users = ref([]);
    const editingUserId = ref(null);
    const isAdminEmail = ref(false);
    const userName = ref('');
    const userEmail = ref('');    
    const studyGroupName = ref([]);
    const db = getFirestore(); 
    const itemsPerPage = ref(10); // 페이지 당 표시할 아이템 수
    const page = ref(1); // 현재 페이지 번호
    const modalOpen = ref(false);
    const editingUser = ref(null);

    // 현재 로그인한 사용자의 데이터를 가져오는 함수
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          userName.value = userData.name;
          userEmail.value = userData.email;
          studyGroupName.value = userData.group;
          isAdminEmail.value = userData.role === 'admin';
        } else {
          console.log('No such document!');
        }
      }
    };
    

    // 모든 사용자 데이터를 가져오는 함수
    const fetchUsers = async () => {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersRef);
      users.value = querySnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
    };

    const totalPages = computed(() => {
      return Math.ceil(users.value.length / itemsPerPage.value); // 전체 페이지 수 계산
    });

    const paginatedResults = computed(() => {
      const start = (page.value - 1) * itemsPerPage.value; // 페이지 시작 인덱스
      const end = start + itemsPerPage.value; // 페이지 끝 인덱스
      return users.value.slice(start, end); // 현재 페이지의 결과 반환
    });

    // 새 그룹 이름이 유효한지 확인하는 계산된 속성
    const valid = computed(() => {
      return newGroupName.value.trim().length > 0;
    });

    // 새로운 스터디 그룹을 추가하는 함수
    const addStudyGroup = async () => {
      if (!isAdminEmail.value) {
        alert('관리자 권한이 필요합니다.');
        return;
      }
      try {
        const usersRef = collection(db, 'users');
        await addDoc(usersRef, { group: newGroupName.value });
        alert('성경공부 그룹이 추가되었습니다!');
        newGroupName.value = '';
      } catch (error) {
        alert(`그룹 추가 실패: ${error.message}`);
      }
    };

    // 입력 필드를 초기화하는 함수
    const reset = () => {
      newGroupName.value = '';
    };

    // 사용자 정보를 수정하는 함수
    const editUser = async (userId, newGroup) => {
      if (!isAdminEmail.value) {
        alert('관리자 권한이 필요합니다.');
        return;
      }
      try {
        const userRef = doc(db, 'users', userId);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          let currentGroups = docSnap.data().group || [];
          // 새로운 그룹명을 배열에 추가하기 전에, 새로운 그룹명이 문자열인지 확인하고, 쉼표로 분리된 여러 그룹명을 처리
          const newGroups = newGroup.split(',').map(group => group.trim()).filter(group => group.length > 0 && !currentGroups.includes(group));
          const updatedGroups = currentGroups.concat(newGroups);
          await updateDoc(userRef, {
            group: updatedGroups
          });
          await fetchUsers();
          alert('사용자 정보가 업데이트 되었습니다.');
        } else {
          alert('사용자 데이터를 찾을 수 없습니다.');
        }
      } catch (error) {
        alert(`사용자 정보 업데이트 실패: ${error.message}`);
      }
    };

    // 사용자를 삭제하는 함수
    const deleteUser = async (userId) => {
      if (!isAdminEmail.value) {
        alert('관리자 권한이 필요합니다.');
        return;
      }
      try {
        await deleteDoc(doc(db, 'users', userId));
        await fetchUsers();
        alert('유저가 삭제되었습니다!');
      } catch (error) {
        alert(`유저 삭제 실패: ${error.message}`);
      }
    };

    // 편집 모드를 취소하는 함수
    const cancelEdit = (userId) => {
      if (editingUserId.value === userId) {
        editingUserId.value = null;
      }
    };


    // 팝업창 열기
    const openModal = (user) => {
      editingUser.value = user;
      newGroupName.value = ''; // 팝업창을 열 때 새 그룹명 필드 초기화
      modalOpen.value = true;
    };


    // 팝업창 닫기
    function closeModal() {
      modalOpen.value = false;
    }

    // 그룹명 업데이트 함수
    const updateGroupName = async () => {
      if (editingUser.value) {
        await editUser(editingUser.value.id, newGroupName.value);
        closeModal();
      }
    }

    // 그룹명 초기화 함수
    const resetGroupName = async () => {
      if (editingUser.value) {
        try {
          const userRef = doc(db, 'users', editingUser.value.id);
          await updateDoc(userRef, {
            group: []
          });
          await fetchUsers();
          alert('그룹명이 초기화되었습니다.');
          closeModal();
        } catch (error) {
          alert(`그룹명 초기화 실패: ${error.message}`);
        }
      }
    };

    // 컴포넌트가 마운트될 때 실행되는 함수
    onMounted(async () => {
      await fetchUserData();
      if (isAdminEmail.value) {
        await fetchUsers();
      }
    });

    // setup 함수에서 반환하는 객체
    return { 
      newGroupName, 
      valid, 
      isAdminEmail, 
      users, 
      userName, 
      userEmail, 
      studyGroupName, 
      totalPages, 
      paginatedResults, 
      page, 
      itemsPerPage, 
      modalOpen, 
      editingUserId, 
      editUser, 
      deleteUser, 
      cancelEdit, 
      fetchUserData, 
      addStudyGroup, 
      reset, 
      closeModal, 
      openModal, 
      updateGroupName, 
      resetGroupName 
    };
  }
};
</script>


<style scoped>
.v-dialog .input-group {
  border: 1px solid #333;
  padding: 10px 5px;
}
.v-card-actions .v-btn {
  margin: 0 1px;
}


@media (max-width: 959px) {
  .v-dialog{
    width: 90% !important;
  }
  .input-group{
    width: 100%;
  }
  .v-dialog .v-card-title{
    font-size: 25px !important;
  }
}

@media (max-width: 548px) {  
  .v-dialog .v-card-title{
    font-size: 24px !important;
  }
  .v-card-actions .v-btn {
    width: 100%;
    margin: 0 auto 10px !important;
  }
}
</style>