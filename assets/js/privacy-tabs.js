/**
 * Privacy policy tab navigation — hash deep-linking & mobile scroll
 */
(function() {
  'use strict';

  function scrollActiveTabIntoView(nav) {
    var active = nav.querySelector('.nav-link.active');
    if (active && window.innerWidth < 992) {
      active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function initPrivacyTabs() {
    var nav = document.getElementById('privacyTabNav');
    if (!nav || typeof bootstrap === 'undefined') return;

    var hash = window.location.hash.replace('#', '');
    if (hash) {
      var trigger = nav.querySelector('[data-bs-target="#' + hash + '"]');
      if (trigger) {
        bootstrap.Tab.getOrCreateInstance(trigger).show();
      }
    }

    nav.querySelectorAll('[data-bs-toggle="tab"]').forEach(function(btn) {
      btn.addEventListener('shown.bs.tab', function(e) {
        var target = e.target.getAttribute('data-bs-target');
        if (target) {
          history.replaceState(null, '', target);
        }
        scrollActiveTabIntoView(nav);
      });
    });

    scrollActiveTabIntoView(nav);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPrivacyTabs);
  } else {
    initPrivacyTabs();
  }
})();
