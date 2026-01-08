// src/api/api.ts
// Frontend talks ONLY to Spring Boot backend

const BACKEND =
  'http://localhost:8080';

/**
 * Fetch RAW Wikipedia wikitext from backend
 */
export const fetchUrsidsWikitext = async (): Promise<string> => {
  const res = await fetch(`${BACKEND}/api/wiki/ursids`);
  if (!res.ok) {
    throw new Error('Failed to load ursids wikitext');
  }
  return await res.text(); // <-- IMPORTANT: text, not JSON
};

/**
 * Resolve File:... to image URL (via backend)
 */
export const fetchImageUrlFromFile = async (fileName: string) => {
  const res = await fetch(
    `${BACKEND}/api/wiki/image/${encodeURIComponent(fileName)}`
  );
  if (!res.ok) return null;

  const data = await res.json();
  const pages = data?.query?.pages || {};
  const first: any = Object.values(pages)[0];
  return first?.imageinfo?.[0]?.url ?? null;
};
