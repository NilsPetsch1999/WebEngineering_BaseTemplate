<script setup lang="ts">
import ArticleHeader from './ArticleHeader.vue';
import BearTypesTable from './BearTypesTable.vue';
import HabitatsSection from './HabitatsSection.vue';
import MatingSection from './MatingSection.vue';
import AuthorAside from './AuthorAside.vue';
import CommentsSection from './CommentsSection.vue';
import MoreBearsSection from './MoreBearsSection.vue';
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
