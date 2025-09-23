// js/api.js
const BASE = 'https://en.wikipedia.org/w/api.php';
const ORIGIN = { origin: '*' };

const toQS = (params) => new URLSearchParams(params).toString();

const fetchJSON = async (params) => {
  const url = `${BASE}?${toQS({ ...params, ...ORIGIN })}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} while fetching ${params.action}`);
  return res.json();
};

/**
 * Fetch the wikitext for the "List_of_ursids" section that contains species tables.
 * (Section index 3 in the starter; we still guard & scan all sections for robustness.)
 */
export const fetchUrsidsWikitext = async () => {
  // Try typical section indices that contain the species table in this page.
  const sectionsToTry = [3, 4, 2];
  for (const section of sectionsToTry) {
    try {
      const data = await fetchJSON({
        action: 'parse',
        page: 'List_of_ursids',
        prop: 'wikitext',
        section,
        format: 'json'
      });
      const wikitext = data?.parse?.wikitext?.['*'];
      if (wikitext && wikitext.includes('{{Species table')) return wikitext;
    } catch {
      // try next section
    }
  }
  // Fallback: whole page (heavier but safer)
  const whole = await fetchJSON({
    action: 'parse',
    page: 'List_of_ursids',
    prop: 'wikitext',
    format: 'json'
  });
  return whole?.parse?.wikitext?.['*'] ?? '';
};

export const fetchImageUrlFromFile = async (fileName) => {
  const data = await fetchJSON({
    action: 'query',
    titles: `File:${fileName}`,
    prop: 'imageinfo',
    iiprop: 'url',
    format: 'json'
  });
  const pages = data?.query?.pages || {};
  const first = Object.values(pages)[0];
  const url = first?.imageinfo?.[0]?.url || null;
  return url;
};
