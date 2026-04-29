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
      en: 'I build data and AI systems that turn messy operations into clear decisions, from LLM-powered assistants to working-capital dashboards.',
      pt: 'Construo sistemas de dados e IA que transformam operações complexas em decisões claras, de assistentes com LLM a dashboards de capital de giro.'
    },

    'timeline.heading': { en: 'timeline', pt: 'linha do tempo' },
    'timeline.1.time': { en: '2025 -', pt: '2025 -' },
    'timeline.1.title': {
      en: 'Freelance Data Scientist & Data Engineer',
      pt: 'Cientista de Dados & Engenheiro de Dados Freelance'
    },
    'timeline.1.body': {
      en: 'Building data products for a consulting company: full-stack LLM assistants with agent tools and knowledge graphs for process intelligence, OCR and forecasting pipelines, and BI dashboards used by 1,100+ people. Also built developer tooling including a Python TUI for content migration and automated backup infrastructure.',
      pt: 'Construindo produtos de dados para uma consultoria: assistentes LLM full-stack com ferramentas de agente e knowledge graphs para inteligência de processos, pipelines de OCR e previsão, e dashboards de BI usados por mais de 1.100 pessoas. Também construí ferramentas de desenvolvedor incluindo uma TUI em Python para migração de conteúdo e infraestrutura automatizada de backup.'
    },
    'timeline.2.time': { en: '2022 - 2025', pt: '2022 - 2025' },
    'timeline.2.title': {
      en: 'Senior Data Analyst at ExxonMobil',
      pt: 'Analista de Dados Sênior na ExxonMobil'
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
      en: 'Federal University of Paraná. Focus on statistical modeling, machine learning evaluation, and practical data systems.',
      pt: 'Universidade Federal do Paraná. Foco em modelagem estatística, avaliação de machine learning e sistemas práticos de dados.'
    },
    'timeline.4.time': { en: '2021 - 2025', pt: '2021 - 2025' },
    'timeline.4.title': {
      en: "Bachelor's in Mechanical Engineering",
      pt: 'Bacharelado em Engenharia Mecânica'
    },
    'timeline.4.body': {
      en: 'Federal Technological University of Paraná. Engineering background with a strong quantitative and systems-thinking foundation.',
      pt: 'Universidade Tecnológica Federal do Paraná. Formação em engenharia com base quantitativa e visão sistêmica.'
    },

    'work.heading': { en: 'projects', pt: 'projetos' },
    'work.1.title': { en: 'LLM Assistant for Process Intelligence', pt: 'Assistente LLM para Inteligência de Processos' },
    'work.1.meta': { en: 'TypeScript · React · Fastify · Anthropic SDK · WebSocket', pt: 'TypeScript · React · Fastify · Anthropic SDK · WebSocket' },
    'work.1.body': {
      en: 'Full-stack conversational assistant with 16 agent tools, streaming responses, a knowledge graph, and a Brazilian tax compliance module. Deployed on Docker for a consulting company.',
      pt: 'Assistente conversacional full-stack com 16 ferramentas de agente, respostas com streaming, knowledge graph e módulo de conformidade tributária brasileira. Implantado em Docker para uma consultoria.'
    },
    'work.2.title': { en: 'Celonis AI Assistant', pt: 'Assistente de IA no Celonis' },
    'work.2.meta': { en: 'generative AI · NLP · Celonis', pt: 'IA generativa · NLP · Celonis' },
    'work.2.body': {
      en: 'Helps around 150 users interpret process data faster, reducing average time to generate insights by 20%.',
      pt: 'Ajudou cerca de 150 usuários a interpretar dados de processo mais rapidamente, reduzindo o tempo médio para gerar insights em 20%.'
    },
    'work.3.title': { en: 'OCR Document Pipeline', pt: 'Pipeline OCR de Documentos' },
    'work.3.meta': { en: 'OCR · Azure AI · Flask · Python', pt: 'OCR · Azure AI · Flask · Python' },
    'work.3.body': {
      en: 'Transformed unstructured PDF workflows into structured spreadsheets, saving about 250 hours per month across four teams.',
      pt: 'Transformou fluxos com PDFs não estruturados em planilhas estruturadas, economizando cerca de 250 horas por mês em quatro equipes.'
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
      en: 'Interactive terminal tool for migrating Celonis content (data pools, analyses, workflows, packages) between environments. Built for multi-team deployment workflows.',
      pt: 'Ferramenta de terminal interativa para migrar conteúdo Celonis (data pools, análises, workflows, pacotes) entre ambientes. Construída para fluxos de deploy multi-equipe.'
    },

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