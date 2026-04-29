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
      en: 'I build data and AI systems that turn messy operations into clear decisions — from LLM-powered assistants to working-capital dashboards.',
      pt: 'Construo sistemas de dados e IA que transformam operações complexas em decisões claras — de assistentes com LLM a dashboards de capital de giro.'
    },

    'timeline.heading': { en: 'timeline', pt: 'linha do tempo' },
    'timeline.1.time': { en: '2025 -', pt: '2025 -' },
    'timeline.1.title': {
      en: 'Senior Data Scientist & Product Owner at ExxonMobil',
      pt: 'Cientista de Dados Sênior & Product Owner na ExxonMobil'
    },
    'timeline.1.body': {
      en: 'Lead data products across supply chain, finance, and process intelligence. Designed and shipped a full-stack LLM assistant (ProcessOwl) with 16 agent tools for Celonis, built OCR and forecasting pipelines, and delivered BI dashboards used by 1,100+ people. Also built internal developer tooling: a Python TUI for Celonis content migration and automated cross-VPS backup infrastructure.',
      pt: 'Liderei produtos de dados em supply chain, finanças e inteligência de processos. Projetei e lancei um assistente LLM full-stack (ProcessOwl) com 16 ferramentas de agente para Celonis, construí pipelines de OCR e previsão, e entreguei dashboards de BI usados por mais de 1.100 pessoas. Também construí ferramentas internas: uma TUI em Python para migração de conteúdo Celonis e infraestrutura automatizada de backup entre VPSs.'
    },
    'timeline.2.time': { en: '2022 - 2025', pt: '2022 - 2025' },
    'timeline.2.title': {
      en: 'Data Analyst, Finance at ExxonMobil',
      pt: 'Analista de Dados em Finanças na ExxonMobil'
    },
    'timeline.2.body': {
      en: 'Automated ETL workflows and trained global teams on Snowflake, Python, and Power BI. Developed a supervised learning model for payment allocation that saved 200+ hours per month, and built working-capital dashboards that contributed to a $6M improvement.',
      pt: 'Automatizei fluxos ETL e treinei equipes globais em Snowflake, Python e Power BI. Desenvolvi um modelo supervisionado para alocação de pagamentos que economizou mais de 200 horas por mês, e construí dashboards de capital de giro que contribuíram para uma melhoria de US$ 6M.'
    },
    'timeline.3.time': { en: '2025 -', pt: '2025 -' },
    'timeline.3.title': {
      en: "Master's in Statistics and Data Science",
      pt: 'Mestrado em Estatística e Ciência de Dados'
    },
    'timeline.3.body': {
      en: 'Federal University of Parana. Focus on statistical modeling, machine learning evaluation, and practical data systems.',
      pt: 'Universidade Federal do Paraná. Foco em modelagem estatística, avaliação de machine learning e sistemas práticos de dados.'
    },
    'timeline.4.time': { en: '2021 - 2025', pt: '2021 - 2025' },
    'timeline.4.title': {
      en: "Bachelor's in Mechanical Engineering",
      pt: 'Bacharelado em Engenharia Mecânica'
    },
    'timeline.4.body': {
      en: 'Federal Technological University of Parana. Engineering background with a strong quantitative and systems-thinking foundation.',
      pt: 'Universidade Tecnológica Federal do Paraná. Formação em engenharia com base quantitativa e visão sistêmica.'
    },

    'work.heading': { en: 'selected work', pt: 'trabalhos selecionados' },
    'work.1.title': { en: 'ProcessOwl AI Expert', pt: 'ProcessOwl AI Expert' },
    'work.1.meta': { en: 'TypeScript · React · Fastify · Anthropic SDK · WebSocket', pt: 'TypeScript · React · Fastify · Anthropic SDK · WebSocket' },
    'work.1.body': {
      en: 'Full-stack LLM assistant for process intelligence. 16 agent tools, streaming chat, knowledge graph, and a SPED/Brazilian-tax domain module. Deployed on self-hosted Docker infrastructure.',
      pt: 'Assistente LLM full-stack para inteligência de processos. 16 ferramentas de agente, chat com streaming, knowledge graph e módulo de SPED/tributos brasileiros. Implantado em infraestrutura Docker própria.'
    },
    'work.2.title': { en: 'Celonis AI Assistant', pt: 'Assistente de IA no Celonis' },
    'work.2.meta': { en: 'generative AI · NLP · Celonis', pt: 'IA generativa · NLP · Celonis' },
    'work.2.body': {
      en: 'An assistant that helps around 150 users interpret process data faster, reducing average time to generate insights by 20%.',
      pt: 'Assistente que ajuda cerca de 150 usuários a interpretar dados de processo mais rapidamente, reduzindo o tempo médio para gerar insights em 20%.'
    },
    'work.3.title': { en: 'OCR Document Pipeline', pt: 'Pipeline OCR de Documentos' },
    'work.3.meta': { en: 'OCR · Azure AI · Flask · Python', pt: 'OCR · Azure AI · Flask · Python' },
    'work.3.body': {
      en: 'Transformed unstructured PDF workflows into structured spreadsheets, saving about 250 hours per month across four teams.',
      pt: 'Transformei fluxos com PDFs não estruturados em planilhas estruturadas, economizando cerca de 250 horas por mês em quatro equipes.'
    },
    'work.4.title': { en: 'Working Capital Dashboards', pt: 'Dashboards de Capital de Giro' },
    'work.4.meta': { en: 'Power BI · Snowflake · forecasting', pt: 'Power BI · Snowflake · previsão' },
    'work.4.body': {
      en: 'Dashboards used by 1,100+ users across seven teams. New KPIs and forecasting contributed to a $6M working capital improvement.',
      pt: 'Dashboards usados por mais de 1.100 usuários em sete equipes. Novos KPIs e previsões contribuíram para uma melhoria de US$ 6M em capital de giro.'
    },
    'work.5.title': { en: 'Payment Allocation Model', pt: 'Modelo de Alocação de Pagamentos' },
    'work.5.meta': { en: 'machine learning · supervised learning · finance', pt: 'machine learning · aprendizado supervisionado · finanças' },
    'work.5.body': {
      en: 'Supervised learning model that reduced manual effort by 200+ hours per month and improved financial operation accuracy.',
      pt: 'Modelo supervisionado que reduziu esforço manual em mais de 200 horas por mês e melhorou a precisão da operação financeira.'
    },
    'work.6.title': { en: 'Celonis Migrator', pt: 'Celonis Migrator' },
    'work.6.meta': { en: 'Python · Textual · pycelonis', pt: 'Python · Textual · pycelonis' },
    'work.6.body': {
      en: 'Interactive TUI for migrating Celonis content (data pools, analyses, workflows, packages) between environments. Built for multi-team deployment workflows.',
      pt: 'TUI interativa para migrar conteúdo Celonis (data pools, análises, workflows, pacotes) entre ambientes. Construída para fluxos de deploy multi-equipe.'
    },
    'work.7.title': { en: 'Dengue Geospatial Analysis', pt: 'Análise Espacial da Dengue' },
    'work.7.meta': { en: 'Python · geopandas · folium · public data', pt: 'Python · geopandas · folium · dados públicos' },
    'work.7.body': {
      en: 'Mapped dengue fever cases by neighborhood using public health data and IBGE overlays. Open-source, built to make epidemiological data accessible.',
      pt: 'Mapeamento de casos de dengue por bairro usando dados de saúde pública e overlays IBGE. Código aberto, construído para tornar dados epidemiológicos acessíveis.'
    },

    'notes.heading': { en: 'what I work on', pt: 'no que eu trabalho' },
    'notes.1': { en: 'LLM-powered applications: agents, tool use, RAG, knowledge graphs, streaming UIs.', pt: 'Aplicações com LLM: agentes, uso de ferramentas, RAG, knowledge graphs, UIs com streaming.' },
    'notes.2': { en: 'Data consulting: turning raw operational data into executive-ready decisions.', pt: 'Consultoria de dados: transformar dados operacionais brutos em decisões prontas para liderança.' },
    'notes.3': { en: 'Dashboards and BI: Power BI, KPI design, automated reporting, and adoption-focused analytics.', pt: 'Dashboards e BI: Power BI, desenho de KPIs, relatórios automatizados e analytics com foco em adoção.' },
    'notes.4': { en: 'ML and AI solutions: practical models, evaluation, workflow automation.', pt: 'Soluções de ML e IA: modelos práticos, avaliação, automação de workflows.' },
    'notes.5': { en: 'Developer tooling: internal CLI/TUI tools, migration pipelines, deployment infrastructure.', pt: 'Ferramentas de desenvolvedor: CLI/TUI internas, pipelines de migração, infraestrutura de deploy.' },
    'notes.6': { en: 'Data engineering: reliable pipelines, clean warehouse models, Snowflake, Databricks.', pt: 'Engenharia de dados: pipelines confiáveis, modelos limpos de warehouse, Snowflake, Databricks.' },

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

    document.querySelectorAll('.lang-link').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });

    document.title = lang === 'pt' ? 'Gilmar Telles' : 'Gilmar Telles';
    document.body.classList.remove('i18n-loading');
  }

  setLang(getStoredLang());

  document.querySelectorAll('.lang-link').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang-btn'));
    });
  });
})();