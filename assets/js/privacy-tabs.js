/**
 * Privacy policy — category tabs, section pills, hash deep-linking
 */
(function() {
  'use strict';

  var SECTION_TO_CATEGORY = {
    who: 'cat-overview',
    scope: 'cat-overview',
    definitions: 'cat-overview',
    data: 'cat-data',
    bases: 'cat-data',
    sensitive: 'cat-data',
    sharing: 'cat-data',
    retention: 'cat-data',
    security: 'cat-security',
    breach: 'cat-security',
    rights: 'cat-security',
    cookies: 'cat-digital',
    marketing: 'cat-digital',
    automated: 'cat-digital',
    ussd: 'cat-digital',
    changes: 'cat-legal',
    contact: 'cat-legal',
    law: 'cat-legal'
  };

  function scrollToSection(id, delay) {
    var el = document.getElementById(id);
    if (el) {
      setTimeout(function() {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, delay || 120);
    }
  }

  function activateCategory(catId, sectionId) {
    var catNav = document.getElementById('privacyCatNav');
    if (!catNav || typeof bootstrap === 'undefined') return;

    var trigger = catNav.querySelector('[data-bs-target="#' + catId + '"]');
    var needsTabSwitch = trigger && !trigger.classList.contains('active');
    if (trigger) {
      bootstrap.Tab.getOrCreateInstance(trigger).show();
    }

    if (sectionId) {
      var panel = document.getElementById(catId);
      if (panel) {
        panel.querySelectorAll('.privacy-section-pills .nav-link').forEach(function(p) {
          p.classList.toggle('active', p.getAttribute('data-section') === sectionId);
        });
      }
      scrollToSection(sectionId, needsTabSwitch ? 350 : 120);
    }
  }

  function initSectionPills() {
    document.querySelectorAll('.privacy-section-pills .nav-link').forEach(function(pill) {
      pill.addEventListener('click', function(e) {
        e.preventDefault();
        var sectionId = pill.getAttribute('data-section');
        if (!sectionId) return;

        var panel = pill.closest('.tab-pane');
        if (panel) {
          panel.querySelectorAll('.privacy-section-pills .nav-link').forEach(function(p) {
            p.classList.remove('active');
          });
        }
        pill.classList.add('active');
        history.replaceState(null, '', '#' + sectionId);
        scrollToSection(sectionId);
      });
    });
  }

  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (!hash) return;

    if (hash.indexOf('cat-') === 0) {
      activateCategory(hash, null);
    } else if (SECTION_TO_CATEGORY[hash]) {
      activateCategory(SECTION_TO_CATEGORY[hash], hash);
    }
  }

  function initCategoryTabs() {
    var catNav = document.getElementById('privacyCatNav');
    if (!catNav || typeof bootstrap === 'undefined') return;

    handleHash();
    window.addEventListener('hashchange', handleHash);
  }

  function initPrivacyTabs() {
    initCategoryTabs();
    initSectionPills();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPrivacyTabs);
  } else {
    initPrivacyTabs();
  }
})();
