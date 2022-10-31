render();

function render() {
  const contentText = document.getElementById("mw-content-text");
  // byline_info

  if (!contentText) return;

  const text = contentText.textContent;
  const wordMatchRegExp = /[^\s]/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);

  const badge = document.createElement("span");
  badge.classList.add("article_byline");
  badge.textContent = `⏱️ ${readingTime} min read`;

  const p_info = document.getElementById("byline_info").querySelector("p");

  p_info.insertAdjacentElement("beforeend", badge);
}
