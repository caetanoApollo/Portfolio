document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS DO PORTFÓLIO ---
    const PORTFOLIO_DATA = {
        githubUsername: "caetanoApollo",
        linkedinData: {
            about: "Sou Caetano Apollo, desenvolvedor Full Stack e especialista em automação. Transformo processos manuais em ecossistemas digitais eficientes. Atualmente na Portal Brasil, foco em Power Automate e Python para criar soluções que geram impacto real. Tenho background administrativo, o que me dá uma visão única de negócio x código.",
            skills: [
                "JavaScript", "TypeScript", "React Native", "Power Automate",
                "Python", "Node.js", "SQL", "Git", "Office 365", "Figma"
            ],
            experience: [
                {
                    role: "Jovem Aprendiz",
                    company: "Portal Brasil",
                    period: "Nov 2025 - Presente",
                    description: "Desenvolvimento de automações estratégicas utilizando Power Automate para otimização de workflows corporativos e redução de retrabalho manual."
                },
                {
                    role: "Trainee de TI",
                    company: "Grupo Carburgo",
                    period: "Out 2024 - Set 2025",
                    description: "Criação de scripts em Python para automação de processos internos e integração entre sistemas legados."
                },
                {
                    role: "Estagiário Administrativo",
                    company: "IELB",
                    period: "Jan 2024 - Jun 2024",
                    description: "Suporte administrativo e financeiro, garantindo a integridade de dados e relatórios gerenciais."
                },
                {
                    role: "Auxiliar Administrativo",
                    company: "Doctor Clin",
                    period: "Set 2021 - Fev 2023",
                    description: "Gestão documental e financeira no setor contábil, desenvolvendo organização e análise crítica."
                }
            ]
        },
        featuredProjects: [
            {
                repoName: "BizManager",
                customTitle: "BizManager",
                customDescription: "Plataforma completa para gestão de microempreendimentos.",
                customLanguage: "React Native & TypeScript",
                tags: ["Mobile", "Gestão"]
            },
            {
                repoName: "estacionamento",
                customTitle: "Smart Park",
                customDescription: "Sistema de controle de fluxo de veículos com relatórios em tempo real.",
                customLanguage: "React Native",
                tags: ["Mobile", "Utilitário"]
            },
            {
                repoName: "Finance-controller",
                customTitle: "Finance Controller",
                customDescription: "Aplicação Desktop para gestão financeira pessoal e visualização de dados.",
                customLanguage: "Python & PyQt5",
                tags: ["Desktop", "Finanças"]
            },
            {
                repoName: "cloud_village",
                customTitle: "Cloud Village",
                customDescription: "Sistema Web para administração de condomínios e portaria.",
                customLanguage: "Node.js & Express",
                tags: ["Web", "Fullstack"]
            }
        ]
    };

    // --- 2. INICIALIZAÇÃO DO LENIS (SCROLL SUAVE) ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- 3. CONFIGURAÇÃO DE CLIQUES PARA SCROLL SUAVE ---
    function setupSmoothScroll() {
        document.querySelectorAll('[data-scroll-to]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // Impede o pulo padrão do navegador
                const targetId = this.getAttribute('data-scroll-to');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    lenis.scrollTo(targetElement);
                }
            });
        });
    }
    setupSmoothScroll();

    // --- 4. RENDERIZAÇÃO ---
    renderPortfolio(PORTFOLIO_DATA);

    // --- 5. OUTROS EFEITOS ---
    if (window.matchMedia("(min-width: 1024px)").matches) initCustomCursor();
    initMagneticButtons();
    typeWriterEffect(["Full Stack Developer", "Automação Inteligente", "Soluções Criativas"]);
    initParticles();
    updateActiveNav();

    // Reveal on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));
});


// --- FUNÇÕES AUXILIARES DE RENDERIZAÇÃO ---
async function renderPortfolio(data) {
    try {
        const aboutEl = document.getElementById('about-text');
        if (aboutEl) aboutEl.textContent = data.linkedinData.about;

        const skillsEl = document.getElementById('skills-list');
        if (skillsEl) {
            skillsEl.innerHTML = '';
            data.linkedinData.skills.forEach(skill => {
                skillsEl.innerHTML += `<span class="skill-tag hover-trigger">${skill}</span>`;
            });
        }

        let githubRepos = [];
        try {
            const response = await fetch(`https://api.github.com/users/${data.githubUsername}/repos`);
            if (response.ok) githubRepos = await response.json();
        } catch (e) { console.warn("GitHub Offline"); }

        const projectsEl = document.getElementById('projects-grid');
        if (projectsEl) {
            projectsEl.innerHTML = '';
            data.featuredProjects.forEach((proj, i) => {
                const realRepo = githubRepos.find(r => r.name === proj.repoName) || {};
                const repoUrl = realRepo.html_url || `https://github.com/${data.githubUsername}/${proj.repoName}`;
                const delay = i * 100;

                const card = document.createElement('div');
                card.className = 'card-glass p-8 flex flex-col justify-between h-full reveal-section hover-trigger';
                card.style.transitionDelay = `${delay}ms`;

                const tagsHtml = proj.tags ? proj.tags.map(t => `<span class="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">${t}</span>`).join('') : '';

                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex gap-2 mb-3">${tagsHtml}</div>
                            <a href="${repoUrl}" target="_blank" class="text-slate-400 hover:text-white transition hover-trigger">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">${proj.customTitle}</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6">${proj.customDescription}</p>
                    </div>
                    <div class="pt-6 border-t border-white/5">
                        <p class="text-xs font-mono text-purple-400">${proj.customLanguage}</p>
                    </div>
                `;
                projectsEl.appendChild(card);
            });
        }

        const timelineEl = document.getElementById('experience-timeline');
        if (timelineEl) {
            timelineEl.innerHTML = '';
            data.linkedinData.experience.forEach((exp, index) => {
                const item = document.createElement('div');
                item.className = `timeline-item reveal-section`;
                item.style.transitionDelay = `${index * 100}ms`;
                item.innerHTML = `
                    <span class="timeline-point hidden md:block"></span>
                    <div class="card-glass p-6 hover:bg-white/5 transition cursor-none hover-trigger">
                        <span class="text-cyan-400 font-mono text-xs tracking-widest uppercase">${exp.period}</span>
                        <h3 class="text-xl font-bold text-white mt-2">${exp.role}</h3>
                        <h4 class="text-purple-400 font-medium mb-3 text-sm">${exp.company}</h4>
                        <p class="text-slate-400 text-sm leading-relaxed">${exp.description}</p>
                    </div>
                `;
                timelineEl.appendChild(item);
            });
        }
        reattachCursorListeners();
        setTimeout(() => { document.querySelectorAll('.reveal-section').forEach(el => el.classList.add('visible')); }, 500);
    } catch (e) { console.error(e); }
}

// --- OUTRAS FUNÇÕES ---
function initCustomCursor() {
    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    if (!dot || !outline) return;
    let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
    window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`; });
    function animate() {
        outlineX += (mouseX - outlineX) * 0.15; outlineY += (mouseY - outlineY) * 0.15;
        outline.style.left = `${outlineX}px`; outline.style.top = `${outlineY}px`;
        requestAnimationFrame(animate);
    }
    animate();
}
function reattachCursorListeners() {
    document.querySelectorAll('.hover-trigger, a, button').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
}
function initMagneticButtons() {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const deltaX = ((e.clientX - rect.left - rect.width / 2) / 4);
            const deltaY = ((e.clientY - rect.top - rect.height / 2) / 4);
            btn.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(1.05)`;
        });
        btn.addEventListener('mouseleave', () => btn.style.transform = 'translate(0, 0) scale(1)');
    });
}
function typeWriterEffect(texts) {
    let count = 0, index = 0, currentText = "", letter = "";
    (function type() {
        if (count === texts.length) count = 0;
        currentText = texts[count];
        letter = currentText.slice(0, ++index);
        const target = document.getElementById('typing-text');
        if (target) target.textContent = letter;
        if (letter.length === currentText.length) { count++; index = 0; setTimeout(type, 2000); }
        else { setTimeout(type, 100); }
    }());
}
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const dots = document.querySelectorAll('.nav-dot, .dock-icon');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => { if (scrollY >= (sec.offsetTop - sec.clientHeight / 3)) current = sec.getAttribute('id'); });
        dots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('href').includes(current)) dot.classList.add('active');
        });
    });
}
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particles = Array.from({ length: 30 }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        size: Math.random() * 2, speedX: Math.random() * 0.2 - 0.1, speedY: Math.random() * 0.2 - 0.1
    }));
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.2)';
        particles.forEach(p => {
            p.x += p.speedX; p.y += p.speedY;
            if (p.x < 0) p.x = canvas.width; else if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height; else if (p.y > canvas.height) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}