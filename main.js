const slides = [
    { img: "./assets/map_banner.jpg", h4: "Software Engineering Intern | Java Spring &nbsp;  Javascript  &nbsp; SQL  &nbsp; React", h1: "WALMART GLOBAL TECH", p: "Migrated SQL queries from Elasticsearch to Google BigQuery, enabling reliable auditing and reporting by syncing critical tables for long-term data access. <br><br> Improved pallet investigation time by 40% by designing React front-end dashboards and integrating Spring Boot REST APIs with real-time timestamp tracking, improving inventory accuracy across DCs.<br><br> Revived a $146M revenue stream by developing a driver confirmation and lumper fee system with Azure SQL, React, and Java Spring Boot, enabling DCs to accurately charge suppliers for unloading services." },
    { img: "./assets/map_banner2.jpg", h4: "Vice President | React &nbsp;  Typescript &nbsp;  Git &nbsp;  Docker", h1: "Engineering Teacher's Assistant Organization", p: " Developed a website for TAO, reaching an audience of 5,000+ students, utilizing React and TypeScript. <br><br>  Implemented ShadCN library to create a uniform UX for students to access 2 years of review materials. <br><br> Performed code reviews and collaborated with 9 teammates using Docker and Git to avoid conflicts." },
    { img: "./assets/map_banner3.jpg", h4: "Game Development Intern | Research &nbsp;  Microsoft Excel &nbsp;  Communication", h1: "Southern Methodist University - HuMIn Game Lab", p: "Organized file data of 800+ blocks/entities, documenting connections between each block with Microsoft Excel. <br><br> Researched CS interest of 4 school districts using a modded Minecraft game, with 90% educator approval. <br><br> Communicated with PhD graduates and professors in Game Design using Slack on the development of the project." },
    { img: "./assets/map_banner4.jpg", h4: "Software Development Intern | Unity Game Engine &nbsp;  VR/AR &nbsp;  Gamification &nbsp;  C#", h1: "Amodo Technologies LLC", p: "Developed an interactive therapy program with VR/AR technology using C# and Unity Game Engine. <br><br> Transcribed real time narration of video game footage to streamline voice line generation. <br><br> Researched 8 gamification tools and wrote a manual of the application of tools for future game development." }
];

const leag_slides = [
    { img: "./assets/shurima.jpg", h4: "Software Engineering Intern | Java Spring &nbsp;  Javascript  &nbsp; SQL  &nbsp; React", h1: "Walmart Global Tech", p: "Migrated SQL queries from Elasticsearch to Google BigQuery, enabling reliable auditing and reporting by syncing critical tables for long-term data access. <br><br> Improved pallet investigation time by 40% by designing React front-end dashboards and integrating Spring Boot REST APIs with real-time timestamp tracking, improving inventory accuracy across DCs.<br><br> Revived a $146M revenue stream by developing a driver confirmation and lumper fee system with Azure SQL, React, and Java Spring Boot, enabling DCs to accurately charge suppliers for unloading services." },
    { img: "./assets/ionia.jpg", h4: "Vice President | React &nbsp;  Typescript &nbsp;  Git &nbsp;  Docker", h1: "Engineering Teacher's Assistant Organization", p: " Developed a website for TAO, reaching an audience of 5,000+ students, utilizing React and TypeScript. <br><br>  Implemented ShadCN library to create a uniform UX for students to access 2 years of review materials. <br><br> Performed code reviews and collaborated with 9 teammates using Docker and Git to avoid conflicts." },
    { img: "./assets/aram.jpg", h4: "Game Development Intern | Research &nbsp;  Microsoft Excel &nbsp;  Communication", h1: "Southern Methodist University - HuMIn Game Lab", p: "Organized file data of 800+ blocks/entities, documenting connections between each block with Microsoft Excel. <br><br> Researched CS interest of 4 school districts using a modded Minecraft game, with 90% educator approval. <br><br> Communicated with PhD graduates and professors in Game Design using Slack on the development of the project." },
    { img: "./assets/targon.jpg", h4: "Software Development Intern | Unity Game Engine &nbsp;  VR/AR &nbsp;  Gamification &nbsp;  C#", h1: "Amodo Technologies LLC", p: "Developed an interactive therapy program with VR/AR technology using C# and Unity Game Engine. <br><br> Transcribed real time narration of video game footage to streamline voice line generation. <br><br> Researched 8 gamification tools and wrote a manual of the application of tools for future game development." }
];

let activeSlides = slides;
let currentIndex = 0;

let imgElement, h4Element, h1Element, pElement, nextButton;

function setActiveSlides() {
    const savedTheme = localStorage.getItem('currentTheme');
    const styleElement = document.getElementById('mainStylesheet');
    const href = savedTheme || (styleElement ? styleElement.getAttribute('href') : null);

    if (href === 'league_styles.css') {
        activeSlides = leag_slides;
    } else {
        activeSlides = slides;
    }

    if (currentIndex >= activeSlides.length) currentIndex = 0;

    if (imgElement && h4Element && h1Element && pElement) {
        showSlide(currentIndex);
    }
}

function showSlide(index) {
    if (!activeSlides || activeSlides.length === 0) return;

    index = index % activeSlides.length;
    currentIndex = index;

    if (!imgElement || !h4Element || !h1Element || !pElement) return;

    const slide = activeSlides[index];
    imgElement.src = slide.img;
    h4Element.innerHTML = slide.h4;
    h1Element.textContent = slide.h1;
    pElement.innerHTML = slide.p;
}

function toggleStyleSheet() {
    var styleElement = document.getElementById('mainStylesheet');
    const currentHref = styleElement.getAttribute('href');

    if (currentHref === 'styles.css') {
        styleElement.setAttribute('href', 'league_styles.css');
        localStorage.setItem('currentTheme', 'league_styles.css');
    } else {
        styleElement.setAttribute('href', 'styles.css');
        localStorage.setItem('currentTheme', 'styles.css');
    }

    setActiveSlides();
}

window.onload = function() {
    const savedTheme = localStorage.getItem('currentTheme');
    if (savedTheme) {
        const styleElement = document.getElementById('mainStylesheet');
        styleElement.href = savedTheme;
    }

    setActiveSlides();
};

document.addEventListener('DOMContentLoaded', function() {
    const selectionItems = document.querySelectorAll('.selection-item');

    const titleElement = document.getElementById('project-title');
    const summaryElement = document.getElementById('project-summary');
    const featuresElement = document.getElementById('project-features');
    const imageElementProj = document.getElementById('project-image');
    const linkElement = document.getElementById('project-link');

    selectionItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();

            selectionItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');

            titleElement.textContent = this.dataset.title;
            summaryElement.textContent = this.dataset.summary;
            imageElementProj.src = this.dataset.image;
            linkElement.href = this.dataset.link;

            featuresElement.innerHTML = "";
            JSON.parse(this.dataset.features).forEach(f => {
                const li = document.createElement("li");
                li.textContent = f;
                featuresElement.appendChild(li);
            });
        });
    });

    const inspoWrapper = document.querySelector('.alt-inspo-wrapper');
    const inspoImg = document.getElementById('inspo-img');

    window.addEventListener('scroll', () => {
        if (document.getElementById('mainStylesheet').getAttribute('href') === 'league_styles.css') {
            if (!inspoImg || !inspoWrapper) return;
            const rect = inspoImg.getBoundingClientRect();
            const triggerPoint = window.innerHeight * 0.55;
            if (rect.top < triggerPoint) {
                inspoWrapper.classList.add('active');
            }
        }
    });

    imgElement = document.getElementById('carousel-img');
    h4Element = document.getElementById('carousel-h4');
    h1Element = document.getElementById('carousel-h1');
    pElement = document.getElementById('carousel-p');
    nextButton = document.getElementById('next-button');

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % activeSlides.length;
            showSlide(currentIndex);
        });
    }

    setActiveSlides();
});
