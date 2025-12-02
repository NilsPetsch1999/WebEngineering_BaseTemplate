<script setup lang="ts">
import { ref } from 'vue';

const query = ref('');

const onSearchSubmit = (e: Event) => {
  e.preventDefault();
  // later you can hook in your highlight logic from search.ts
};
</script>

<template>
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
          placeholder="Search"
          v-model="query"
        />
        <button id ="searchBtn" type="submit">Go</button>
      </form>
    </div>
</template>

<style scoped>

#searchBtn{
    flex: 1;
    margin-left: 1rem;
    background: #333;
    border: 0;
    color: white;
    font-size: 1.6rem;
    height: 32px;
    margin : auto 10px ;
    border-radius: 4px;
}

::v-deep h1 {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 4rem;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: #fff;
  text-shadow: 2px 2px 4px #999, 4px 4px 8px #666;
}

.nav{
  height: 50px;
  background-color: ff80ff;
  display: flex;
  padding: 1% 0;
  margin-bottom: 10px;
  background-color: green;
  border-radius: 4px;
}

ul{
  padding: 0;
  list-style-type: none;
  flex: 2;
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

li{
  display: inline;
  text-align: center;
  flex: 1;
  font-size: 1.6rem;
  line-height: 1.5;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #2a2a2a;
  list-style-type: none;
}

a{
  display: inline-block;
  font-size: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  cursor: pointer;
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
  
}

form {
  margin-top: 0em;
  unicode-bidi: isolate;
  margin: auto;
}

#q{

  flex: 3; 
  font-size: 1.6rem;
  height: 32px;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #2a2a2a; 
  border-radius: 4px;
  border: green solid 1px;
}



</style>

