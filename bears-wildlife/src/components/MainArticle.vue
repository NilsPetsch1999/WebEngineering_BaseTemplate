<script setup lang="ts">
import ArticleHeader from './ArticleComponents/ArticleHeader.vue';
import BearTypesTable from './ArticleComponents/BearTypesTable.vue';
import HabitatsSection from './ArticleComponents/HabitatsSection.vue';
import MatingSection from './ArticleComponents/MatingSection.vue';
import AuthorAside from './ArticleComponents/AuthorAside.vue';
import CommentsSection from './ArticleComponents/CommentsSection.vue';
import MoreBearsSection from './ArticleComponents/MoreBearsSection.vue';
</script>

<template>
  <article>
    <ArticleHeader />
    <BearTypesTable />
    <HabitatsSection />
    <MatingSection />
    <AuthorAside />
    <CommentsSection />
    <MoreBearsSection />
  </article>
</template>

<style scoped>
    article {
        flex: 5;
        margin-right: 10px;
        padding: 10px 30px; 
        background-color: green;
        border-radius: 4px;
    }
    
</style>
