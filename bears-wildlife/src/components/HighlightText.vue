<script setup lang="ts">
import { computed } from 'vue';
import { useSearch } from '@/composables/useSearch';

const props = defineProps<{
  text: string;
}>();

const { searchQuery } = useSearch();

const highlighted = computed(() => {
  const q = searchQuery.value;
  if (!q) return props.text;

  // Escaping regex special chars
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const regex = new RegExp(`(${escaped})`, 'gi');
  return props.text.replace(regex, `<mark style="background: yellow">$1</mark>`);
});
</script>

<template>
  <span v-html="highlighted"></span>
</template>
