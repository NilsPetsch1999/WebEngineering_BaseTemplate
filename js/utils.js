// js/utils.js
export const qs = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];
export const el = (tag, attrs = {}, children = []) => {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k.startsWith('data-')) node.setAttribute(k, v);
    else if (k === 'text') node.textContent = v;
    else node.setAttribute(k, v);
  });
  children.forEach(c => node.append(c));
  return node;
};

export const debounce = (fn, ms = 250) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
};

export const placeholderImg = 'assets/placeholder-bear.jpg';

/**
 * Verify image URL is reachable. If not, return placeholder.
 */
export const verifyImageUrl = async (url) =>
  new Promise(resolve => {
    if (!url) return resolve(placeholderImg);
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => resolve(placeholderImg);
    img.src = url;
  });

export const show = (node) => node.classList.remove('hidden');
export const hide = (node) => node.classList.add('hidden');
export const setText = (node, text) => { node.textContent = text; };
