<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  text-align: center;
}

.content {
  min-height: calc(100vh - 201px);
}
</style>
