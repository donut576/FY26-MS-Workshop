// Main JavaScript file for CV website

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeToggleButton(true);
    }
    
    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Update button text
        updateThemeToggleButton(isDarkMode);
        
        // Add animation effect
        animateThemeToggle();
    });
    
    // Update theme toggle button text and icon
    function updateThemeToggleButton(isDarkMode) {
        themeToggle.textContent = isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
    
    // Animate theme toggle
    function animateThemeToggle() {
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    }
    
    // Smooth scrolling for anchor links (if any added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add intersection observer for animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add hover effect to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Add click to copy email functionality
    const emailElements = document.querySelectorAll('.contact-item');
    emailElements.forEach(element => {
        const text = element.textContent.trim();
        if (text.includes('@')) {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function() {
                const email = text.match(/[\w.-]+@[\w.-]+\.\w+/);
                if (email) {
                    copyToClipboard(email[0]);
                    showCopyNotification(element);
                }
            });
        }
    });
    
    // Copy to clipboard function
    function copyToClipboard(text) {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text);
        } else {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    }
    
    // Show copy notification
    function showCopyNotification(element) {
        const notification = document.createElement('div');
        notification.textContent = 'Copied to clipboard!';
        notification.style.position = 'fixed';
        notification.style.top = '20px';
        notification.style.right = '20px';
        notification.style.backgroundColor = 'var(--primary-color)';
        notification.style.color = 'white';
        notification.style.padding = '12px 24px';
        notification.style.borderRadius = '8px';
        notification.style.boxShadow = 'var(--shadow-lg)';
        notification.style.zIndex = '1000';
        notification.style.animation = 'slideIn 0.3s ease';
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    }
    
    // Add CSS for notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Console log for developers
    console.log('%c👋 Welcome to my CV!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #6b7280; font-size: 14px;');
});

// Add print styles functionality
function printCV() {
    window.print();
}

// Expose print function globally if needed
window.printCV = printCV;
