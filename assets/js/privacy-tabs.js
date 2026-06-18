/**
 * Privacy policy — sidebar TOC, scroll spy, hash deep-linking
 */
(function() {
  'use strict';

  var tocNav = null;
  var tocLinks = [];
  var sections = [];
  var observer = null;
  var scrollingFromClick = false;

  function setActiveLink(sectionId) {
    tocLinks.forEach(function(link) {
      link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
    });
  }

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;

    scrollingFromClick = true;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveLink(id);
    history.replaceState(null, '', '#' + id);

    window.setTimeout(function() {
      scrollingFromClick = false;
    }, 800);
  }

  function initTocLinks() {
    tocLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var sectionId = link.getAttribute('data-section');
        if (sectionId) scrollToSection(sectionId);
      });
    });
  }

  function initScrollSpy() {
    if (!sections.length || typeof IntersectionObserver === 'undefined') return;

    observer = new IntersectionObserver(function(entries) {
      if (scrollingFromClick) return;

      var visible = entries
        .filter(function(entry) { return entry.isIntersecting; })
        .sort(function(a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });

      if (visible.length && visible[0].target.id) {
        setActiveLink(visible[0].target.id);
      }
    }, {
      root: null,
      rootMargin: '-120px 0px -55% 0px',
      threshold: [0, 0.1, 0.25]
    });

    sections.forEach(function(section) {
      observer.observe(section);
    });
  }

  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;
    scrollToSection(hash);
  }

  function initPrivacyTabs() {
    tocNav = document.getElementById('privacyTocNav');
    if (!tocNav) return;

    tocLinks = Array.prototype.slice.call(tocNav.querySelectorAll('.privacy-toc-link'));
    sections = Array.prototype.slice.call(document.querySelectorAll('.privacy-doc-content .policy-block'));

    initTocLinks();
    initScrollSpy();
    handleHash();
    window.addEventListener('hashchange', handleHash);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPrivacyTabs);
  } else {
    initPrivacyTabs();
  }
})();
