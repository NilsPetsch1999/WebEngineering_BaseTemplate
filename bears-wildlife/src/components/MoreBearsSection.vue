<script setup lang="ts">
import { ref } from 'vue';

interface Bear {
  name: string;
  binomial: string;
  image: string;
  range?: string | null;
}

const isLoading = ref(false);
const error = ref('');
const bears = ref<Bear[]>([]);

// Later: use onMounted() and your existing fetchUrsidsWikitext / extractBears logic
</script>

<template>
  <section class="more_bears" aria-labelledby="more-bears" tabindex="0">
    <h3 id="more-bears">More Bears</h3>

    <p
      v-if="isLoading"
      class="load-status"
      aria-live="polite"
      tabindex="0"
    >
      Loading bears…
    </p>

    <div class="bears-grid" data-bears tabindex="0">
      <article
        v-for="bear in bears"
        :key="bear.binomial"
        class="bear-card"
      >
        <img :src="bear.image" :alt="`Image of ${bear.name}`" />
        <p class="bear-title">
          <strong>{{ bear.name }}</strong> ({{ bear.binomial }})
        </p>
        <p>Range: {{ bear.range || '—' }}</p>
      </article>
    </div>

    <p
      v-if="error"
      class="error"
      data-bears-error
      aria-live="polite"
      tabindex="0"
    >
      {{ error }}
    </p>
  </section>
</template>
