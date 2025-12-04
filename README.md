# FY26-MS-Workshop

> 💡 **Project Goal**: Through this project, you will gain a deep understanding of **Azure Static Web Apps** deployment process and learn how to leverage **GitHub Copilot** to boost your development efficiency!

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

> 💬 **Tip**: If you encounter any issues during development or deployment, make good use of **GitHub Copilot** to help you solve them! Whether it's code problems, deployment challenges, or feature suggestions, Copilot can provide instant assistance.

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

## ✅ Complete the TODO Tasks

**Don't know where to start?** This project includes comprehensive TODO comments throughout the codebase to guide you step by step!

### 📝 TODO Checklist

1. **`index.html`** - Personalize your CV:
   - Replace placeholder text with your personal information
   - Update contact details (email, phone, location, LinkedIn)
   - Add your work experience and achievements
   - List your education background
   - Showcase your technical skills
   - Highlight your featured projects

2. **`css/style.css`** - Implement Dark Mode:
   - Add dark mode CSS variables
   - Create color scheme for dark theme
   - Test theme switching

3. **`js/main.js`** - Add Interactive Features:
   - Implement dark mode toggle functionality
   - Add localStorage to save theme preference
   - Create smooth scrolling for navigation
   - Implement scroll animations using IntersectionObserver
   - Add click-to-copy email functionality
   - Create notification system
   - Add hover effects to skill tags

> 💡 **Pro Tip**: Use GitHub Copilot to help you complete these TODOs! Simply start typing or use Copilot Chat to ask "How do I implement dark mode?" or "Show me how to use IntersectionObserver for scroll animations."

### Customize Your CV

1. **Personal Information**: Edit `index.html` to update:
   - Follow the TODO comments in the HTML file
   - Replace all placeholder text with your actual information

2. **Styling**: Modify `css/style.css` to:
   - Change color scheme (update CSS variables in `:root`)
   - Implement dark mode styles (see TODO comments)
   - Adjust layout and spacing

3. **Functionality**: Enhance `js/main.js` to:
   - Complete all TODO tasks for interactive features
   - Use Copilot to help implement complex functionality
   - Test each feature as you build it

## 🌐 Deploy to Azure

This website is designed to be easily deployed to Azure Static Web Apps. Follow the comprehensive guide in [AZURE_DEPLOYMENT.md](AZURE_DEPLOYMENT.md) for step-by-step instructions.

### Quick Deploy

1. Sign in to [Azure Portal](https://portal.azure.com)
2. Create a new Static Web App
3. Connect your GitHub repository
4. Azure will automatically build and deploy your site!