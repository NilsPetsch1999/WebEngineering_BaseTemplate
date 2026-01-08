<script setup lang="ts">
import NavigationBar from './components/NavigationBar.vue';
import MainArticle from './components/MainArticle.vue';
import SecondaryAside from './components/SecondaryAside.vue';
import SiteFooter from './components/SiteFooter.vue';
import Header from './components/Header.vue'
</script>

<template>
  <div v-highlight>
    <Header/>
    <NavigationBar />

    <main id="main">
      <MainArticle />
      <SecondaryAside />
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
  #main {
    display: flex;
  }
</style>
