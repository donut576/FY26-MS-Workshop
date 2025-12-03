# FY26-MS-Workshop

## Personal CV Static Website

A modern, responsive personal CV website built with HTML, CSS, and JavaScript. This project demonstrates a clean, professional portfolio that can be easily deployed to Azure Static Web Apps.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Interactive Elements**: Smooth animations, hover effects, and scroll animations
- **Modern UI**: Clean, professional design with a focus on readability
- **Copy to Clipboard**: Click email to copy it to clipboard
- **Print-Friendly**: Optimized for printing/PDF export

## 📁 Project Structure

```
.
├── index.html              # Main CV page with personal information
├── css/
│   └── style.css          # Styling and theme definitions
├── js/
│   └── main.js            # Interactive functionality and theme toggle
├── AZURE_DEPLOYMENT.md    # Complete guide for Azure deployment
└── README.md              # This file
```

## 🚀 Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd FY26-MS-Workshop
   ```

2. Open with a local server:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx http-server -p 8080
   
   # Using PHP
   php -S localhost:8080
   ```

3. Open your browser and navigate to `http://localhost:8080`

### Customize Your CV

1. **Personal Information**: Edit `index.html` to update:
   - Name, title, and contact information
   - Work experience and achievements
   - Education details
   - Technical skills
   - Featured projects

2. **Styling**: Modify `css/style.css` to:
   - Change color scheme (update CSS variables in `:root`)
   - Adjust layout and spacing
   - Customize fonts and typography

3. **Functionality**: Enhance `js/main.js` to:
   - Add new interactive features
   - Modify existing animations
   - Implement additional functionality

## 🌐 Deploy to Azure

This website is designed to be easily deployed to Azure Static Web Apps. Follow the comprehensive guide in [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) for step-by-step instructions.

### Quick Deploy

1. Sign in to [Azure Portal](https://portal.azure.com)
2. Create a new Static Web App
3. Connect your GitHub repository
4. Azure will automatically build and deploy your site!

**Deployment is free** - Azure Static Web Apps offers a generous free tier perfect for personal CV websites.

## 🎨 Customization Guide

### Changing Colors

The website uses CSS variables for easy theming. Update these in `css/style.css`:

```css
:root {
    --primary-color: #2563eb;     /* Main accent color */
    --secondary-color: #1e40af;   /* Secondary accent */
    --text-primary: #1f2937;      /* Main text color */
    --text-secondary: #6b7280;    /* Secondary text */
    /* ... more variables ... */
}
```

### Adding Sections

To add new sections to your CV:

1. Add HTML in `index.html` following the existing section structure
2. Use the `.section` class for consistent styling
3. Add any specific styles in `css/style.css`

### Modifying Layout

The site uses CSS Grid and Flexbox for layout. Key breakpoint:
- Mobile: `@media (max-width: 768px)` in `css/style.css`

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with variables, grid, and flexbox
- **JavaScript (Vanilla)**: No frameworks - pure JS for performance
- **Azure Static Web Apps**: Hosting and deployment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

For deployment help, see [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md)

---

**Built with ❤️ for developers seeking a professional online presence**