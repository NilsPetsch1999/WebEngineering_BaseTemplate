import { watch } from "vue";
import { useSearch } from "@/composables/useSearch";

export default {
  mounted(el: HTMLElement) {
    const { searchQuery } = useSearch();

    // highlight function
    const apply = () => {
      const q = searchQuery.value.trim();
      removeMarks(el);

      if (!q) return;

      const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(safe, "gi");

      walkTextNodes(el, (node) => {
        const text = node.textContent || "";
        if (!text.toLowerCase().includes(q.toLowerCase())) return;

        const span = document.createElement("span");
        span.innerHTML = text.replace(regex, (m) => `<mark>${m}</mark>`);

        node.replaceWith(span);
      });
    };

    // run whenever searchQuery changes
    watch(searchQuery, apply, { immediate: true });
  }
};

function removeMarks(root: HTMLElement) {
  const marks = root.querySelectorAll("mark");
  marks.forEach((mark) => {
    const text = document.createTextNode(mark.textContent || "");
    mark.replaceWith(text);
  });
  root.normalize();
}

function walkTextNodes(node: Node, fn: (n: Text) => void) {
  if (node.nodeType === Node.TEXT_NODE) {
    fn(node as Text);
    return;
  }
  node.childNodes.forEach((child) => walkTextNodes(child, fn));
}
