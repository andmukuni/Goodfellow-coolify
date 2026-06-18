# Component-Based Architecture

This project has been refactored to use a modular component-based architecture for better maintainability and reusability.

## 📁 Project Structure

```
├── index.html                    # Main page (now simplified with placeholders)
├── components/                   # All reusable HTML components
│   ├── header.html              # Site header and navigation
│   ├── hero.html                # Hero/banner section
│   ├── home-about.html          # About section
│   ├── featured-departments.html # Departments showcase
│   ├── featured-services.html   # Services listing
│   ├── find-a-doctor.html       # Doctor search and listing
│   ├── call-to-action.html      # CTA section
│   ├── emergency-info.html      # Emergency information
│   └── footer.html              # Site footer
├── assets/
│   ├── js/
│   │   ├── component-loader.js  # Dynamic component loader
│   │   └── main.js              # Main JavaScript file
│   ├── css/
│   └── vendor/
└── index-old.html               # Backup of original file
```

## 🚀 How It Works

### Component Loading
The `component-loader.js` script automatically loads all HTML components when the page loads:

1. **On Page Load**: The script waits for the DOM to be ready
2. **Fetch Components**: Each component is fetched from the `/components/` directory
3. **Inject HTML**: Components are injected into their respective placeholder elements
4. **Reinitialize**: AOS animations and other scripts are reinitialized after loading

### Placeholder System
Each component has a placeholder `<div>` in `index.html`:

```html
<!-- Hero Section Component -->
<div id="hero-placeholder"></div>
```

The component loader finds this placeholder and injects the corresponding `hero.html` content.

## ✏️ Editing Components

### To Edit a Section:
1. Open the relevant component file in `/components/`
2. Make your changes to the HTML
3. Save the file
4. Refresh the browser - changes will load automatically

### Example:
To update the hero section:
```bash
# Edit the hero component
vim components/hero.html

# Changes will appear on next page load
```

## 🎨 Benefits

### ✅ Maintainability
- Each section is in its own file
- Easy to locate and edit specific content
- No more scrolling through 1000+ lines of code

### ✅ Reusability
- Components can be reused across multiple pages
- Consistent header/footer across the site
- Easy to create new pages using existing components

### ✅ Collaboration
- Multiple developers can work on different components
- Reduced merge conflicts
- Clear separation of concerns

### ✅ Organization
- Clean, readable main HTML file
- Logical component structure
- Easy to understand at a glance

## 🔧 Adding New Components

### 1. Create the Component File
```bash
# Create a new component
touch components/testimonials.html
```

### 2. Add HTML Content
```html
<!-- testimonials.html -->
<section id="testimonials" class="testimonials section">
  <!-- Your HTML content here -->
</section>
```

### 3. Add Placeholder to index.html
```html
<!-- Testimonials Section Component -->
<div id="testimonials-placeholder"></div>
```

### 4. Register in component-loader.js
```javascript
const components = [
  // ... existing components
  { name: 'testimonials', target: '#testimonials-placeholder' }
];
```

## 📝 Component List

| Component | File | Purpose |
|-----------|------|---------|
| Header | `header.html` | Navigation menu and logo |
| Hero | `hero.html` | Main banner with CTA |
| Home About | `home-about.html` | About section with certifications |
| Departments | `featured-departments.html` | Department cards |
| Services | `featured-services.html` | Service offerings |
| Find Doctor | `find-a-doctor.html` | Doctor search and profiles |
| CTA | `call-to-action.html` | Call-to-action section |
| Emergency | `emergency-info.html` | Emergency contact information |
| Footer | `footer.html` | Footer with links and copyright |

## 🌐 Using Components on Other Pages

To use these components on other pages (about.html, contact.html, etc.):

### 1. Add the component loader script
```html
<script src="assets/js/component-loader.js"></script>
```

### 2. Add placeholders where needed
```html
<!-- Reuse header on any page -->
<div id="header-placeholder"></div>

<!-- Reuse footer on any page -->
<div id="footer-placeholder"></div>
```

### 3. Customize component loading (optional)
You can load specific components by creating a custom loader or modifying the existing one.

## 🔄 Component Updates

When you update a component:
- All pages using that component will automatically reflect changes
- No need to update multiple files
- Consistent updates across the entire site

## 🐛 Troubleshooting

### Components not loading?
1. Check browser console for errors
2. Ensure `component-loader.js` is included before `main.js`
3. Verify component file names match the loader configuration
4. Check that placeholder IDs match the target selectors

### Styling issues after loading?
1. Make sure CSS is loaded before components
2. Check if AOS or other plugins need reinitialization
3. Verify that the `componentsLoaded` event is triggering

### Script not working?
The component loader dispatches a `componentsLoaded` event. Hook into it:
```javascript
document.addEventListener('componentsLoaded', function() {
  // Your initialization code here
  console.log('All components are ready!');
});
```

## 📦 File Sizes

Before refactoring: `index.html` = ~1000+ lines
After refactoring: `index.html` = ~95 lines (90% reduction!)

## 🎯 Next Steps

Consider these enhancements:
- Create components for other pages (about, contact, etc.)
- Add loading animations during component fetch
- Implement component caching for better performance
- Create a component library documentation
- Add error handling and fallbacks for failed component loads

---

**Note**: Keep `index-old.html` as a backup until you're confident the component system is working correctly.
