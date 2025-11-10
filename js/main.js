document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      const page = cat.dataset.page;
      if (page) {
        // 加上 pages/ 前缀
        window.location.href = `pages/${page}`;
      }
    });
  });
});
