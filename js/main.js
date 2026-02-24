// Main JavaScript file for CV website

document.addEventListener('DOMContentLoaded', function() {
    
    // Implement Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Define content translations
    const translations = {
        zh: {
            title: '個人履歷 - Sharon Chiu',
            jobTitle: '應徵 前端實習工程師',
            tagline: '熱愛前端開發，追求優質使用者體驗',
            location: '桃園市中壢區',
            aboutTitle: '關於我',
            aboutText: '就讀國立中央大學資訊管理學系，具備 Python、資料庫與前端開發基礎。積極參與競賽，接觸資料清洗、模型訓練與資料視覺化。規劃取得 AIF-C01 雲端證照，持續深化資料分析與雲端服務專業能力。',
            experienceTitle: '工作經歷',
            jobTitle1: '暑期工讀生',
            period1: '2024年7月 - 2024年8月',
            company1: '中華電信研究院',
            achievement1_1: '負責輿情新聞、客服對話與司法公開判決書等基於大語言模型微調之 NLP 資料處理與標註',
            achievement1_2: '完成近千筆資料的處理與標註工作，確保資料品質符合模型訓練需求',
            achievement1_3: '協助優化資料標註流程，提升團隊整體工作效率',
            educationTitle: '教育背景',
            degree: '資訊管理學系',
            educationPeriod: '2023 - 2027',
            university: '國立中央大學',
            educationDetails: 'GPA 4.3<br>112學年度管理學院院長獎',
            skillsTitle: '技術技能',
            frontend: '前端',
            backend: '後端',
            cloudDevOps: '雲端與開發維運',
            projectsTitle: '精選專案',
            project1Title: 'Talent Swap',
            projectDesc: '以技能換技能為核心的媒合平台',
            project2Title: '校園接駁車預約系統',
            project2Desc: '提供中央大學往返高鐵桃園站及中壢火車站的接駁車線上預約服務。支援四條路線每日六個時段的預約，並提供快捷查詢與預約提醒功能。',
            project3Title: '個人作品集網站',
            viewProject: '查看作品 →',
            footer: '使用 HTML、CSS 和 JavaScript 建立。',
            themeButton: '🌙 深色模式'
        },
        en: {
            title: 'Personal CV - Sharon Chiu',
            jobTitle: 'Applying for Frontend Intern Engineer',
            tagline: 'Passionate about frontend development and quality user experience',
            location: 'Zhongli, Taoyuan',
            aboutTitle: 'About Me',
            aboutText: 'Information Management student at National Central University with skills in Python, databases, and front-end development. Actively participating in competitions, gaining experience in data cleaning, model training, and visualization. Planning to obtain AIF-C01 cloud certification.',
            experienceTitle: 'Work Experience',
            period1: 'July 2024 - August 2024',
            company1: 'Chunghwa Telecom Laboratories',
            jobTitle1: 'Summer Intern',
            achievement1_1: 'Responsible for NLP data processing and annotation based on large language model fine-tuning for public opinion news, customer service dialogues, and judicial court decisions',
            achievement1_2: 'Completed processing and annotation of nearly 1,000 data entries, ensuring data quality meets model training requirements',
            achievement1_3: 'Assisted in optimizing data annotation workflow, improving overall team efficiency',
            educationTitle: 'Education',
            degree: 'Information Management',
            educationPeriod: '2023 - 2027',
            university: 'National Central University',
            educationDetails: 'GPA 4.3<br>Dean\'s List Award, College of Management (2023-2024)',
            skillsTitle: 'Technical Skills',
            frontend: 'Frontend',
            backend: 'Backend',
            cloudDevOps: 'Cloud & DevOps',
            projectsTitle: 'Featured Projects',
            project1Title: 'Talent Swap',
            projectDesc: 'A skill-exchange platform connecting people to trade their expertise',
            project2Title: 'Campus Shuttle Booking System',
            project2Desc: 'An online reservation system for NCU shuttle buses connecting to Taoyuan HSR Station and Zhongli Train Station. Supporting 4 routes with 6 daily time slots, providing quick search and booking reminder features.',
            project3Title: 'Personal Portfolio Website',
            viewProject: 'View Project →',
            footer: 'Built with HTML, CSS, and JavaScript.',
            themeButton: '☀️ Light Mode'
        }
    };
    
    // Function to update page content
    function updateContent(lang) {
        const t = translations[lang];
        
        // Update document title
        document.title = t.title;
        
        // Update profile info
        document.querySelector('.title').textContent = t.jobTitle;
        document.querySelector('.tagline').textContent = t.tagline;
        
        // Update location
        document.querySelectorAll('.contact-item span')[5].textContent = t.location;
        
        // Update section titles
        document.querySelectorAll('.section-title')[0].textContent = t.aboutTitle;
        document.querySelectorAll('.section-title')[1].textContent = t.experienceTitle;
        document.querySelectorAll('.section-title')[2].textContent = t.educationTitle;
        document.querySelectorAll('.section-title')[3].textContent = t.skillsTitle;
        document.querySelectorAll('.section-title')[4].textContent = t.projectsTitle;
        
        // Update about section
        document.querySelector('.about p').textContent = t.aboutText;
        
        // Update work experience
        const periods = document.querySelectorAll('.period');
        if (periods.length >= 1) {
            periods[0].textContent = t.period1;
        }
        if (periods.length >= 3) {
            periods[2].textContent = t.educationPeriod;
        }
        
        const companies = document.querySelectorAll('.company');
        if (companies.length >= 1) {
            companies[0].textContent = t.company1;
        }
        if (companies.length >= 3) {
            companies[2].textContent = t.university;
        }
        
        const timelineHeaders = document.querySelectorAll('.timeline-header h4');
        if (timelineHeaders.length >= 1) {
            timelineHeaders[0].textContent = t.jobTitle1;
        }
        if (timelineHeaders.length >= 3) {
            timelineHeaders[2].textContent = t.degree;
        }
        
        // Update achievements
        const achievements = document.querySelectorAll('.achievements li');
        if (achievements.length >= 3) {
            achievements[0].textContent = t.achievement1_1;
            achievements[1].textContent = t.achievement1_2;
            achievements[2].textContent = t.achievement1_3;
        }
        
        // Update education
        document.querySelector('.education p:last-child').innerHTML = t.educationDetails;
        
        // Update skills categories
        const skillCategories = document.querySelectorAll('.skill-category h4');
        if (skillCategories.length >= 3) {
            skillCategories[0].textContent = t.frontend;
            skillCategories[1].textContent = t.backend;
            skillCategories[2].textContent = t.cloudDevOps;
        }
        
        // Update projects
        const projectCards = document.querySelectorAll('.project-card');
        if (projectCards.length >= 1) {
            projectCards[0].querySelector('h4').textContent = t.project1Title;
            projectCards[0].querySelector('p').textContent = t.projectDesc;
            const link1 = projectCards[0].querySelector('.project-link');
            if (link1) link1.textContent = t.viewProject;
        }
        if (projectCards.length >= 2) {
            projectCards[1].querySelector('h4').textContent = t.project2Title;
            projectCards[1].querySelector('p').textContent = t.project2Desc;
            const link2 = projectCards[1].querySelector('.project-link');
            if (link2) link2.textContent = t.viewProject;
        }
        if (projectCards.length >= 3) {
            projectCards[2].querySelector('h4').textContent = t.project3Title;
            const link3 = projectCards[2].querySelector('.project-link');
            if (link3) link3.textContent = t.viewProject;
        }
        
        // Update footer
        document.querySelector('.footer p').innerHTML = '&copy; 2026 Sharon Chiu. ' + t.footer;
        
        // Update theme button
        themeToggle.textContent = t.themeButton;
    }
    
    // Load saved theme when page loads
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateContent('en');
    } else {
        updateContent('zh');
    }
    
    // Add click event listener to toggle theme
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Update content based on current theme
        if (body.classList.contains('dark-mode')) {
            updateContent('en');
            localStorage.setItem('theme', 'dark');
        } else {
            updateContent('zh');
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add scroll animations to sections
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
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add a function to show notifications
    function showNotification(message, duration = 3000) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: white;
            padding: 15px 25px;
            border-radius: 8px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            opacity: 0;
            transform: translateX(100px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        
        // Remove notification after duration
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, duration);
    }
    
    // Add click-to-copy functionality for email
    const emailElement = document.querySelector('.contact-item span:nth-child(2)');
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.addEventListener('click', function() {
            const email = this.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                const currentLang = body.classList.contains('dark-mode') ? 'en' : 'zh';
                const message = currentLang === 'zh' ? '電子郵件已複製！' : 'Email copied!';
                showNotification(message);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    }
    
    // Add hover effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    console.log('CV website loaded successfully!');
});
