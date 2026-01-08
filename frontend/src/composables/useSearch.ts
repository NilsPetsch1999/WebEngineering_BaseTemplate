import { ref } from 'vue';

const searchQuery = ref('');

export function useSearch() {
  const setSearch = (value: string) => {
    searchQuery.value = value;
  };

  return { searchQuery, setSearch };
}
