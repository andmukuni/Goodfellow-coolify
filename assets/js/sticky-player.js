// Sticky Bottom Radio Player Script
(function() {
  'use strict';

  function initializeStickyPlayer() {
    const heroListenBtn = document.getElementById('hero-listen-live-btn');
    const headerListenBtn = document.getElementById('listen-live-btn'); // Header button
    const stickyPlayer = document.getElementById('sticky-radio-player');
    const stickyAudio = document.getElementById('sticky-audio-player');
    const stickyPlayBtn = document.getElementById('sticky-play-btn');
    const stickyPauseBtn = document.getElementById('sticky-pause-btn');
    const stickyCloseBtn = document.getElementById('sticky-close-btn');
    const stickyVolume = document.getElementById('sticky-volume');
    const stickyStatus = document.getElementById('sticky-status');
    const miniVisualizer = document.querySelector('.mini-visualizer');
    
    // Check if elements exist
    if (!stickyPlayer || !stickyAudio) {
      console.log('Sticky player elements not found yet, will retry...');
      return false;
    }
    
    // Function to show and play sticky player
    function showAndPlayStickyPlayer() {
      console.log('Showing sticky player');
      
      // Show sticky player
      stickyPlayer.style.display = 'block';
      setTimeout(() => {
        stickyPlayer.classList.add('show');
      }, 10);
      
      // Auto-play after animation
      setTimeout(() => {
        stickyStatus.textContent = 'Connecting...';
        stickyAudio.play().then(() => {
          console.log('Sticky player auto-play successful');
          stickyPlayBtn.classList.add('d-none');
          stickyPauseBtn.classList.remove('d-none');
          stickyStatus.textContent = 'Now Broadcasting';
          
          // Start visualizer
          if (miniVisualizer) {
            miniVisualizer.classList.remove('paused');
          }
        }).catch(error => {
          console.log('Auto-play blocked:', error);
          stickyStatus.textContent = 'Click Play to Listen';
        });
      }, 400);
    }
    
    // Hero Listen Live button - show sticky player and auto-play
    if (heroListenBtn) {
      heroListenBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Hero Listen Live clicked');
        showAndPlayStickyPlayer();
      });
    }
    
    // Header Listen Live button - show sticky player and auto-play
    if (headerListenBtn) {
      headerListenBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Header Listen Live clicked');
        showAndPlayStickyPlayer();
      });
    }
    
    // Play button
    if (stickyPlayBtn) {
      stickyPlayBtn.addEventListener('click', function() {
        console.log('Sticky play clicked');
        stickyStatus.textContent = 'Connecting...';
        
        stickyAudio.play().then(() => {
          stickyPlayBtn.classList.add('d-none');
          stickyPauseBtn.classList.remove('d-none');
          stickyStatus.textContent = 'Now Broadcasting';
          
          // Start visualizer
          if (miniVisualizer) {
            miniVisualizer.classList.remove('paused');
          }
        }).catch(error => {
          console.error('Error playing:', error);
          stickyStatus.textContent = 'Connection Failed';
          alert('Unable to play the stream. Please check your connection.');
        });
      });
    }
    
    // Pause button
    if (stickyPauseBtn) {
      stickyPauseBtn.addEventListener('click', function() {
        console.log('Sticky pause clicked');
        stickyAudio.pause();
        stickyPauseBtn.classList.add('d-none');
        stickyPlayBtn.classList.remove('d-none');
        stickyStatus.textContent = 'Paused';
        
        // Pause visualizer
        if (miniVisualizer) {
          miniVisualizer.classList.add('paused');
        }
      });
    }
    
    // Close button
    if (stickyCloseBtn) {
      stickyCloseBtn.addEventListener('click', function() {
        console.log('Sticky player closed');
        
        // Stop audio
        stickyAudio.pause();
        stickyAudio.currentTime = 0;
        
        // Hide player
        stickyPlayer.classList.remove('show');
        setTimeout(() => {
          stickyPlayer.style.display = 'none';
        }, 300);
        
        // Reset UI
        stickyPauseBtn.classList.add('d-none');
        stickyPlayBtn.classList.remove('d-none');
        stickyStatus.textContent = 'Now Broadcasting';
        
        // Pause visualizer
        if (miniVisualizer) {
          miniVisualizer.classList.add('paused');
        }
      });
    }
    
    // Volume control
    if (stickyVolume) {
      stickyVolume.addEventListener('input', function() {
        stickyAudio.volume = this.value / 100;
      });
      
      // Set initial volume
      stickyAudio.volume = 0.8;
    }
    
    console.log('Sticky player initialized successfully');
    return true;
  }

  // Listen for components loaded event
  document.addEventListener('componentsLoaded', function() {
    console.log('Components loaded - initializing sticky player');
    setTimeout(initializeStickyPlayer, 100);
  });

  // Also try on window load as fallback
  window.addEventListener('load', function() {
    setTimeout(function() {
      if (!initializeStickyPlayer()) {
        console.log('Sticky player init failed on load, waiting for components...');
      }
    }, 500);
  });

})();
