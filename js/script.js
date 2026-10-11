(function () {
  "use strict";

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var STORAGE_KEY = "theme";

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme");
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      /* ignore - private browsing / blocked storage */
    }
  }

  applyTheme(getStoredTheme() || "dark");

  if (toggle) {
    toggle.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") || "dark";
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      storeTheme(next);
    });
  }

  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
