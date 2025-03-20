import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudyView from '../views/StudyView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import SearchView from '../views/SearchView.vue'
import SearchKeywordGroup from '../components/SearchKeywordGroup.vue'
import AdminView from '../views/AdminView.vue'  
import IntroView from '../views/IntroView.vue' 
import UserView from '../views/UserView.vue'
import SearchBook from '../components/SearchBook.vue'
import SearchKeyword from '../components/SearchKeyword.vue'
import SearchWord from '../components/SearchWord.vue'
import ResourceView from '../views/ResourceView.vue'
import ManualView from '../views/ManualView.vue'
import BlogHome from '../views/BlogHome.vue'
import BibleUnderstand from '../views/BibleUnderstand.vue'
import BibleForum from '../views/BibleForum.vue'
import CafeTheology from '../views/CafeTheology.vue'
import TheologyRecipe from '../views/TheologyRecipe.vue'
import WordMeditation from '../views/WordMeditation.vue'
import BlogLogin from '../views/BlogLogin.vue'
import BlogSignUp from '../views/BlogSignUp.vue'
import BlogStudy from '../views/BlogStudy.vue'
// import BlogAdmin from '../views/BlogAdmin.vue'
import { auth } from '@/firebase';

const routes = [
  { path: '/', name: 'intro', component: IntroView, meta: { layout: 'IntroLayout' } },
  { path: '/home', name: 'home', component: HomeView, meta: { layout: 'DefaultLayout' } },
  { path: '/blog', name: 'blog', component: BlogHome, meta: { layout: 'BlogLayout' } },
  { path: '/about', name: 'about', component: AboutView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/study', name: 'study', component: StudyView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/login', name: 'login', component: LoginView, meta: { layout: 'DefaultLayout' } },
  { path: '/signup', name: 'signup', component: SignUpView, meta: { layout: 'DefaultLayout' } },
  { path: '/search', name: 'search', component: SearchView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/admin', name: 'admin', component: AdminView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/user', name: 'user', component: UserView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/search-book', name: 'search-book', component: SearchBook, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/search-keyword', name: 'search-keyword', component: SearchKeyword, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/search-keyword-group', name: 'search-keyword-group', component: SearchKeywordGroup, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/search-word', name: 'search-word', component: SearchWord, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/resource', name: 'resource', component: ResourceView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/manual', name: 'manual', component: ManualView, meta: { layout: 'DefaultLayout', requiresAuth: true} },
  { path: '/bible-understand', name: 'bible-understand', component: BibleUnderstand, meta: { layout: 'BlogLayout', requiresAuth: true} },
  { path: '/bible-forum', name: 'bible-forum', component: BibleForum, meta: { layout: 'BlogLayout', requiresAuth: true} },
  { path: '/cafe-theology', name: 'cafe-theology', component: CafeTheology, meta: { layout: 'BlogLayout', requiresAuth: true} },
    { path: '/theology-recipe', name: 'theology-recipe', component: TheologyRecipe, meta: { layout: 'BlogLayout', requiresAuth: true} },
  { path: '/word-meditation', name: 'word-meditation', component: WordMeditation, meta: { layout: 'BlogLayout', requiresAuth: true} },
  { path: '/blog-login', name: 'blog-login', component: BlogLogin, meta: { layout: 'BlogLayout'} },
  { path: '/blog-signup', name: 'blog-signup', component: BlogSignUp, meta: { layout: 'BlogLayout'} },
  { path: '/blog-study', name: 'blog-study', component: BlogStudy, meta: { layout: 'BlogLayout', requiresAuth: true } },
  // { path: '/blog-admin', name: 'blog-admin', component: BlogAdmin, meta: { layout: 'BlogLayout' } },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = auth.currentUser;
  // 레이아웃별 로그인 페이지 접근 설정
  const layout = to.matched.find(record => record.meta.layout)?.meta.layout;

  if (requiresAuth && !currentUser) {
    if (layout === 'BlogLayout') {
      next('/blog-login');
    } else {
      next('/login');
    }
  } else {
    next();
  }
});

export default router
