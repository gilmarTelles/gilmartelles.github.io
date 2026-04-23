/**
 * Theme Toggle
 * Handles light/dark mode toggle with localStorage persistence.
 * Initial theme is set by inline script in <head> to prevent FOUC.
 */

(function () {
  var STORAGE_KEY = 'gt-theme';
  var root = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Toggle button
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Listen for system preference changes (only if no explicit choice)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();