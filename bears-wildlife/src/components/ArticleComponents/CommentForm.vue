<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'submit', payload: { name: string; comment: string }): void;
}>();

const name = ref('');
const comment = ref('');
const error = ref('');

const onSubmit = (e: Event) => {
  e.preventDefault();
  error.value = '';

  const n = name.value.trim();
  const c = comment.value.trim();

  if (!n || !c) {
    error.value = 'Please enter your name and a comment.';
    return;
  }

  emit('submit', { name: n, comment: c });
  name.value = '';
  comment.value = '';
};
</script>

<template>
  <form class="comment-form" novalidate @submit="onSubmit">
    <div class="flex-pair">
      <label for="c-name">Your name</label>
      <input
        id="c-name"
        type="text"
        name="name"
        placeholder="Enter your name"
        v-model="name"
        required
      />
    </div>

    <div class="flex-pair">
      <label for="c-comment">Your comment</label>
      <input
        id="c-comment"
        type="text"
        name="comment"
        placeholder="Enter your comment"
        v-model="comment"
        required
      />
    </div>

    <button type="submit">Submit comment</button>

    <p
      class="error"
      aria-live="polite"
      :class="{ hidden: !error }"
    >
      {{ error }}
    </p>
  </form>
</template>

<style scoped>
.comment-form {
  margin-bottom: 3rem;
  font-family: 'Open Sans Condensed', sans-serif;
}

.flex-pair {
  display: flex;
  padding: 0 3rem 1rem;
}

label {
  align-self: center;
  flex: 2;
  text-align: right;
  font-size: 1.6rem;
  line-height: 32px;
}

input {
  margin-left: 1rem;
  flex: 6;
  padding: 0.5rem;
  font-size: 1.6rem;
  line-height: 32px;
}

button {
  background: #333;
  border: 0;
  color: white;
  width: 30%;
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1.6rem;
  cursor: pointer;
}

.error {
  color: #b00020;
  margin-top: 0.5rem;
  font-size: 1.6rem;
}

.hidden {
  display: none;
}
</style>
