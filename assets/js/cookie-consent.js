/**
 * Cookie consent banner — stores preference in localStorage
 */
(function() {
  'use strict';

  var STORAGE_KEY = 'goodfellow_cookie_consent';

  function getConsent() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function hideBanner(banner) {
    if (banner) {
      banner.hidden = true;
      banner.classList.remove('cookie-banner-visible');
    }
  }

  function showBanner(banner) {
    if (banner) {
      banner.hidden = false;
      banner.classList.add('cookie-banner-visible');
    }
  }

  function initCookieBanner() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (getConsent()) {
      hideBanner(banner);
      return;
    }

    showBanner(banner);

    banner.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-cookie-action]');
      if (!btn) return;

      var action = btn.getAttribute('data-cookie-action');
      if (action === 'accept') {
        setConsent('accepted');
        hideBanner(banner);
      } else if (action === 'manage') {
        window.location.href = 'cookies.html';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieBanner);
  } else {
    initCookieBanner();
  }

  document.addEventListener('componentsLoaded', initCookieBanner);
})();
