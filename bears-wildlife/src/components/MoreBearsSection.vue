<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchUrsidsWikitext, fetchImageUrlFromFile } from '../api/api.js';
import { verifyImageUrl, placeholderImg } from '../api/utils.js';

interface Bear {
  name: string;
  binomial: string;
  imageFile: string | null;
  image: string | null;
  range: string;
}

const bears = ref<Bear[]>([]);
const isLoading = ref(false);
const error = ref("");

/* ------------------------------------------------------------------
   1. EXACT copy of your working parser (the missing part)
-------------------------------------------------------------------*/
function extractBearsFromSpeciesTables(wikitext: string): Bear[] {
  if (!wikitext) return [];

  const blocks = wikitext.split('{{Species table/end}}');
  const bears = [];

  for (const block of blocks) {
    const rows = block.split('{{Species table/row').slice(1);

    for (const row of rows) {
      const nameMatch = row.match(/\|name=\s*\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/i);
      const binomMatch = row.match(/\|binomial\s*=\s*([^\n|]+)\s*(?:\||\n)/i);
      const imgMatch = row.match(/\|image\s*=\s*([^\n|]+)\s*(?:\||\n)/i);
      const rangeMatch = row.match(/\|range\s*=\s*([^\n|]+)\s*(?:\||\n)/i);

      if (!nameMatch || !binomMatch) continue;

      bears.push({
        name: nameMatch[1].trim(),
        binomial: binomMatch[1].trim(),
        imageFile: imgMatch ? imgMatch[1].trim() : null,
        image: null,
        range: rangeMatch ? cleanWikiText(rangeMatch[1]) : '—',
      });
    }
  }

  return bears;
}

/* ------------------------------------------------------------------
   2. Same helper as your old JS version
-------------------------------------------------------------------*/
function cleanWikiText(txt: string): string {
  return (txt || '')
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/{{nbsp}}/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ------------------------------------------------------------------
   3. EXACT safe image resolver
-------------------------------------------------------------------*/
async function safeImageUrl(fileName: string | null) {
  try {
    if (!fileName) return null;
    return await fetchImageUrlFromFile(fileName.replace(/^File:/i, ''));
  } catch {
    return null;
  }
}

/* ------------------------------------------------------------------
   4. Vue version of your old main.js logic
-------------------------------------------------------------------*/
async function loadBears() {
  try {
    isLoading.value = true;
    error.value = "";

    const wikitext = await fetchUrsidsWikitext();
    const raw = extractBearsFromSpeciesTables(wikitext);

    // Deduplicate (preserve original order)
    const seen = new Set();
    const ordered: Bear[] = [];

    for (const b of raw) {
      const key = `${b.name}|${b.binomial}`;
      if (!seen.has(key)) {
        seen.add(key);
        ordered.push(b);
      }
    }

    // Resolve images
    const enriched = await Promise.all(
      ordered.map(async (b) => {
        const url = await safeImageUrl(b.imageFile);
        const finalUrl = await verifyImageUrl(url);
        return { ...b, image: finalUrl ?? placeholderImg };
      })
    );

    bears.value = enriched;
  } catch (err) {
    console.error(err);
    error.value = "Could not load bears.";
  } finally {
    isLoading.value = false;
  }
}

onMounted(loadBears);
</script>

<template>
  <section class="more-bears">
    <h3>More Bears</h3>

    <p v-if="isLoading">Loading bears…</p>

    <div class="bears-grid" data-bears>
      <article
        v-for="bear in bears"
        :key="bear.binomial"
        class="bear-card"
      >
        <img :src="bear.image" :alt="bear.name" />
        <p><strong>{{ bear.name }}</strong> ({{ bear.binomial }})</p>
        <p>Range: {{ bear.range }}</p>
      </article>
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </section>
</template>

<style scoped>
.bears-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.2rem;
}
.bear-card {
  background: #fff;
  padding: 1rem;
  border-radius: 8px;
}
</style>
