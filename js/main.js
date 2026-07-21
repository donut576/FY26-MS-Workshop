// Main JavaScript file for CV website

document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // ── 翻譯內容 ──────────────────────────────────────────────
    const translations = {
        zh: {
            title: '個人履歷 - Sharon Chiu',
            tagline: '資料分析 × AI 應用 × 雲端開發',
            location: '桃園市中壢區',
            aboutTitle: '關於我',
            aboutText: '就讀國立中央大學資訊管理學系，具備 Python、資料庫與前端開發基礎。積極參與競賽，接觸資料清洗、模型訓練與資料視覺化。取得 AIF-C01 雲端證照，持續深化資料分析與雲端服務專業能力。',
            experienceTitle: '工作經歷',
            jobTitle1: '暑期工讀生',
            period1: '2024年7月 - 2024年8月',
            company1: '中華電信研究院',
            achievement1_1: '負責輿情新聞、客服對話與司法公開判決書等基於大語言模型微調之 NLP 資料處理與標註',
            achievement1_2: '完成近千筆資料的處理與標註工作，確保資料品質符合模型訓練需求',
            achievement1_3: '協助優化資料標註流程，提升團隊整體工作效率',
            jobTitle2: 'NAPAI計畫兼任助教',
            period2: '2026年7月 - 至今',
            company2: '國立中央大學',
            achievement2_1: 'Agentic AI 相關課程之教學支援',
            achievement2_2: '參與校園選課 AI Agent 專案，整理選課法規、抵免規定與學生常見查詢情境',
            achievement2_3: '協助規劃 RAG 測試問題集與評估指標，驗證校務法規問答之正確性與引用可信度',
            educationTitle: '教育背景',
            degree: '我的學位',
            educationPeriod: '2023 - 2027',
            university: '國立中央大學',
            educationDetails: 'GPA 4.16 / 4.3<br>112學年度管理學院院長獎',
            skillsTitle: '技術技能',
            frontend: '前端/後端',
            mlDl: 'ML/DL',
            cloudDevOps: '雲端與開發維運',
            projectsTitle: '精選專案',
            project1Title: '校園接駁車預約系統',
            project1Desc: '提供中央大學往返高鐵桃園站及中壢火車站的接駁車線上預約服務。支援四條路線每日六個時段的預約，並提供快捷查詢與預約提醒功能。',
            project2Title: 'Artwork Artist Classification: ARTCNN',
            project2Desc: '設計含 Squeeze-and-Excitation (SE) block 與殘差連接的自刻 CNN，針對 50 位畫家、36 倍類別不平衡資料以反比頻率類別權重補償，並實作 4 向翻轉 TTA 集成推論，最終於 Kaggle Best Artworks 資料集達成 52.7% 測試準確率。',
            project3Title: 'Sentiment Analysis: BERT Fine-tuning',
            project3Desc: '在 50,000 筆 IMDB 影評資料集上 fine-tune bert-base-uncased，接上自定義雙層分類頭（768 → 256 → 2），結合 AdamW、線性 warmup scheduler 與梯度裁剪穩定訓練，最終二元情緒分類測試準確率達 92.36%。',
            project4Title: 'Taoyuan 3D Geo-AI Air Quality Forecasting System',
            project4Desc: '建立桃園市 3KM × 3KM 網格化即時空氣品質預報系統，以 React Native + PostgreSQL + PostGIS 為基礎建設，整合 EPA 測站、LiDAR 垂直剖面與 NASA MODIS 等多源資料，採 Hybrid Kriging × Random Forest 模型推估全區 PM2.5 濃度，並提供 2D 熱點圖與 12 小時歷史回放功能。',
            project5Title: 'Stocklens',
            project5Desc: '開發股票資料分析與視覺化系統，整理股價、技術指標與趨勢資料，提供互動式圖表與投資觀察介面，強化資料處理、前端呈現與分析模型整合能力。',
            project6Title: 'Squirrel Traffic Advisory',
            project6Desc: '開發大型活動交通指揮系統中的 AI 策略諮詢 agent，讓指揮官能輸入 What-if 情境並即時取得 SOP 觸發條款、判定依據與應變建議。同時整理官方車流、人流、路網、突發事件與 SOP 資料，建立共用資料架構與模組分支流程，支援後續 Dashboard、事件處置、解釋鏈與多語通報模組整合。',
            project7Title: 'Kubelite',
            project7Desc: '打造輕量化 Kubernetes 學習與部署工具，整合容器化服務、部署設定與狀態檢視流程，協助快速理解雲端原生應用從開發到上線的完整脈絡。',
            viewProject: '查看作品 →',
            footer: '使用 HTML、CSS 和 JavaScript 建立。',
            themeButton: '🌙 深色模式',
            emailCopied: '電子郵件已複製！'
        },
        en: {
            title: 'Personal CV - Sharon Chiu',
            tagline: 'Data Analytics × AI Applications × Cloud Development',
            location: 'Zhongli, Taoyuan',
            aboutTitle: 'About Me',
            aboutText: 'Information Management student at National Central University with skills in Python, databases, and front-end development. Actively participating in competitions, gaining experience in data cleaning, model training, and visualization. Obtained AIF-C01 cloud certification, continuously deepening expertise in data analysis and cloud services.',
            experienceTitle: 'Work Experience',
            jobTitle1: 'Summer Intern',
            period1: 'July 2024 - August 2024',
            company1: 'Chunghwa Telecom Laboratories',
            achievement1_1: 'Responsible for NLP data processing and annotation based on large language model fine-tuning for public opinion news, customer service dialogues, and judicial court decisions',
            achievement1_2: 'Completed processing and annotation of nearly 1,000 data entries, ensuring data quality meets model training requirements',
            achievement1_3: 'Assisted in optimizing data annotation workflow, improving overall team efficiency',
            jobTitle2: 'NAPAI Project Teaching Assistant',
            period2: 'July 2026 - Present',
            company2: 'National Central University',
            achievement2_1: 'Provided teaching support for Agentic AI related courses',
            achievement2_2: 'Participated in the campus course-selection AI Agent project, organizing course regulations, credit-waiver rules, and common student query scenarios',
            achievement2_3: 'Assisted in designing RAG test question sets and evaluation metrics to verify accuracy and citation reliability of academic regulation Q&A',
            educationTitle: 'Education',
            degree: 'Bachelor of Information Management',
            educationPeriod: '2023 - 2027',
            university: 'National Central University',
            educationDetails: 'GPA 4.16 / 4.3<br>Dean\'s List Award, College of Management (2023–2024)',
            skillsTitle: 'Technical Skills',
            frontend: 'Frontend / Backend',
            mlDl: 'ML/DL',
            cloudDevOps: 'Cloud & DevOps',
            projectsTitle: 'Featured Projects',
            project1Title: 'Campus Shuttle Booking System',
            project1Desc: 'An online reservation system for NCU shuttle buses connecting to Taoyuan HSR Station and Zhongli Train Station. Supporting 4 routes with 6 daily time slots, with quick search and booking reminder features.',
            project2Title: 'Artwork Artist Classification: ARTCNN',
            project2Desc: 'Designed a custom CNN with Squeeze-and-Excitation (SE) blocks and residual connections for 50-artist classification. Addressed 36x class imbalance with inverse-frequency class weights and implemented 4-way flip TTA ensemble inference, achieving 52.7% test accuracy on the Kaggle Best Artworks dataset.',
            project3Title: 'Sentiment Analysis: BERT Fine-tuning',
            project3Desc: 'Fine-tuned bert-base-uncased on 50,000 IMDB reviews with a custom two-layer classification head (768 → 256 → 2), using AdamW, linear warmup scheduler, and gradient clipping for stable training. Achieved 92.36% binary sentiment classification accuracy.',
            project4Title: 'Taoyuan 3D Geo-AI Air Quality Forecasting System',
            project4Desc: 'Built a 3KM × 3KM grid-based real-time air quality forecasting system for Taoyuan City using React Native, PostgreSQL, and PostGIS. Integrated multi-source data including EPA stations, LiDAR vertical profiles, and NASA MODIS, applying a Hybrid Kriging × Random Forest model to estimate PM2.5 concentration with 2D heatmap and 12-hour playback features.',
            project5Title: 'Stocklens',
            project5Desc: 'Developed a stock data analysis and visualization system that organizes price data, technical indicators, and trend signals into interactive charts and an investment research interface.',
            project6Title: 'Squirrel Traffic Advisory',
            project6Desc: 'Developed an AI strategy advisory agent for large-event traffic command systems, enabling commanders to input What-if scenarios and receive real-time SOP trigger clauses, decision rationale, and response recommendations. Also organized official traffic flow, pedestrian flow, road network, incident, and SOP data into a shared data architecture supporting Dashboard, incident handling, explanation chain, and multilingual notification modules.',
            project7Title: 'Kubelite',
            project7Desc: 'Built a lightweight Kubernetes learning and deployment tool integrating containerized services, deployment configuration, and status inspection to help quickly understand the full cloud-native application lifecycle from development to production.',
            viewProject: 'View Project →',
            footer: 'Built with HTML, CSS, and JavaScript.',
            themeButton: '☀️ Light Mode',
            emailCopied: 'Email copied!'
        }
    };

    // ── 套用翻譯到頁面 ────────────────────────────────────────
    function updateContent(lang) {
        const t = translations[lang];

        document.title = t.title;
        document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';

        // 標語
        document.querySelector('.tagline').textContent = t.tagline;

        // 聯絡資訊：location 是第 3 個 .contact-item
        const locationSpan = document.querySelector('.contact-item:nth-child(3) span:nth-child(2)');
        if (locationSpan) locationSpan.textContent = t.location;

        // 區塊標題
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles[0].textContent = t.aboutTitle;
        sectionTitles[1].textContent = t.experienceTitle;
        sectionTitles[2].textContent = t.educationTitle;
        sectionTitles[3].textContent = t.skillsTitle;
        sectionTitles[4].textContent = t.projectsTitle;

        // 關於我
        document.querySelector('.about p').textContent = t.aboutText;

        // 工作經歷
        const expSection = document.querySelector('.experience');
        if (expSection) {
            const timelineItems = expSection.querySelectorAll('.timeline-item');
            // 第一份工作
            if (timelineItems.length >= 1) {
                timelineItems[0].querySelector('.timeline-header h4').textContent = t.jobTitle1;
                timelineItems[0].querySelector('.period').textContent = t.period1;
                timelineItems[0].querySelector('.company').textContent = t.company1;
                const achievements1 = timelineItems[0].querySelectorAll('.achievements li');
                if (achievements1.length >= 3) {
                    achievements1[0].textContent = t.achievement1_1;
                    achievements1[1].textContent = t.achievement1_2;
                    achievements1[2].textContent = t.achievement1_3;
                }
            }
            // 第二份工作
            if (timelineItems.length >= 2) {
                timelineItems[1].querySelector('.timeline-header h4').textContent = t.jobTitle2;
                timelineItems[1].querySelector('.period').textContent = t.period2;
                timelineItems[1].querySelector('.company').textContent = t.company2;
                const achievements2 = timelineItems[1].querySelectorAll('.achievements li');
                if (achievements2.length >= 3) {
                    achievements2[0].textContent = t.achievement2_1;
                    achievements2[1].textContent = t.achievement2_2;
                    achievements2[2].textContent = t.achievement2_3;
                }
            }
        }

        // 教育背景
        const eduSection = document.querySelector('.education');
        if (eduSection) {
            eduSection.querySelector('.timeline-header h4').textContent = t.degree;
            eduSection.querySelector('.period').textContent = t.educationPeriod;
            eduSection.querySelector('.company').textContent = t.university;
            // 最後一個 <p> 是詳細資訊
            const ps = eduSection.querySelectorAll('p');
            ps[ps.length - 1].innerHTML = t.educationDetails;
        }

        // 技能分類標題（3 個）
        const skillCategories = document.querySelectorAll('.skill-category h4');
        if (skillCategories.length >= 3) {
            skillCategories[0].textContent = t.frontend;
            skillCategories[1].textContent = t.mlDl;
            skillCategories[2].textContent = t.cloudDevOps;
        }

        // 專案卡片（7 張）
        const projectCards = document.querySelectorAll('.project-card');
        const projectData = [
            { title: t.project1Title, desc: t.project1Desc },
            { title: t.project2Title, desc: t.project2Desc },
            { title: t.project3Title, desc: t.project3Desc },
            { title: t.project4Title, desc: t.project4Desc },
            { title: t.project5Title, desc: t.project5Desc },
            { title: t.project6Title, desc: t.project6Desc },
            { title: t.project7Title, desc: t.project7Desc }
        ];
        projectCards.forEach((card, i) => {
            if (projectData[i]) {
                card.querySelector('h4').textContent = projectData[i].title;
                card.querySelector('p').textContent = projectData[i].desc;
                const link = card.querySelector('.project-link');
                if (link) link.textContent = t.viewProject;
            }
        });

        // Footer
        document.querySelector('.footer p').innerHTML = `&copy; 2026 Sharon Chiu. ${t.footer}`;

        // 主題按鈕文字
        themeToggle.textContent = t.themeButton;
    }

    // ── 初始化：讀取儲存的主題 ────────────────────────────────
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateContent('en');
    } else {
        updateContent('zh');
    }

    // ── 主題切換（同步語言）───────────────────────────────────
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            updateContent('en');
            localStorage.setItem('theme', 'dark');
        } else {
            updateContent('zh');
            localStorage.setItem('theme', 'light');
        }
    });

    // ── 平滑捲動 ──────────────────────────────────────────────
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

    // ── 捲動進場動畫 ──────────────────────────────────────────
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // ── 通知提示 ──────────────────────────────────────────────
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
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateX(0)';
        }, 10);
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100px)';
            setTimeout(() => document.body.removeChild(notification), 300);
        }, duration);
    }

    // ── 點擊複製 Email ────────────────────────────────────────
    const emailSpan = document.querySelector('.contact-item:nth-child(1) span:nth-child(2)');
    if (emailSpan) {
        emailSpan.style.cursor = 'pointer';
        emailSpan.addEventListener('click', function() {
            const email = this.textContent.trim();
            navigator.clipboard.writeText(email).then(() => {
                const lang = body.classList.contains('dark-mode') ? 'en' : 'zh';
                showNotification(translations[lang].emailCopied);
            }).catch(err => console.error('Failed to copy email:', err));
        });
    }

    // ── 技能標籤 hover 效果 ───────────────────────────────────
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
