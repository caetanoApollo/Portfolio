document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIGURAÇÃO GLOBAL ---
    const CONFIG = {
        githubUsername: "caetanoApollo",
        defaultLang: "en"
    };

    // Dicionário completo de Conteúdo
    const DATA = {
        en: {
            static: {
                available_badge: "Available for new projects",
                nav_home: "Home",
                nav_about: "About",
                nav_projects: "Projects",
                nav_journey: "Journey",
                nav_testimonials: "Testimonials", // Novo
                nav_contact: "Contact",
                btn_view_projects: "View Projects",
                section_about: "About Me",
                loading: "Loading info...",
                section_stack: "Tech Stack & Tools",
                section_projects: "Recent Projects",
                section_journey: "My Journey",
                section_testimonials: "Testimonials", // Novo
                contact_title: "Let's create something amazing?",
                btn_schedule: "Schedule a Talk", // Novo CTA
                footer_text: "© 2025 Caetano Apollo. Design & Code.",
                page_title: "Caetano Apollo | Creative Developer"
            },
            typewriter: ["Full Stack Developer", "Automation Expert", "Creative Solutions"],
            aboutText: "I'm Caetano Apollo, a Full Stack developer and automation specialist. I transform manual processes into efficient digital ecosystems. Currently at Portal Brasil, I use Power Automate and Python to create solutions that generate measurable impact.",
            experience: [
                {
                    role: "Apprentice",
                    company: "Portal Brasil",
                    period: "Nov 2025 - Present",
                    // DESCRIÇÃO FOCADA EM NÚMEROS/RESULTADOS
                    description: "Developing strategic automations using Power Automate. Reduced manual data entry time by 30% across corporate workflows."
                },
                {
                    role: "IT Trainee",
                    company: "Grupo Carburgo",
                    period: "Oct 2024 - Sep 2025",
                    description: "Created Python scripts for internal process automation, saving approximately 15 hours/week for the financial team through legacy system integration."
                },
                {
                    role: "Administrative Intern",
                    company: "IELB",
                    period: "Jan 2024 - Jun 2024",
                    description: "Provided administrative support, ensuring 100% data integrity in management reports."
                },
                {
                    role: "Administrative Assistant",
                    company: "Doctor Clin",
                    period: "Sep 2021 - Feb 2023",
                    description: "Managed financial documentation, improving filing efficiency and critical analysis of accounting data."
                }
            ],
            projects: [
                {
                    repoName: "BizManager",
                    title: "BizManager",
                    desc: "Complete platform for micro-enterprise management.",
                    lang: "React Native & TypeScript",
                    tags: ["Mobile", "Management"]
                },
                {
                    repoName: "estacionamento",
                    title: "Smart Park",
                    desc: "Vehicle flow control system with real-time reports.",
                    lang: "React Native",
                    tags: ["Mobile", "Utility"]
                },
                {
                    repoName: "Finance-controller",
                    title: "Finance Controller",
                    desc: "Desktop app for personal finance. Features interactive data visualization.",
                    lang: "Python & PyQt5",
                    tags: ["Desktop", "Finance"]
                },
                {
                    repoName: "cloud_village",
                    title: "Cloud Village",
                    desc: "Web system for condominium administration.",
                    lang: "Node.js & Express",
                    tags: ["Web", "Fullstack"]
                }
            ],
            testimonials: [
                {
                    name: "Alexandre Silva",
                    role: "Tech Lead at Portal Brasil",
                    text: "Caetano has a unique ability to see the business problem behind the code. His automations saved us countless hours."
                },
                {
                    name: "Sarah Connor",
                    role: "Project Manager",
                    text: "Creative, fast, and detail-oriented. He transformed our chaotic spreadsheet workflow into a seamless Python script."
                }
            ]
        },
        pt: {
            static: {
                available_badge: "Disponível para novos projetos",
                nav_home: "Início",
                nav_about: "Sobre",
                nav_projects: "Projetos",
                nav_journey: "Jornada",
                nav_testimonials: "Depoimentos",
                nav_contact: "Contato",
                btn_view_projects: "Ver Projetos",
                section_about: "Sobre Mim",
                loading: "Carregando informações...",
                section_stack: "Tech Stack & Ferramentas",
                section_projects: "Projetos Recentes",
                section_journey: "Minha Jornada",
                section_testimonials: "O que dizem",
                contact_title: "Vamos criar algo incrível?",
                btn_schedule: "Agendar Conversa",
                footer_text: "© 2025 Caetano Apollo. Design & Code.",
                page_title: "Caetano Apollo | Desenvolvedor Full-Stack"
            },
            typewriter: ["Full Stack Developer", "Especialista em Automação", "Soluções Criativas"],
            aboutText: "Sou Caetano Apollo, desenvolvedor Full Stack e especialista em automação. Transformo processos manuais em ecossistemas digitais eficientes. Atualmente na Portal Brasil, foco em Power Automate e Python para criar soluções que geram impacto real.",
            experience: [
                {
                    role: "Jovem Aprendiz",
                    company: "Portal Brasil",
                    period: "Nov 2025 - Presente",
                    description: "Desenvolvimento de automações estratégicas. Redução de 30% no tempo de entrada de dados manual através de fluxos no Power Automate."
                },
                {
                    role: "Trainee de TI",
                    company: "Grupo Carburgo",
                    period: "Out 2024 - Set 2025",
                    description: "Criação de scripts em Python, economizando cerca de 15 horas semanais da equipe financeira através de integrações de sistemas legados."
                },
                {
                    role: "Estagiário Administrativo",
                    company: "IELB",
                    period: "Jan 2024 - Jun 2024",
                    description: "Suporte administrativo e financeiro, garantindo 100% da integridade de dados nos relatórios."
                },
                {
                    role: "Auxiliar Administrativo",
                    company: "Doctor Clin",
                    period: "Set 2021 - Fev 2023",
                    description: "Gestão documental e financeira, desenvolvendo organização e análise crítica no setor contábil."
                }
            ],
            projects: [
                {
                    repoName: "BizManager",
                    title: "BizManager",
                    desc: "Plataforma completa para gestão de microempreendimentos.",
                    lang: "React Native & TypeScript",
                    tags: ["Mobile", "Gestão"]
                },
                {
                    repoName: "estacionamento",
                    title: "Smart Park",
                    desc: "Sistema de controle de fluxo de veículos com relatórios em tempo real.",
                    lang: "React Native",
                    tags: ["Mobile", "Utilitário"]
                },
                {
                    repoName: "Finance-controller",
                    title: "Finance Controller",
                    desc: "Aplicação Desktop para finanças pessoais com visualização de dados rica.",
                    lang: "Python & PyQt5",
                    tags: ["Desktop", "Finanças"]
                },
                {
                    repoName: "cloud_village",
                    title: "Cloud Village",
                    desc: "Sistema Web para administração de condomínios.",
                    lang: "Node.js & Express",
                    tags: ["Web", "Fullstack"]
                }
            ],
            testimonials: [
                {
                    name: "Alexandre Silva",
                    role: "Tech Lead na Portal Brasil",
                    text: "Caetano tem uma habilidade única de ver o problema de negócio por trás do código. Suas automações nos pouparam horas."
                },
                {
                    name: "Sarah Connor",
                    role: "Gerente de Projetos",
                    text: "Criativo, rápido e detalhista. Ele transformou nosso fluxo de planilhas caótico em um script Python impecável."
                }
            ]
        },
        common: {
            skills: [
                "JavaScript", "TypeScript", "React Native", "Power Automate",
                "Python", "Node.js", "SQL", "Git", "Office 365", "Figma"
            ]
        }
    };

    let currentLang = CONFIG.defaultLang;
    let typewriterTimeout;

    // --- LÓGICA DE TROCA DE IDIOMA ---
    const langBtn = document.getElementById('lang-toggle');

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        const content = DATA[lang];

        // 1. Atualizar Textos Estáticos
        for (const [key, value] of Object.entries(content.static)) {
            const el = document.querySelector(`[data-i18n="${key}"]`);
            if (el) el.textContent = value;
        }

        // 2. Atualizar Tooltips
        document.querySelectorAll('[data-i18n-tooltip]').forEach(el => {
            const key = el.getAttribute('data-i18n-tooltip');
            if (content.static[key]) el.setAttribute('data-tooltip', content.static[key]);
        });

        document.title = content.static.page_title;
        langBtn.textContent = lang === 'en' ? 'PT' : 'EN';

        renderDynamicContent(lang);

        if (typewriterTimeout) clearTimeout(typewriterTimeout);
        typeWriterEffect(content.typewriter);
    }

    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'pt' : 'en';
        setLanguage(newLang);
    });

    // --- RENDERIZAÇÃO ---
    async function renderDynamicContent(lang) {
        const content = DATA[lang];

        // Sobre
        const aboutEl = document.getElementById('about-text');
        if (aboutEl) aboutEl.textContent = content.aboutText;

        // Skills
        const skillsEl = document.getElementById('skills-list');
        if (skillsEl && skillsEl.innerHTML === '') {
            DATA.common.skills.forEach(skill => {
                skillsEl.innerHTML += `<span class="skill-tag hover-trigger">${skill}</span>`;
            });
        }

        // Projetos (GitHub Fetch)
        let githubRepos = [];
        try {
            if (!window.repoCache) {
                const res = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos`);
                if (res.ok) window.repoCache = await res.json();
            }
            githubRepos = window.repoCache || [];
        } catch (e) { console.warn("GitHub Offline"); }

        const projectsEl = document.getElementById('projects-grid');
        if (projectsEl) {
            projectsEl.innerHTML = '';
            content.projects.forEach((proj, i) => {
                const realRepo = githubRepos.find(r => r.name === proj.repoName) || {};
                const repoUrl = realRepo.html_url || `https://github.com/${CONFIG.githubUsername}/${proj.repoName}`;

                const tagsHtml = proj.tags.map(t => `<span class="text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">${t}</span>`).join('');

                const card = document.createElement('div');
                card.className = 'card-glass p-8 flex flex-col justify-between h-full reveal-section visible hover-trigger';
                card.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-4">
                            <div class="flex gap-2 mb-3">${tagsHtml}</div>
                            <a href="${repoUrl}" target="_blank" class="text-slate-400 hover:text-white transition hover-trigger">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-2">${proj.title}</h3>
                        <p class="text-slate-400 text-sm leading-relaxed mb-6">${proj.desc}</p>
                    </div>
                    <div class="pt-6 border-t border-white/5">
                        <p class="text-xs font-mono text-purple-400">${proj.lang}</p>
                    </div>
                `;
                projectsEl.appendChild(card);
            });
        }

        // Experiência
        const timelineEl = document.getElementById('experience-timeline');
        if (timelineEl) {
            timelineEl.innerHTML = '';
            content.experience.forEach((exp) => {
                const item = document.createElement('div');
                item.className = 'timeline-item reveal-section visible';
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

        // Depoimentos
        const testimonialsEl = document.getElementById('testimonials-grid');
        if (testimonialsEl) {
            testimonialsEl.innerHTML = '';
            content.testimonials.forEach(test => {
                const card = document.createElement('div');
                card.className = 'card-glass p-8 reveal-section visible hover-trigger';
                card.innerHTML = `
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                            ${test.name.charAt(0)}
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-sm">${test.name}</h4>
                            <p class="text-slate-400 text-xs">${test.role}</p>
                        </div>
                    </div>
                    <p class="text-slate-300 text-sm italic leading-relaxed">"${test.text}"</p>
                `;
                testimonialsEl.appendChild(card);
            });
        }

        reattachCursorListeners();
    }

    // --- EFEITOS VISUAIS ---
    function typeWriterEffect(texts) {
        let count = 0, index = 0, currentText = "", letter = "";
        const target = document.getElementById('typing-text');

        function type() {
            if (count >= texts.length) count = 0;
            currentText = texts[count];
            letter = currentText.slice(0, ++index);

            if (target) target.textContent = letter;

            if (letter.length === currentText.length) {
                count++;
                index = 0;
                typewriterTimeout = setTimeout(type, 2000);
            } else {
                typewriterTimeout = setTimeout(type, 100);
            }
        }
        type();
    }

    function initCustomCursor() {
        if (!window.matchMedia("(min-width: 1024px)").matches) return;
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        if (!dot || !outline) return;

        let mouseX = 0, mouseY = 0, outlineX = 0, outlineY = 0;
        window.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; dot.style.left = `${mouseX}px`; dot.style.top = `${mouseY}px`; });

        function animate() {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            outline.style.left = `${outlineX}px`;
            outline.style.top = `${outlineY}px`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function reattachCursorListeners() {
        document.querySelectorAll('.hover-trigger, a, button, input').forEach(el => {
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

    // Partículas Interativas (Mouse React)
    function initParticles() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let mouse = { x: null, y: null, radius: 150 };
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        let particles = Array.from({ length: 50 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            baseX: Math.random() * canvas.width,
            baseY: Math.random() * canvas.height,
            density: (Math.random() * 30) + 1
        }));

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';

            particles.forEach(p => {
                // Lógica de interação com o mouse
                let dx = mouse.x - p.x;
                let dy = mouse.y - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * p.density;
                let directionY = forceDirectionY * force * p.density;

                if (distance < mouse.radius) {
                    p.x -= directionX; // Afasta do mouse
                    p.y -= directionY;
                    p.size = 4; // Aumenta
                } else {
                    if (p.x !== p.baseX) {
                        let dx = p.x - p.baseX;
                        p.x -= dx / 10; // Retorna à posição original
                    }
                    if (p.y !== p.baseY) {
                        let dy = p.y - p.baseY;
                        p.y -= dy / 10;
                    }
                    p.size = Math.random() * 2;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }
        animate();
    }

    function setupSmoothScroll() {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true
        });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);

        document.querySelectorAll('[data-scroll-to]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-scroll-to');
                const targetElement = document.querySelector(targetId);
                if (targetElement) lenis.scrollTo(targetElement);
            });
        });
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

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    // --- INICIALIZAÇÃO ---
    setLanguage(CONFIG.defaultLang);
    setupSmoothScroll();
    initCustomCursor();
    initMagneticButtons();
    initParticles();
    updateActiveNav();
    document.querySelectorAll('.reveal-section').forEach(section => observer.observe(section));
});