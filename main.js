/**
 * Main Site Interactions
 * - Mobile hamburger menu
 * - Experience/Education tabs
 * - Scroll reveal animations
 * - Header scroll behavior
 * - Nav scroll-spy (active section indicator)
 */

(function () {
  // --- Hamburger Menu ---
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      hamburger.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
        navMenu.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  // --- Tabs ---
  var tabs = document.querySelectorAll('[data-component="tabs"]');

  tabs.forEach(function (tabGroup) {
    var tabButtons = tabGroup.querySelectorAll('.tab');
    var panels = tabGroup.querySelectorAll('.tab-panel');

    tabButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetPanel = button.getAttribute('data-tab');

        // Update buttons
        tabButtons.forEach(function (btn) {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');

        // Update panels
        panels.forEach(function (panel) {
          var isActive = panel.getAttribute('data-panel') === targetPanel;
          panel.classList.toggle('active', isActive);
        });
      });
    });
  });

  // --- Scroll Reveal ---
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
      section.classList.add('reveal');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // --- Header background on scroll ---
  var header = document.getElementById('site-header');

  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.setAttribute('data-scrolled', '');
      } else {
        header.removeAttribute('data-scrolled');
      }
    }, { passive: true });
  }

  // --- Nav Scroll-Spy ---
  // Highlights the nav link corresponding to the current section
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sectionIds = [];

  navLinks.forEach(function (link) {
    var id = link.getAttribute('href').substring(1);
    if (id && document.getElementById(id)) {
      sectionIds.push({ id: id, link: link });
    }
  });

  if (sectionIds.length > 0 && 'IntersectionObserver' in window) {
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var currentId = entry.target.id;
          sectionIds.forEach(function (item) {
            if (item.id === currentId) {
              item.link.classList.add('is-active');
            } else {
              item.link.classList.remove('is-active');
            }
          });
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '-80px 0px -50% 0px'
    });

    sectionIds.forEach(function (item) {
      var el = document.getElementById(item.id);
      if (el) {
        spyObserver.observe(el);
      }
    });
  }
})();