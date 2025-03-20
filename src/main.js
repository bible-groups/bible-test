import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { auth, onAuthStateChanged } from './firebase'

loadFonts()

// createApp(App)
//   .use(router)
//   .use(store)
//   .use(vuetify)
//   .mount('#app')

let app;

// Firebase 인증 상태 확인
onAuthStateChanged(auth, user => {
  if (user) {
    store.dispatch('login');
  } else {
    store.dispatch('logout');
  }

  // Vue 앱 초기화
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .use(vuetify)
      .mount('#app');
  }
});
