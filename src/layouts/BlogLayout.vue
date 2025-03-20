<template>
  <v-layout>
    <!-- App Bar : Header Area -->
    <v-app-bar :elevation="2" color="blue" class="pr-4 d-flex justify-space-between" v-if="currentView !== 'IntroView'">
      <div class="logo flex-grow-1 d-flex align-items-center justify-content-start">
        <v-app-bar-nav-icon class="hidden-md-and-up ml-2" @click="drawer = !drawer" v-if="isLoggedIn"></v-app-bar-nav-icon>
        <router-link to="/blog" class="text-white text-decoration-none">
          <v-app-bar-title class="py-3">BIBLE BLOG</v-app-bar-title>
        </router-link>
      </div>
      <nav class="gnb hidden-sm-and-down flex-grow-1">
        <template v-if="isLoggedIn">
          <router-link v-for="menu in menus" :key="menu.name" :to="menu.path">
            {{ menu.name }}
          </router-link>
        </template>
      </nav>
      <div class="icon-group flex-grow-1 text-right">
        <span class="welcome-message mr-2 hidden-md-and-down" v-if="isLoggedIn && user.email">{{ user.name }}님, 환영합니다!</span>
        <v-btn to="/blog" class="ml-4" v-if="!isLoggedIn">
          <v-icon size="25">mdi-home</v-icon>
        </v-btn>
        <v-btn to="/blog-study" v-if="isLoggedIn && role === 'admin'"><v-icon size="25">mdi-pencil</v-icon></v-btn>
        <v-btn @click="handleLogout" v-if="isLoggedIn">
          <v-icon size="26">mdi-account-arrow-right-outline</v-icon>
        </v-btn>
        <v-btn to="/blog-login" v-else>
          <v-icon size="26">mdi-account-arrow-left-outline</v-icon>
        </v-btn>
        <v-btn to="/blog-signup" v-if="!isLoggedIn">
          <v-icon size="23">mdi-auto-fix</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- App Bar : Sidebar Area -->
    <v-navigation-drawer color="grey-lighten-4" class="text-start hidden-md-and-up" v-model="drawer" v-if="isLoggedIn">
      <v-list nav class="sidebar-menu-items">
        <v-list-item v-for="(link, index) in links" :key="index" :to="link.path" class="cursor-pointer">
          <v-icon class="mr-5">{{ link.icon }}</v-icon> <span class="font-weight-bold">{{ link.name }}</span>
        </v-list-item>
      </v-list>
      <v-divider class="my-10"></v-divider>
      <v-list v-if="role === 'admin'">
        <v-list-item prepend-icon="mdi-account-circle">USERS</v-list-item>
        <v-list-item><span class="welcome-message">환영합니다.<br> {{ user.name }}님!</span></v-list-item>
      </v-list>
      <v-list v-else>
        <v-list-item prepend-icon="mdi-account-circle">USERS</v-list-item>
        <v-list-item><span class="welcome-message" v-if="isLoggedIn && user.email">{{ user.name }}님<br>환영합니다!</span></v-list-item>
      </v-list>  
    </v-navigation-drawer>

    <!-- App Bar : Footer Area -->
    <v-footer class="bg-grey-lighten-4 flex-column" :app="true">
      <p class="py-5 font-weight-medium">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </v-footer>
  </v-layout>

  <router-view/>
  
</template>

<script>
import { auth, db } from '@/firebase';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default {
  name: 'BlogLayout',
  data: () => ({ 
    open: [],    
  }),
  setup() {
    const router = useRouter();
    const user = ref(null);
    const isLoggedIn = ref(false);
    const drawer = ref(false);
    const role = ref('');

    const links = ref([
      { name: '홈', path: '/blog',  icon: 'mdi-home' },
      { name: '성서이해', path: '/bible-understand', icon: 'mdi-book-open' },
      { name: '성서마당', path: '/bible-forum', icon: 'mdi-book-open' },
      { name: '카페신학', path: '/cafe-theology', icon: 'mdi-book-open' },
      { name: '신학레시피', path: '/theology-recipe', icon: 'mdi-book-open' },
      { name: '말씀새김', path: '/word-meditation', icon: 'mdi-book-open' },
      { name: '바이블그룹', path: '/home', icon: 'mdi-account-multiple-outline' },
    ]);
    const menus = ref([
      { name: '홈', path: '/blog', active: false },
      { name: '성서이해', path: '/bible-understand', active: false },
      { name: '성서마당', path: '/bible-forum', active: false },
      { name: '카페신학', path: '/cafe-theology', active: false },
      { name: '신학레시피', path: '/theology-recipe', active: false },
      { name: '말씀새김', path: '/word-meditation', active: false },
      { name: '바이블그룹', path: '/home', active: false },
    ]);

    /**
     * Firebase 인증 상태 변화를 모니터링하고 관리하는 함수
     *
     * 1. Firebase 인증 상태 변화 리스너를 등록하여 사용자의 로그인/로그아웃 상태를 추적합니다.
     * 2. 사용자가 로그인하면 `user.value`에 사용자 정보를 저장하고 `isLoggedIn.value`를 true로 설정합니다.
     * 3. 사용자가 로그아웃하면 `user.value`를 null로 설정하고 `isLoggedIn.value`를 false로 설정합니다.
     * 4. 컴포넌트가 언마운트될 때 인증 상태 변화 리스너를 해제합니다.
     */

    const fetchUserDetails = async (uid) => {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        role.value = userData.role; // 사용자 역할
        user.value.name = userData.name; // 사용자 이름
      } else {
        role.value = 'user'; // 기본 역할 설정
        user.value.name = '익명'; // 기본 이름 설정
      }
    };


    const initFirebaseAuth = () => {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          user.value = firebaseUser;
          isLoggedIn.value = true;
          await fetchUserDetails(firebaseUser.uid);
        } else {
          user.value = null;
          isLoggedIn.value = false;
          role.value = null;
        }
      });

      onBeforeUnmount(unsubscribe);
    };

    // 로그아웃 함수: auth 인스턴스 사용
    /**
     * 사용자의 로그아웃을 처리하는 함수
     *
     * 1. Firebase 인증 서비스를 사용하여 사용자를 로그아웃 처리합니다.
     * 2. 로그아웃 성공 시 `user.value`를 null로 설정하고 `isLoggedIn.value`를 false로 설정합니다.
     * 3. 로그아웃 성공 후 '/home' 경로로 라우팅합니다.
     * 4. 로그아웃 실패 시 오류 메시지를 콘솔에 출력합니다.
     */
    const handleLogout = async () => {
      try {
        await signOut(auth);
        user.value = null;
        isLoggedIn.value = false;
        router.push('/');
      } catch (error) {
        console.error('로그아웃 실패:', error);
      }
    };

    onMounted(() => {
      initFirebaseAuth();
    });

    return { drawer, links, menus, isLoggedIn, user, role, initFirebaseAuth, handleLogout };
  }
}
</script>

<style>
.v-app-bar{
  height: 70px;
}

.v-footer{
  height: 80px;
}

/* Container */
.v-container {
  /* Card Area */
  .v-card{
    border: 1px solid #dbdbdb;

    .v-list-item{
      margin: 10px 0;      
    }
  }
}

@media screen and (min-width: 1025px) {
  .v-container {
    width: 1140px !important;
    padding: 20px;
  }
}

@media screen and (max-width: 1024px) {
  .v-container {
    width: 80%;
    padding: 20px;
  }
}

@media screen and (max-width: 768px) {
  .v-container {
    width: 100%;
    padding: 20px;
  }

  .v-dialog .v-card-title .editable{
    font-size: 20px;
  }
}

@media screen and (min-width: 769px) {
  .v-app-bar-title {
    margin-left: 30px;
  }
}

/* Gnb */
.gnb {
  padding: 0;
  text-align: center;
}

.gnb a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

.gnb a.router-link-exact-active {
  color: #78c9ff;
}

/* v-layout */
.v-layout{
  height: 70px;
}
.v-navigation-drawer--temporary.v-navigation-drawer--active{
  padding: 30px 10px;
}
.text-start .v-list-item{
  padding: 10px 30px !important;
}
.sidebar-menu-items .v-list-item:hover{
  background-color: #fc0;
}

.v-navigation-drawer__scrim{
  position: fixed !important;
  width: 100% !important;
  height: 100vh !important;
}
</style>
