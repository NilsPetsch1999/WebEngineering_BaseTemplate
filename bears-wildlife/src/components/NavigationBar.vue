<script setup lang="ts">
import { ref } from 'vue';
import { useSearch } from '@/composables/useSearch';

const query = ref('');
const { setSearch } = useSearch();

const onSearchSubmit = (e: Event) => {
  e.preventDefault();
  console.log("SUBMIT FIRED, query:", query.value);
  setSearch(query.value);
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

      <form @submit="onSearchSubmit" style="display:flex;align-items:center;gap:10px;">
        <input id="q" type="search" v-model="query">
        <button type="submit">Go</button>
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

