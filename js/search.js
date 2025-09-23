// js/search.js
import { qs } from './utils.js';

export const initSearch = () => {
  const form = qs('form.search');
  const article = qs('article');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearHighlights(article);

    const key = qs('#q').value.trim();
    if (!key) return;

    const regex = new RegExp(`(${escapeRegExp(key)})`, 'gi');
    walkNodes(article, (textNode) => {
      const { nodeValue } = textNode;
      if (!nodeValue) return;

      const wrapper = document.createElement('span');
      wrapper.innerHTML = nodeValue.replace(regex, '<mark class="highlight">$1</mark>');

      if (wrapper.innerHTML !== nodeValue) {
        textNode.replaceWith(...wrapper.childNodes);
      }
    });
  });
};

const walkNodes = (root, onText) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node;
  while ((node = walker.nextNode())) onText(node);
};

const clearHighlights = (root) => {
  root.querySelectorAll('mark.highlight').forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize();
  });
};

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
