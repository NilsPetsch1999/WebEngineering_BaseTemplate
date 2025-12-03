<script setup lang="ts">
import { ref } from 'vue';
import CommentForm from './CommentForm.vue';

interface Comment {
  name: string;
  comment: string;
}

const showComments = ref(false);

const comments = ref<Comment[]>([
  {
    name: 'Bob Fossil',
    comment:
      'Oh I am so glad you taught me all about the big brown angry guys…',
  },
  {
    name: 'Lily Bearson',
    comment: 'I had no idea urban bears drank so much coffee.',
  },
]);

const toggleComments = () => {
  showComments.value = !showComments.value;
};

const handleSubmit = (payload: Comment) => {
  comments.value.unshift(payload);
};
</script>

<template>
  <section class="comments" aria-labelledby="comments-title" tabindex="0">
    <button
      type="button"
      class="toggle-comments"
      :aria-expanded="showComments ? 'true' : 'false'"
      aria-controls="comment-panel"
      @click="toggleComments"
    >
      {{ showComments ? 'Hide comments' : 'Show comments' }}
    </button>

    <div
      id="comment-panel"
      class="comment-wrapper"
      tabindex="0"
      :class="{ hidden: !showComments }"
    >
      <h3 id="comments-title">Comments</h3>

      <CommentForm @submit="handleSubmit" />

      <ul class="comment-container" tabindex="0">
        <li v-for="(c, index) in comments" :key="index" tabindex="0">
          <p><strong>{{ c.name }}</strong></p>
          <p>{{ c.comment }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.comments{
  background-color: #def;
  padding: 10px;
  background-color: #def;
  padding: 10px;
  height: auto;
}
</style>
