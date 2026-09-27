/**
 * Language Toggle
 * Handles EN/PT-BR switching with localStorage persistence.
 */

(function () {
  const STORAGE_KEY = 'gt-lang';

  const translations = {
    'skip': { en: 'Skip to content', pt: 'Pular para o conteúdo' },
    'links.email': { en: 'email', pt: 'email' },

    'hero.tagline': {
      en: 'Mechanical Engineer by training, Data Scientist by passion. Machine Learning. Artificial Intelligence. Creating data products that impact thousands.',
      pt: 'Engenheiro Mecânico de formação, Cientista de Dados por paixão. Machine Learning. Inteligência Artificial. Criando produtos de dados que impactam milhares.'
    },

    'timeline.heading': { en: 'timeline', pt: 'linha do tempo' },
    'timeline.1.time': { en: '2025 - present', pt: '2025 - presente' },
    'timeline.1.title': {
      en: 'Freelance Data Scientist & Data Engineer',
      pt: 'Cientista de Dados & Engenheiro de Dados Freelance'
    },
    'timeline.1.b1': {
      en: 'Leading the technical development of a Record to Report solution for a $17B multinational with 90,000+ employees, used by finance teams to review and reconcile trial balances during month-end close',
      pt: 'Lidero o desenvolvimento técnico de uma solução de Record to Report para uma multinacional de US$ 17 bi com mais de 90.000 funcionários, usada por equipes financeiras para revisar e conciliar balancetes no fechamento mensal'
    },
    'timeline.1.b2': {
      en: 'Prototyping a solution for Brazil\'s 2026–2033 tax reform (CBS/IBS and split payment) that models tax obligations and credits end to end, reconciling to the cent against an independent calculation',
      pt: 'Desenvolvo um protótipo de solução para a reforma tributária brasileira de 2026–2033 (CBS/IBS e split payment), que modela obrigações e créditos tributários de ponta a ponta, conciliando ao centavo com um cálculo independente'
    },
    'timeline.1.b3': {
      en: 'Built Strongbox end to end (Python, Flask, PostgreSQL, React, Docker), an audit platform that checks SAP journal entries for risks such as segregation-of-duties breaches and backdated postings, and proves records were never altered using SHA-256 hash chains',
      pt: 'Construí o Strongbox de ponta a ponta (Python, Flask, PostgreSQL, React, Docker), uma plataforma de auditoria que verifica lançamentos contábeis do SAP em busca de riscos como violações de segregação de funções e lançamentos retroativos, e comprova que os registros nunca foram alterados usando cadeias de hash SHA-256'
    },
    'timeline.2.time': { en: '2025 - present', pt: '2025 - presente' },
    'timeline.2.title': {
      en: 'Senior Data Analyst & Project Manager at ExxonMobil',
      pt: 'Analista de Dados Sênior & Gerente de Projetos na ExxonMobil'
    },
    'timeline.2.b1': {
      en: 'Leading the Upstream Accounts Receivable implementation in Celonis for thousands of users, directing a 10+ person team from a global consulting firm, expected to deliver tens of millions of dollars in working capital improvement',
      pt: 'Lidero a implementação do Upstream Accounts Receivable no Celonis para milhares de usuários, coordenando uma equipe de mais de 10 pessoas de uma consultoria global, com expectativa de gerar dezenas de milhões de dólares em melhoria de capital de giro'
    },
    'timeline.2.b2': {
      en: 'Managing the Downstream Accounts Receivable model in Celonis for 1,000+ users, from operations and new features to adoption, saving hundreds of hours of analysis and contributing to tens of millions of dollars in working capital improvement',
      pt: 'Gerencio o modelo de Downstream Accounts Receivable no Celonis para mais de 1.000 usuários, da operação e novas funcionalidades à adoção, economizando centenas de horas de análise e contribuindo para dezenas de milhões de dólares em melhoria de capital de giro'
    },
    'timeline.2.b3': {
      en: 'Built an AI agent that drives Celonis from plain-language requests, tracing broken data loads, wrong KPIs, and failed jobs to their root cause and generating PQL, cutting troubleshooting from days to minutes for a team of 5',
      pt: 'Criei um agente de IA que opera o Celonis a partir de pedidos em linguagem natural, rastreando cargas de dados quebradas, KPIs incorretos e jobs com falha até a causa raiz e gerando código PQL, reduzindo a investigação de dias para minutos para uma equipe de 5 pessoas'
    },
    'timeline.3.time': { en: '2022 - 2025', pt: '2022 - 2025' },
    'timeline.3.title': {
      en: 'Data Analyst, Finance at ExxonMobil',
      pt: 'Analista de Dados em Finanças na ExxonMobil'
    },
    'timeline.3.b1': {
      en: 'Automated manual finance workflows with ETL pipelines, eliminating 150+ hours of work per month',
      pt: 'Automatizei fluxos manuais de finanças com pipelines ETL, eliminando mais de 150 horas de trabalho por mês'
    },
    'timeline.3.b2': {
      en: 'Developed a supervised learning model that automates payment allocation, saving 200+ hours of manual work per month',
      pt: 'Desenvolvi um modelo de aprendizado supervisionado que automatiza a alocação de pagamentos, economizando mais de 200 horas de trabalho manual por mês'
    },
    'timeline.3.b3': {
      en: 'Designed working-capital dashboards with new KPIs and forecasting for 1,100+ users across 7 teams, contributing to a $6M improvement',
      pt: 'Projetei dashboards de capital de giro com novos KPIs e previsões para mais de 1.100 usuários em 7 equipes, contribuindo para uma melhoria de US$ 6M'
    },
    'timeline.3.b4': {
      en: 'Delivered 100+ hours of Snowflake, Python, and Power BI training to global teams',
      pt: 'Ministrei mais de 100 horas de treinamento em Snowflake, Python e Power BI para equipes globais'
    },
    'timeline.4.time': { en: '2025 - present', pt: '2025 - presente' },
    'timeline.4.title': {
      en: "Master's in Statistics and Data Science",
      pt: 'Mestrado em Estatística e Ciência de Dados'
    },
    'timeline.4.body': {
      en: 'Federal University of Paraná. Focus on statistical modeling, machine learning evaluation, and practical data systems.',
      pt: 'Universidade Federal do Paraná. Foco em modelagem estatística, avaliação de machine learning e sistemas práticos de dados.'
    },
    'timeline.5.time': { en: '2017 - 2025', pt: '2017 - 2025' },
    'timeline.5.title': {
      en: "Bachelor's in Mechanical Engineering",
      pt: 'Bacharelado em Engenharia Mecânica'
    },
    'timeline.5.body': {
      en: 'Federal Technological University of Paraná. Engineering background with a strong quantitative and systems-thinking foundation.',
      pt: 'Universidade Tecnológica Federal do Paraná. Formação em engenharia com base quantitativa e visão sistêmica.'
    },

    'work.heading': { en: 'projects', pt: 'projetos' },
    'work.1.title': { en: 'Strongbox', pt: 'Strongbox' },
    'work.1.body': {
      en: 'An audit platform that checks SAP journal entries against accounting controls and proves the records it checked were never altered.',
      pt: 'Uma plataforma de auditoria que verifica lançamentos contábeis do SAP contra controles contábeis e comprova que os registros verificados nunca foram alterados.'
    },
    'work.2.title': { en: 'Brazil tax reform', pt: 'Reforma tributária brasileira' },
    'work.2.body': {
      en: 'A prototype that shows a CFO what Brazil\'s 2026–2033 tax reform will cost in cash, credits and prices, using the ledger data the company already has.',
      pt: 'Um protótipo que mostra ao CFO quanto a reforma tributária de 2026–2033 vai custar em caixa, créditos e preços, usando os dados contábeis que a empresa já tem.'
    },
    'work.more': { en: 'Read the case study →', pt: 'Ler o estudo de caso →' },

    'notes.heading': { en: 'what I work on', pt: 'no que eu trabalho' },
    'notes.1.title': { en: 'LLM applications', pt: 'Aplicações LLM' },
    'notes.1.body': {
      en: 'Designing and shipping full-stack agent systems with tool orchestration, retrieval-augmented generation, and streaming interfaces over WebSocket.',
      pt: 'Projetando e entregando sistemas de agentes full-stack com orquestração de ferramentas, geração aumentada por recuperação e interfaces com streaming via WebSocket.'
    },
    'notes.2.title': { en: 'Process intelligence', pt: 'Inteligência de processos' },
    'notes.2.body': {
      en: 'Building on Celonis to give operations teams real visibility into their processes: KPI design, object-centric modeling, and automated anomaly detection.',
      pt: 'Construindo sobre o Celonis para dar visibilidade real dos processos às equipes de operações: desenho de KPIs, modelagem object-centric e detecção automatizada de anomalias.'
    },
    'notes.3.title': { en: 'BI and dashboards', pt: 'BI e dashboards' },
    'notes.3.body': {
      en: 'Power BI solutions with clean Snowflake-backed models, forecasting, and adoption tracking so dashboards actually get used.',
      pt: 'Soluções Power BI com modelos limpos sobre Snowflake, previsão e rastreamento de adoção para que dashboards sejam realmente utilizados.'
    },
    'notes.4.title': { en: 'Machine learning', pt: 'Machine learning' },
    'notes.4.body': {
      en: 'Supervised models for classification and allocation problems in finance and supply chain, with proper validation and business-metric evaluation.',
      pt: 'Modelos supervisionados para problemas de classificação e alocação em finanças e supply chain, com validação adequada e avaliação por métricas de negócio.'
    },
    'notes.5.title': { en: 'Developer tooling', pt: 'Ferramentas de desenvolvedor' },
    'notes.5.body': {
      en: 'Building CLI and TUI tools for content migration, deployment, and automated backups across VPS infrastructure.',
      pt: 'Construindo ferramentas CLI e TUI para migração de conteúdo, deploy e backups automatizados em infraestrutura VPS.'
    },
    'notes.6.title': { en: 'Data engineering', pt: 'Engenharia de dados' },
    'notes.6.body': {
      en: 'ETL automation, warehouse modeling on Snowflake and Databricks, and pipeline reliability so data arrives on time.',
      pt: 'Automação de ETL, modelagem de warehouse no Snowflake e Databricks, e confiabilidade de pipeline para que os dados cheguem no prazo.'
    },

    'skills.heading': { en: 'tools', pt: 'ferramentas' },
    'skills.1.title': { en: 'Languages', pt: 'Linguagens' },
    'skills.1.body': { en: 'SQL, Python, TypeScript, Pandas, Scikit-learn, Zod', pt: 'SQL, Python, TypeScript, Pandas, Scikit-learn, Zod' },
    'skills.2.title': { en: 'Platforms', pt: 'Plataformas' },
    'skills.2.body': { en: 'Snowflake, Databricks, Celonis, Azure AI, Docker, Tailscale', pt: 'Snowflake, Databricks, Celonis, Azure AI, Docker, Tailscale' },
    'skills.3.title': { en: 'BI', pt: 'BI' },
    'skills.3.body': { en: 'Power BI, data modeling, KPI frameworks, forecasting', pt: 'Power BI, modelagem de dados, frameworks de KPIs, previsão' },
    'skills.4.title': { en: 'Methods', pt: 'Métodos' },
    'skills.4.body': { en: 'Process mining (OCPM), RAG, agent architectures, clustering, supervised models', pt: 'Process mining (OCPM), RAG, arquiteturas de agentes, clusterização, modelos supervisionados' },

    'contact.heading': { en: 'contact', pt: 'contato' },
    'contact.body': {
      en: 'I am available for freelance data, BI, and AI projects. The easiest way to reach me is email.',
      pt: 'Estou disponível para projetos freelance de dados, BI e IA. A forma mais fácil de falar comigo é por email.'
    },
    'footer.copy': { en: '© 2026 Gilmar Telles', pt: '© 2026 Gilmar Telles' }
  };
  // Pages with their own copy (project articles) define window.GT_I18N before loading this file.
  Object.assign(translations, window.GT_I18N || {});

  function getStoredLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (translations[key] && translations[key][lang]) {
        el.alt = translations[key][lang];
      }
    });

    document.querySelectorAll('.lang-link').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });

    document.body.classList.remove('i18n-loading');
  }

  setLang(getStoredLang());

  document.querySelectorAll('.lang-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang-btn'));
    });
  });
})();