document.addEventListener('DOMContentLoaded', () => {

    const CONFIG = {
        githubUsername: "caetanoApollo",
        defaultLang: "pt"
    };

    const DATA = {
        pt: {
            aboutText: "Sou Caetano Apollo, estudante de Engenharia de Software e fundador da Async Studio. Minha missão é construir arquiteturas sólidas, transformar processos ineficientes em automações inteligentes e desenvolver o BizManager. Eu não escrevo apenas linhas de código — eu construo ferramentas que escalam negócios reais.",
            experience: [
                { role: "CEO & Software Engineer", company: "Async Studio", period: "2026 - Presente", description: "Liderança estratégica da marca e engenharia do BizManager, ERP focado em PMEs." },
                { role: "Analista de Inovação", company: "Portal Brasil", period: "Jan 2026 - Presente", description: "Engenharia de fluxos com Power Automate para automação de operações vitais." },
                { role: "Jovem Aprendiz", company: "Portal Brasil", period: "Nov 2025 - Jan 2026", description: "Otimização de processos corporativos com soluções inovadoras." },
                { role: "Trainee de TI", company: "Grupo Carburgo", period: "Out 2024 - Set 2025", description: "Scripts Python para integrar e automatizar sistemas legados do setor financeiro." },
                { role: "Estagiário Administrativo", company: "IELB", period: "Jan 2024 - Jun 2024", description: "Suporte em rotinas financeiras, controle de contas e emissão de relatórios." },
                { role: "Auxiliar Administrativo", company: "Doctor Clin", period: "Set 2021 - Fev 2023", description: "Atuação no setor contábil, elaborando planilhas financeiras e organizando documentação." }
            ],
            education: [
                { school: "Universidade La Salle", degree: "Engenharia de Software", period: "2026 - 2029" },
                { school: "Senac RS", degree: "Desenv. Web e Mobile", period: "2023 - 2025" }
            ],
            certifications: ["ClickUp Admin", "ClickUp Advanced AI", "Python Orientado a Objetos", "Git & GitHub"],
            stack: [
                { name: "Python", category: "Backend / Dados" },
                { name: "JavaScript / TS", category: "Linguagem Base" },
                { name: "React Native", category: "Mobile Dev" },
                { name: "Node.js", category: "Backend" },
                { name: "Power Automate", category: "Automação / RPA" },
                { name: "ClickUp & Notion", category: "Gestão / AI" }
            ],
            projectDescriptions: {
                "bizmanager": "Um ecossistema completo de gestão (ERP) focado em Pequenas e Médias Empresas (PMEs). Desenvolvido para transformar processos ineficientes em operações automatizadas, gerando escalabilidade e controle financeiro preciso.",
                "smart": "Plataforma inteligente para mobilidade e controle veicular. Combina automação e interface nativa para otimizar o acesso, monitoramento e a gestão de frotas ou estacionamentos em tempo real.",
                "finance": "Aplicação focada em análise gráfica e inteligência de dados financeiros. Consome APIs de mercado para fornecer painéis interativos, facilitando a visualização de métricas e a tomada de decisões de investimento.",
                "cloud": "Infraestrutura web projetada para modernizar a gestão de condomínios. Centraliza a comunicação, reservas de áreas comuns e processos administrativos em uma arquitetura em nuvem segura e escalável."
            }
        },
        en: {
            aboutText: "I'm Caetano Apollo, Software Engineering student and founder of Async Studio. My mission is to build solid architectures, transform inefficient processes into smart automations, and develop BizManager. I don't just write lines of code — I build tools that scale real businesses.",
            experience: [
                { role: "CEO & Software Engineer", company: "Async Studio", period: "2026 - Present", description: "Strategic leadership and engineering of BizManager, an ERP for SMEs." },
                { role: "Innovation Analyst", company: "Portal Brasil", period: "Jan 2026 - Present", description: "Flow engineering with Power Automate for automating vital operations." },
                { role: "Apprentice", company: "Portal Brasil", period: "Nov 2025 - Jan 2026", description: "Optimization of corporate processes with innovative solutions." },
                { role: "IT Trainee", company: "Grupo Carburgo", period: "Oct 2024 - Sep 2025", description: "Python scripts to connect and automate the financial sector's legacy systems." },
                { role: "Administrative Intern", company: "IELB", period: "Jan 2024 - Jun 2024", description: "Support in financial routines, account control, and reports." },
                { role: "Administrative Assistant", company: "Doctor Clin", period: "Sep 2021 - Feb 2023", description: "Fundamental role in the accounting sector, preparing financial spreadsheets." }
            ],
            education: [
                { school: "Universidade La Salle", degree: "Software Engineering", period: "2026 - 2029" },
                { school: "Senac RS", degree: "Web & Mobile Development Technician", period: "2023 - 2025" }
            ],
            certifications: ["ClickUp Admin", "ClickUp Advanced AI", "Python Object-Oriented", "Git & GitHub"],
            stack: [
                { name: "Python", category: "Backend / Data" },
                { name: "JavaScript / TS", category: "Core Language" },
                { name: "React Native", category: "Mobile Dev" },
                { name: "Node.js", category: "Backend" },
                { name: "Power Automate", category: "Automation / RPA" },
                { name: "ClickUp & Notion", category: "Management / AI" }
            ],
            projectDescriptions: {
                "bizmanager": "A complete management ecosystem (ERP) focused on Small and Medium Enterprises (SMEs). Developed to transform inefficient processes into automated operations, generating scalability and precise financial control.",
                "smart": "Intelligent platform for mobility and vehicular control. Combines automation and a native interface to optimize access, monitoring, and real-time fleet or parking management.",
                "finance": "Application focused on graphical analysis and financial data intelligence. Consumes market APIs to provide interactive dashboards, facilitating the visualization of metrics and investment decision-making.",
                "cloud": "Web infrastructure designed to modernize condominium management. Centralizes communication, common area reservations, and administrative processes in a secure and scalable cloud architecture."
            }
        }
    };

    let currentLang = CONFIG.defaultLang;

    const langBtn = document.getElementById('lang-toggle');

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        const content = DATA[lang];

        for (const [key, value] of Object.entries(content.static || {})) {
            const el = document.querySelector(`[data-i18n="${key}"]`);
            if (el) el.innerHTML = value;
        }

        langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';

        document.getElementById('about-text').textContent = content.aboutText;

        const timelineEl = document.getElementById('experience-timeline');
        if (timelineEl) {
            timelineEl.innerHTML = '';
            content.experience.forEach((exp) => {
                timelineEl.innerHTML += `
                    <div class="experience-card relative p-6 md:p-8 rounded-2xl border border-[#F8FAFC]/5 hover:border-[#00E5FF]/30 transition-all duration-300 group overflow-hidden bg-[#F8FAFC]/[0.02] backdrop-blur-sm">
                        <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#00E5FF] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                        <span class="text-[#00E5FF] font-mono text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-3 block opacity-80">${exp.period}</span>
                        <h3 class="text-xl md:text-2xl font-bold text-[#F8FAFC] mb-1 tracking-tight md:group-hover:translate-x-2 transition-transform duration-300">${exp.role}</h3>
                        <h4 class="text-[#F8FAFC]/60 font-medium mb-3 md:mb-4 text-sm md:text-base md:group-hover:translate-x-2 transition-transform duration-300">${exp.company}</h4>
                        <p class="text-[#F8FAFC]/50 leading-relaxed text-xs md:text-sm md:group-hover:translate-x-2 transition-transform duration-300">${exp.description}</p>
                    </div>`;
            });
        }

        const eduList = document.getElementById('education-list');
        if (eduList) {
            eduList.innerHTML = '';
            content.education.forEach(edu => {
                eduList.innerHTML += `
                    <div class="education-card p-5 md:p-6 rounded-2xl border border-[#F8FAFC]/5 hover:border-[#00E5FF]/30 transition-all duration-300 group bg-[#F8FAFC]/[0.02] backdrop-blur-sm">
                        <h4 class="text-lg md:text-xl font-bold text-[#F8FAFC] mb-1 group-hover:text-[#00E5FF] transition-colors">${edu.school}</h4>
                        <p class="text-[#F8FAFC]/60 text-xs md:text-sm mb-3">${edu.degree}</p>
                        <span class="text-[#00E5FF] font-mono text-[10px] md:text-xs tracking-widest px-3 py-1 bg-[#00E5FF]/10 rounded-full inline-block">${edu.period}</span>
                    </div>
                `;
            });
        }

        const certGrid = document.getElementById('certifications-grid');
        if (certGrid) {
            certGrid.innerHTML = '';
            content.certifications.forEach(cert => {
                certGrid.innerHTML += `<span class="bg-transparent border border-[#F8FAFC]/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-[#00E5FF] hover:text-[#0D0E15] hover:border-[#00E5FF] transition-colors cursor-pointer text-[#F8FAFC]/70">${cert}</span>`;
            });
        }

        const stackGrid = document.getElementById('stack-grid');
        if (stackGrid) {
            stackGrid.innerHTML = '';
            content.stack.forEach(tech => {
                stackGrid.innerHTML += `
                    <div class="experience-card p-3 md:p-4 rounded-xl border border-[#F8FAFC]/5 bg-[#F8FAFC]/[0.01] hover:bg-[#F8FAFC]/[0.03] transition-colors flex flex-col justify-center">
                        <span class="text-[#F8FAFC] font-bold text-xs md:text-sm mb-1">${tech.name}</span>
                        <span class="text-[#00E5FF]/60 font-mono text-[9px] md:text-[10px] uppercase tracking-wider">${tech.category}</span>
                    </div>
                `;
            });
        }

        init3DTilt();
        runTerminalAnimation(lang);
        fetchGitHubProjects();
    }

    langBtn.addEventListener('click', () => setLanguage(currentLang === 'pt' ? 'en' : 'pt'));

    function getProjectDescription(repoName) {
        const content = DATA[currentLang];
        const keys = Object.keys(content.projectDescriptions);

        for (let key of keys) {
            if (repoName.toLowerCase().includes(key)) {
                return content.projectDescriptions[key];
            }
        }
        return null;
    }

    async function fetchGitHubProjects() {
        const projectsEl = document.getElementById('projects-list');
        if (!projectsEl) return;

        projectsEl.innerHTML = '<div class="py-10 md:py-20 flex justify-center items-center"><div class="text-[#00E5FF] font-mono text-xs md:text-sm animate-pulse tracking-widest uppercase">Estabelecendo conexão com GitHub...</div></div>';

        try {
            const response = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=4`);
            if (!response.ok) throw new Error('Falha ao buscar repositórios');
            const repos = await response.json();

            projectsEl.innerHTML = '';

            if (repos.length === 0) {
                projectsEl.innerHTML = '<div class="py-10 text-[#F8FAFC]/50 font-mono text-sm">Nenhum repositório público encontrado.</div>';
                return;
            }

            repos.forEach((repo, index) => {
                const customDesc = getProjectDescription(repo.name);
                const defaultFallback = currentLang === 'pt' ? 'Sistema em desenvolvimento focado em resolver problemas estruturais.' : 'System under development focused on solving structural problems.';
                const displayDesc = customDesc || repo.description || defaultFallback;

                projectsEl.innerHTML += `
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-item border-b border-[#F8FAFC]/10 py-6 md:py-10 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer group block decoration-none">
                        <div class="flex items-center gap-4 md:gap-6 w-full md:w-auto mb-3 md:mb-0">
                            <span class="text-xs md:text-sm font-mono text-[#F8FAFC]/40 group-hover:text-[#00E5FF] transition-colors">0${index + 1}</span>
                            <h3 class="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter uppercase project-title text-[#F8FAFC] group-hover:text-[#00E5FF] transition-colors truncate max-w-full md:max-w-[500px]">${repo.name}</h3>
                        </div>
                        <div class="flex flex-col md:flex-row items-start md:items-center justify-between md:justify-end w-full md:w-auto gap-3 md:gap-6">
                            <p class="text-xs sm:text-sm lg:text-base text-[#F8FAFC]/50 font-medium w-full md:max-w-[250px] lg:max-w-[400px] md:truncate" title="${displayDesc}">${displayDesc}</p>
                            <div class="flex items-center justify-between w-full md:w-auto mt-2 md:mt-0">
                                <span class="text-[10px] md:text-xs font-mono bg-[#F8FAFC]/5 px-3 py-1 rounded-full uppercase text-[#F8FAFC]/80 border border-[#F8FAFC]/10 shrink-0">${repo.language || 'Code'}</span>
                                <svg class="w-6 h-6 md:w-8 md:h-8 project-arrow text-[#00E5FF] opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </a>
                `;
            });
        } catch (error) {
            projectsEl.innerHTML = '<div class="py-10 text-red-500 font-mono text-sm">Erro ao carregar repositórios do GitHub.</div>';
            console.error(error);
        }
    }

    let typeWriterInterval;
    function runTerminalAnimation(lang) {
        const terminal = document.getElementById('terminal-content');
        if (!terminal) return;

        const lines = lang === 'pt' ? [
            "> Inicializando sistema Core...",
            "> Carregando módulos do BizManager [OK]",
            "> Conectando ao ecossistema Async Studio...",
            "> Automação Power Automate: Ativa.",
            "> Status: Operacional e escalando."
        ] : [
            "> Initializing Core system...",
            "> Loading BizManager modules [OK]",
            "> Connecting to Async Studio ecosystem...",
            "> Power Automate Automation: Active.",
            "> Status: Operational and scaling."
        ];

        terminal.innerHTML = '';
        let lineIndex = 0;
        if (typeWriterInterval) clearTimeout(typeWriterInterval);

        function typeLine() {
            if (lineIndex < lines.length) {
                const p = document.createElement('p');
                p.className = 'terminal-line';
                terminal.appendChild(p);

                let charIndex = 0;
                const text = lines[lineIndex];

                function typeChar() {
                    if (charIndex < text.length) {
                        p.textContent += text.charAt(charIndex);
                        charIndex++;
                        typeWriterInterval = setTimeout(typeChar, 30 + Math.random() * 40);
                    } else {
                        lineIndex++;
                        typeWriterInterval = setTimeout(typeLine, 400);
                    }
                }
                typeChar();
            } else {
                const cursor = document.createElement('span');
                cursor.className = 'terminal-cursor';
                cursor.textContent = '█';
                terminal.appendChild(cursor);
            }
        }

        typeWriterInterval = setTimeout(typeLine, 1000);
    }

    function init3DTilt() {
        if (window.innerWidth < 768) return; // Desativa 3D tilt no mobile para evitar conflito de touch
        const cards = document.querySelectorAll('.tilt-element');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = ((y / rect.height) - 0.5) * -10;
                const rotateY = ((x / rect.width) - 0.5) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            });
        });
    }

    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    if (cursor && follower && window.innerWidth >= 768) { // Apenas executa lógica do cursor no Desktop
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        function renderCursor() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            requestAnimationFrame(renderCursor);
        }
        renderCursor();

        document.querySelectorAll('a, button, .magnetic-btn, .project-item, .tilt-element').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
        });
    }

    if (window.innerWidth >= 768) { // Magnetic btn apenas em telas maiores
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            btn.addEventListener('mousemove', function (e) {
                window.requestAnimationFrame(() => {
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
                });
            });
            btn.addEventListener('mouseleave', function () {
                window.requestAnimationFrame(() => {
                    this.style.transform = `translate(0px, 0px)`;
                });
            });
        });
    }

    function initGSAP() {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline();
        tl.to("#loader-bar", { width: "100%", duration: 1.5, ease: "power4.inOut" })
            .to(".preloader-text", { y: "0%", duration: 1, ease: "expo.out" }, "-=0.5")
            .to("#preloader", { y: "-100%", duration: 1, ease: "expo.inOut", delay: 0.5 })
            .from(".hero-anim", { y: 50, opacity: 0, duration: 1, stagger: 0.1, ease: "expo.out" }, "-=0.5");

        gsap.utils.toArray('.gs-reveal').forEach(elem => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "expo.out"
            });
        });
    }

    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        touchMultiplier: 2 // Melhor resposta de scroll no mobile
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setLanguage(CONFIG.defaultLang);
    initGSAP();
});