document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  categories.forEach(cat => {
    cat.addEventListener("click", () => {
      const page = cat.dataset.page;
      if (page) {
        window.location.href = page;
      }
    });
  });
});
