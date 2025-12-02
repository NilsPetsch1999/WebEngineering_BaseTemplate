<script setup lang="ts">
import { ref } from 'vue';

const query = ref('');

const onSearchSubmit = (e: Event) => {
  e.preventDefault();
  // later you can hook in your highlight logic from search.ts
};
</script>

<template>
  <header class="site-header" role="banner">
    <h1 tabindex="0">Welcome to our wildlife website</h1>

    <div class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blog</a></li>
      </ul>

      <form
        class="search"
        role="search"
        aria-label="Search site"
        @submit="onSearchSubmit"
      >
        <label for="q" class="visually-hidden" hidden>Search query</label>
        <input
          id="q"
          type="search"
          name="q"
          placeholder="Search query"
          v-model="query"
        />
        <button id ="searchBtn" type="submit">Go</button>
      </form>
    </div>
  </header>
</template>

<style scoped>

#searchBtn{
    font-size: 1.6rem;
    height: 32px;
    flex: 1;
    margin-left: 1rem;
    background: #333;
    border: 0;
    color: white;
    flex: 1;
    margin-left: 1rem;
    background: #333;
    border: 0;
    color: white;
}

</style>

