<template>
  <component :is="layout">
    <router-view></router-view>
  </component>  
</template>

<script>
import IntroLayout from '@/layouts/IntroLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import BlogLayout from '@/layouts/BlogLayout'

export default {
  name: 'App',
  data: () => ({ 
    open: [],    
  }),
  computed: {
    layout() {
      return (this.$route.meta && this.$route.meta.layout) || 'DefaultLayout'
    }
  },
  components: {
    DefaultLayout,
    IntroLayout,
    BlogLayout
  },
}
</script>

<style>
/* 전체 스타일 적용 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* App */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;  
  height: 100vh;
}

/* Card Area */
.v-list-item-title {
  font-weight: bold;
  font-size: 16px;
}

.v-pagination{
  margin: 50px 0 100px !important;
}

/* Modal Area */ 
.v-dialog > .v-overlay__content > .v-card{
  width: 75%;
  margin: auto;
  padding: 50px 70px;
}

.v-dialog > .v-overlay__content > .v-card > .v-card-title{
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}

.v-dialog > .v-overlay__content > .v-card > .v-card-subtitle{
  font-size: 16px;
}

@media screen and (max-width: 768px) {   
  .v-dialog > .v-overlay__content > .v-card{
    width: 95%;
    padding: 50px 20px;
  }
}
</style>
