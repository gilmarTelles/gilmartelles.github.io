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
      en: 'I like to build practical data and AI systems that turn messy operations into clear decisions.',
      pt: 'Gosto de construir sistemas práticos de dados e IA que transformam operações complexas em decisões claras.'
    },

    'timeline.heading': { en: 'timeline', pt: 'linha do tempo' },
    'timeline.1.time': { en: '2025 -', pt: '2025 -' },
    'timeline.1.title': {
      en: 'Senior Data Scientist & Product Owner at ExxonMobil',
      pt: 'Cientista de Dados Sênior & Product Owner na ExxonMobil'
    },
    'timeline.1.body': {
      en: 'Building data products across supply chain, customer service, finance, process intelligence, and generative AI. Recent work includes Celonis AI assistants, OCR automation, and forecasting dashboards used by 1,100+ people.',
      pt: 'Construindo produtos de dados em supply chain, serviço ao cliente, finanças, inteligência de processos e IA generativa. Trabalhos recentes incluem assistentes de IA no Celonis, automação com OCR e dashboards de previsão usados por mais de 1.100 pessoas.'
    },
    'timeline.2.time': { en: '2022 - 2025', pt: '2022 - 2025' },
    'timeline.2.title': {
      en: 'Data Analyst, Finance at ExxonMobil',
      pt: 'Analista de Dados em Finanças na ExxonMobil'
    },
    'timeline.2.body': {
      en: 'Automated ETL workflows, trained global teams on Snowflake, Python, and Power BI, and developed supervised learning models for payment allocation and financial operations.',
      pt: 'Automatizei fluxos ETL, treinei equipes globais em Snowflake, Python e Power BI, e desenvolvi modelos supervisionados para alocação de pagamentos e operações financeiras.'
    },
    'timeline.3.time': { en: '2025 -', pt: '2025 -' },
    'timeline.3.title': {
      en: "Master's in Statistics and Data Science",
      pt: 'Mestrado em Estatística e Ciência de Dados'
    },
    'timeline.3.body': {
      en: 'Federal University of Paraná. Current academic focus: statistics, modeling, machine learning, and the practical evaluation of data systems.',
      pt: 'Universidade Federal do Paraná. Foco acadêmico atual: estatística, modelagem, machine learning e avaliação prática de sistemas de dados.'
    },
    'timeline.4.time': { en: '2025', pt: '2025' },
    'timeline.4.title': {
      en: "Bachelor's in Mechanical Engineering",
      pt: 'Bacharelado em Engenharia Mecânica'
    },
    'timeline.4.body': {
      en: 'Technological Federal University of Paraná. Engineering background with a strong quantitative and systems-thinking foundation.',
      pt: 'Universidade Tecnológica Federal do Paraná. Formação em engenharia com base quantitativa e visão sistêmica.'
    },

    'work.heading': { en: 'selected work', pt: 'trabalhos selecionados' },
    'work.1.title': { en: 'Celonis AI chatbot', pt: 'Chatbot de IA no Celonis' },
    'work.1.meta': { en: 'generative AI · NLP · Celonis', pt: 'IA generativa · NLP · Celonis' },
    'work.1.body': {
      en: 'Created an assistant that helps around 150 users interpret process data faster, reducing average time to generate insights by 20%.',
      pt: 'Criei um assistente que ajuda cerca de 150 usuários a interpretar dados de processo mais rapidamente, reduzindo o tempo médio para gerar insights em 20%.'
    },
    'work.2.title': { en: 'OCR document pipeline', pt: 'Pipeline OCR de documentos' },
    'work.2.meta': { en: 'OCR · Azure AI · Flask · Python', pt: 'OCR · Azure AI · Flask · Python' },
    'work.2.body': {
      en: 'Transformed unstructured PDF workflows into structured spreadsheets, saving about 250 hours per month across four teams.',
      pt: 'Transformei fluxos com PDFs não estruturados em planilhas estruturadas, economizando cerca de 250 horas por mês em quatro equipes.'
    },
    'work.3.title': { en: 'Payment allocation model', pt: 'Modelo de alocação de pagamentos' },
    'work.3.meta': { en: 'machine learning · supervised learning', pt: 'machine learning · aprendizado supervisionado' },
    'work.3.body': {
      en: 'Developed a supervised learning model that reduced manual effort by 200+ hours per month and improved financial operation accuracy.',
      pt: 'Desenvolvi um modelo supervisionado que reduziu esforço manual em mais de 200 horas por mês e melhorou a precisão da operação financeira.'
    },
    'work.4.title': { en: 'Working capital dashboards', pt: 'Dashboards de capital de giro' },
    'work.4.meta': { en: 'Power BI · Snowflake · forecasting', pt: 'Power BI · Snowflake · previsão' },
    'work.4.body': {
      en: 'Built dashboards used by 1,100+ users across seven teams; new KPIs and forecasting contributed to a $6M working capital improvement.',
      pt: 'Construí dashboards usados por mais de 1.100 usuários em sete equipes; novos KPIs e previsões contribuíram para uma melhoria de US$ 6M em capital de giro.'
    },

    'notes.heading': { en: 'what I work on', pt: 'no que eu trabalho' },
    'notes.1': { en: 'Data consulting: turning raw operational data into executive-ready decisions.', pt: 'Consultoria de dados: transformar dados operacionais brutos em decisões prontas para liderança.' },
    'notes.2': { en: 'Dashboards and BI: Power BI, KPI design, automated reporting, and adoption-focused analytics.', pt: 'Dashboards e BI: Power BI, desenho de KPIs, relatórios automatizados e analytics com foco em adoção.' },
    'notes.3': { en: 'ML and AI solutions: practical models, generative AI assistants, evaluation, and workflow automation.', pt: 'Soluções de ML e IA: modelos práticos, assistentes de IA generativa, avaliação e automação de workflows.' },
    'notes.4': { en: 'Data engineering: reliable pipelines, clean warehouse models, Snowflake, Databricks, and performance optimization.', pt: 'Engenharia de dados: pipelines confiáveis, modelos limpos de warehouse, Snowflake, Databricks e otimização de performance.' },

    'skills.heading': { en: 'tools', pt: 'ferramentas' },
    'skills.1.title': { en: 'Languages', pt: 'Linguagens' },
    'skills.1.body': { en: 'SQL, Python, Pandas, Scikit-learn, PySpark', pt: 'SQL, Python, Pandas, Scikit-learn, PySpark' },
    'skills.2.title': { en: 'Platforms', pt: 'Plataformas' },
    'skills.2.body': { en: 'Snowflake, Databricks, Celonis, Azure AI', pt: 'Snowflake, Databricks, Celonis, Azure AI' },
    'skills.3.title': { en: 'BI', pt: 'BI' },
    'skills.3.body': { en: 'Power BI, data modeling, KPI frameworks, forecasting', pt: 'Power BI, modelagem de dados, frameworks de KPIs, previsão' },
    'skills.4.title': { en: 'Methods', pt: 'Métodos' },
    'skills.4.body': { en: 'Clustering, probability distributions, supervised models, process mining', pt: 'Clusterização, distribuições de probabilidade, modelos supervisionados, process mining' },

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
