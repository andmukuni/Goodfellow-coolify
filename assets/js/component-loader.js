/**
 * Component Loader
 * Dynamically loads HTML components into the page
 */

(function() {
  'use strict';

  /**
   * Load a component from the components directory
   * @param {string} componentName - Name of the component file (without .html extension)
   * @param {string} targetSelector - CSS selector for the target element
   */
  async function loadComponent(componentName, targetSelector) {
    try {
      const response = await fetch(`components/${componentName}.html`);
      
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentName}`);
      }
      
      const html = await response.text();
      const targetElement = document.querySelector(targetSelector);
      
      if (targetElement) {
        targetElement.innerHTML = html;
      } else {
        console.warn(`Target element not found: ${targetSelector}`);
      }
    } catch (error) {
      console.error(`Error loading component ${componentName}:`, error);
    }
  }

  /**
   * Load all components when DOM is ready
   */
  function loadAllComponents() {
    // Define components and their target locations
    const components = [
      { name: 'header', target: '#header-placeholder' },
      { name: 'hero', target: '#hero-placeholder' },
      { name: 'home-about', target: '#home-about-placeholder' },
      { name: 'featured-departments', target: '#featured-departments-placeholder' },
      { name: 'featured-services', target: '#featured-services-placeholder' },
      { name: 'find-a-doctor', target: '#find-a-doctor-placeholder' },
      { name: 'call-to-action', target: '#call-to-action-placeholder' },
      { name: 'emergency-info', target: '#emergency-info-placeholder' },
      { name: 'footer', target: '#footer-placeholder' }
    ];

    // Load all components
    const loadPromises = components.map(component => 
      loadComponent(component.name, component.target)
    );

    // Also load global chat widget and append to body (no placeholder required)
    const chatWidgetPromise = (async () => {
      try {
        const res = await fetch('components/chat-widget.html');
        if (!res.ok) throw new Error('Failed to load chat-widget.html');
        const html = await res.text();
        const container = document.createElement('div');
        container.innerHTML = html;
        // Append all top-level nodes to body
        Array.from(container.childNodes).forEach(node => {
          // Only append element nodes to avoid stray text nodes
          if (node.nodeType === 1) document.body.appendChild(node);
        });
      } catch (err) {
        console.error('Chat widget failed to load:', err);
      }
    })();

    // Wait for all components to load, then initialize scripts
    Promise.all([...loadPromises, chatWidgetPromise]).then(() => {
      console.log('All components loaded successfully');
      
      // Hide the preloader
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
      
      // Reinitialize any scripts that depend on the loaded content
      if (typeof AOS !== 'undefined') {
        AOS.init();
        AOS.refresh();
      }
      
      // Trigger a custom event for other scripts to hook into
      document.dispatchEvent(new CustomEvent('componentsLoaded'));
    }).catch((error) => {
      console.error('Error loading components:', error);
      // Hide preloader even if there's an error
      const preloader = document.querySelector('#preloader');
      if (preloader) {
        preloader.remove();
      }
    });
  }

  // Load components when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAllComponents);
  } else {
    loadAllComponents();
  }

})();
