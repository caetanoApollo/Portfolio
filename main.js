document.addEventListener('DOMContentLoaded', () => {

    // --- INICIALIZAÇÃO DA ROLAGEM SUAVE (LENIS) ---
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Adiciona o smooth scroll para os links de âncora do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                lenis.scrollTo(targetElement);
            }
        });
    });

    // --- CONFIGURAÇÕES E DADOS ---
    const GITHUB_USERNAME = 'caetanoApollo';
    const LINKEDIN_DATA = {
        about: `Sou Caetano Apollo, programador full-stack em formação, com foco em automações inteligentes e soluções digitais eficientes. Atualmente, atuo no Grupo Carburgo, onde desenvolvo automações utilizando Python para otimizar processos internos. Também possuo experiência anterior na área administrativa e contábil, o que me permite ter uma visão ampla de negócios e aplicação prática da tecnologia no dia a dia corporativo.`,
        skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Styled-Components', 'HTML5', 'CSS3', 'Git', 'GitHub', 'SQL', 'PostgreSQL', 'Python', 'Figma', 'Bootstrap',],
        experience: [
            { role: 'Desenvolvedor de automações', company: 'Grupo Carburgo', period: 'Out 2024 - Set 2025', description: 'Atuo na área de automação de processos internos, desenvolvendo soluções com Python para otimizar tarefas rotineiras e aumentar a eficiência operacional. Participo da identificação de oportunidades de automação, criação de scripts e integração entre sistemas, contribuindo diretamente para a transformação digital do grupo.' },
            { role: 'Estágiario Administrativo', company: 'IELB', period: 'jan 2024 - Jun 2024', description: 'Prestei suporte às rotinas administrativas e financeiras da secretaria, realizando atividades como: Lançamento e controle de contas a receber, atualização e organização de cadastro de membros, emissão de relatórios administrativos, apoio em demandas gerais do setor, contribuindo para o bom funcionamento das operações diárias' },
            { role: 'Auxiliar administrativo', company: 'Doctor Clin', period: 'Set 2021 - Fev 2023', description: 'Durante 1 ano e 6 meses, atuei no setor contábil, desempenhando tarefas fundamentais como: organização e arquivamento de documentos contábeis, elaboração de planilhas e relatórios financeiros, lançamento de notas e apoio no controle de despesas. Desenvolvi habilidades essenciais como atenção aos detalhes, proatividade e comprometimento em ambientes corporativos.' }
        ]
    };

    // --- LÓGICA DO HEADER SUPERIOR ---
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- LÓGICA DE PARTÍCULAS NO CANVAS ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray;

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY;
            this.size = size; this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color; ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) { this.directionX = -this.directionX; }
            if (this.y > canvas.height || this.y < 0) { this.directionY = -this.directionY; }
            this.x += this.directionX; this.y += this.directionY;
            this.draw();
        }
    }

    function initParticles() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 10000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 0.5;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .4) - .2;
            let directionY = (Math.random() * .4) - .2;
            let color = 'rgb(74, 0, 144)'; // Roxo com menos opacidade
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
        connectParticles();
    }

    function connectParticles() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 8) * (canvas.height / 8)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacityValue * 0.3})`; // Ciano com menos opacidade
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; initParticles(); });

    // --- LÓGICA DE BUSCA E POPULAÇÃO DE DADOS ---
    async function fetchGithubData() {
        try {
            const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
            if (!userResponse.ok) throw new Error('Erro ao buscar perfil do GitHub.');
            const userData = await userResponse.json();
            document.getElementById('github-avatar').src = userData.avatar_url;

            const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
            if (!reposResponse.ok) throw new Error('Erro ao buscar repositórios do GitHub.');
            const allRepos = await reposResponse.json();

            // --- ÁREA DE CUSTOMIZAÇÃO ---

            const featuredRepoNames = [
                'BizManager',
                'estacionamento',
                'cloud_village',
                'Finance-controller',
            ];

            // Filtra apenas os repositórios que você listou
            const featuredRepos = allRepos
                .filter(repo => featuredRepoNames.includes(repo.name))
                .map(repo => {
                    switch (repo.name) {
                        case 'BizManager':
                            repo.custom_title = 'BizManager';
                            repo.custom_description = 'O BizManager é um aplicativo robusto e intuitivo, desenhado especificamente para empoderar microempreendedores, centralizando e simplificando a administração de seus negócios.';
                            repo.custom_language = 'TypeScript, React Native, Node.js & Expo';
                            break;
                        case 'estacionamento':
                            repo.custom_title = 'Estacionamento';
                            repo.custom_description = 'App desenvolvido para gerenciar um estacionamento, com funcionalidades de cadastro de veículos, controle de entrada e saída, e geração de relatórios.Atividade feita em aula de React Native.';
                            repo.custom_language = 'JavaScript, React Native, Node.js & Expo';
                            break;
                        case 'cloud_village':
                            repo.custom_title = 'Cloud Village';
                            repo.custom_description = 'O Cloud Village é um sistema de gerenciamento de condomínio que permite administrar moradores e veículos de forma eficiente.';
                            repo.custom_language = 'HTML, CSS, JavaScript, Node.js & Express';
                            break;
                        case 'Finance-controller':
                            repo.custom_title = 'Finance Controller';
                            repo.custom_description = 'O Finance Controller é uma aplicação em Python que auxilia na gestão financeira pessoal, permitindo o controle de transações, visualização de gráficos e categorização de despesas e receitas.';
                            repo.custom_language = 'Python, PyQt5, SQLite';
                            break;
                    }
                    // Garante que a descrição customizada seja usada, ou a padrão do GitHub.
                    repo.display_description = repo.custom_description || repo.description || 'Um dos meus projetos no GitHub. Explore o repositório para saber mais.';
                    return repo;
                })
                // Ordena os repositórios filtrados para corresponder à ordem da sua lista
                .sort((a, b) => featuredRepoNames.indexOf(a.name) - featuredRepoNames.indexOf(b.name));

            displayProjects(featuredRepos);

        } catch (error) {
            console.error(error);
            document.getElementById('projects-grid').innerHTML = `<p class="text-red-400 col-span-full text-center">${error.message}</p>`;
        } finally {
            const spinner = document.getElementById('loading-spinner');
            if (spinner) spinner.style.display = 'none';
        }
    }

    function displayProjects(repos) {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';

        repos.forEach((repo, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.transitionDelay = `${index * 100}ms`;

            // Usa o título customizado se existir, senão usa o nome do repo
            const title = repo.custom_title || repo.name.replace(/-/g, ' ');
            // Usa a linguagem customizada se existir, senão usa a padrão
            const language = repo.custom_language || repo.language;

            projectCard.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-white">${title}</h3>
                    <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-purple-400 transition-colors">
                       <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </div>
                <p class="text-slate-400 text-sm mb-4 h-24">${repo.display_description}</p> 
            </div>
            <div>
                ${language ? `<p class="text-sm text-purple-400 font-mono">${language}</p>` : ''}
            </div>
        `;
            projectsGrid.appendChild(projectCard);
        });
    }

    function populateLinkedInData() {
        document.getElementById('about-text').textContent = LINKEDIN_DATA.about;
        const skillsList = document.getElementById('skills-list');
        skillsList.innerHTML = '';
        LINKEDIN_DATA.skills.forEach(skill => {
            skillsList.innerHTML += `<span class="bg-slate-800 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full">${skill}</span>`;
        });
        const timeline = document.getElementById('experience-timeline');
        timeline.innerHTML = '';
        LINKEDIN_DATA.experience.forEach((job) => {
            const item = document.createElement('div');
            item.className = 'timeline-card';
            item.innerHTML = `
                <h3 class="text-lg font-semibold text-slate-200">${job.role} <span class="text-purple-400">- ${job.company}</span></h3>
                <time class="block my-1 text-sm font-normal leading-none text-gray-500">${job.period}</time>
                <p class="text-base font-normal text-slate-400">${job.description}</p>`;
            timeline.appendChild(item);
        });
    }

    // --- LÓGICA DE ANIMAÇÕES E INTERAÇÕES ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-animation').forEach(section => { revealObserver.observe(section); });

    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('main section');
    const menuObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.dataset.section === sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-50% 0px -50% 0px' });
    sections.forEach(section => menuObserver.observe(section));

    // --- INICIALIZAÇÃO DAS FUNÇÕES ---
    initParticles();
    animateParticles();
    fetchGithubData();
    populateLinkedInData();
});

