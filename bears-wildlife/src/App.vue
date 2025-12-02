<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue';
import MainArticle from './components/MainArticle.vue';
import SecondaryAside from './components/SecondaryAside.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <div>
    <SiteHeader />

    <main id="main">
      <MainArticle />
      <SecondaryAside />
    </main>

    <SiteFooter />
  </div>
</template>
