/**
 * Language Toggle
 * Handles EN/PT-BR switching with localStorage persistence.
 * Uses data-i18n attributes for text content swapping.
 */

(function () {
  const STORAGE_KEY = 'gt-lang';

  const translations = {
    // Skip link
    'skip': { en: 'Skip to content', pt: 'Pular para o conteúdo' },

    // Nav
    'nav.about': { en: 'About', pt: 'Sobre' },
    'nav.services': { en: 'Services', pt: 'Serviços' },
    'nav.skills': { en: 'Skills', pt: 'Habilidades' },
    'nav.experience': { en: 'Experience', pt: 'Experiência' },
    'nav.contact': { en: 'Contact', pt: 'Contato' },
    'nav.email': { en: 'Email me', pt: 'Envie um email' },

    // Hero
    'hero.title': { en: 'Senior Data Scientist & Freelancer', pt: 'Cientista de Dados Sênior & Freelancer' },
    'hero.tagline': {
      en: '5+ years leading data analysis, dashboard development, ML, and generative AI. Expert in SQL, Snowflake, Power BI, and data modeling.',
      pt: 'Mais de 5 anos liderando análise de dados, desenvolvimento de dashboards, ML e IA generativa. Especialista em SQL, Snowflake, Power BI e modelagem de dados.'
    },
    'hero.location': { en: 'Curitiba, PR, Brazil', pt: 'Curitiba, PR, Brasil' },
    'hero.cta': { en: 'Email me', pt: 'Envie um email' },

    // About
    'about.heading': { en: 'About', pt: 'Sobre' },
    'about.p1': {
      en: "I'm a Senior Data Scientist at ExxonMobil and freelance consultant helping businesses unlock value from their data. From building ML models that save millions to creating dashboards used by 1,100+ people, I bring technical depth and business impact together.",
      pt: 'Sou Cientista de Dados Sênior na ExxonMobil e consultor freelance ajudando empresas a extrair valor de seus dados. Desde a construção de modelos de ML que economizam milhões até a criação de dashboards usados por mais de 1.100 pessoas, uno profundidade técnica e impacto nos negócios.'
    },
    'about.available': { en: 'Available for freelance projects', pt: 'Disponível para projetos freelance' },

    // Services
    'services.heading': { en: 'Services', pt: 'Serviços' },
    'services.1.title': { en: 'Data Consulting', pt: 'Consultoria de Dados' },
    'services.1.desc': {
      en: 'Transform raw data into strategic decisions. End-to-end analysis from data pipelines to executive insights.',
      pt: 'Transforme dados brutos em decisões estratégicas. Análise de ponta a ponta, de pipelines de dados até insights executivos.'
    },
    'services.2.title': { en: 'Dashboards & BI', pt: 'Dashboards & BI' },
    'services.2.desc': {
      en: 'Interactive dashboards that teams actually use. Power BI, automated reporting, and KPI frameworks.',
      pt: 'Dashboards interativos que as equipes realmente usam. Power BI, relatórios automatizados e frameworks de KPIs.'
    },
    'services.3.title': { en: 'ML & AI Solutions', pt: ' Soluções de ML & IA' },
    'services.3.desc': {
      en: 'Production-ready machine learning models. From churn prediction to generative AI chatbots.',
      pt: 'Modelos de machine learning prontos para produção. De previsão de churn a chatbots com IA generativa.'
    },
    'services.4.title': { en: 'Data Engineering', pt: 'Engenharia de Dados' },
    'services.4.desc': {
      en: 'Reliable pipelines, clean data, optimized warehouses. Snowflake, ETL automation, data modeling.',
      pt: 'Pipelines confiáveis, dados limpos, warehouses otimizados. Snowflake, automação de ETL, modelagem de dados.'
    },

    // Skills
    'skills.heading': { en: 'Skills', pt: 'Habilidades' },
    'skills.1.title': { en: 'Tools & Languages', pt: 'Ferramentas & Linguagens' },
    'skills.1.desc': { en: 'SQL, Python (Pandas, Scikit-learn, PySpark), Snowflake, Databricks', pt: 'SQL, Python (Pandas, Scikit-learn, PySpark), Snowflake, Databricks' },
    'skills.2.title': { en: 'BI & Visualization', pt: 'BI & Visualização' },
    'skills.2.desc': { en: 'Power BI, dashboard creation and optimization', pt: 'Power BI, criação e otimização de dashboards' },
    'skills.3.title': { en: 'Modeling & Statistics', pt: 'Modelagem & Estatística' },
    'skills.3.desc': { en: 'Clustering, probability distribution, forecasting, supervised models', pt: 'Clusterização, distribuição de probabilidade, previsão, modelos supervisionados' },
    'skills.4.title': { en: 'Data Architecture', pt: 'Arquitetura de Dados' },
    'skills.4.desc': { en: 'ETL pipelines, data modeling, performance optimization', pt: 'Pipelines ETL, modelagem de dados, otimização de performance' },

    // Projects
    'projects.heading': { en: 'Projects', pt: 'Projetos' },
    'projects.1.title': { en: 'Celonis AI Chatbot', pt: 'Chatbot IA no Celonis' },
    'projects.1.tags': { en: 'Generative AI · NLP · Celonis', pt: 'IA Generativa · NLP · Celonis' },
    'projects.1.desc': {
      en: 'Created generative AI chatbot in Celonis to automate data interpretation for ~150 users, reducing average time to generate insights by 20%.',
      pt: 'Criei chatbot de IA generativa no Celonis para automatizar interpretação de dados para ~150 usuários, reduzindo o tempo médio para gerar insights em 20%.'
    },
    'projects.2.title': { en: 'OCR Document Pipeline', pt: 'Pipeline OCR de Documentos' },
    'projects.2.tags': { en: 'OCR · Azure AI · Flask · Python', pt: 'OCR · Azure AI · Flask · Python' },
    'projects.2.desc': {
      en: 'Built OCR pipeline with Flask and Azure AI Document Intelligence to transform unstructured PDFs into structured spreadsheets, saving 250 hours/month across 4 teams.',
      pt: 'Construí pipeline OCR com Flask e Azure AI Document Intelligence para transformar PDFs não estruturados em planilhas estruturadas, economizando 250 horas/mês em 4 equipes.'
    },
    'projects.3.title': { en: 'Payment Allocation Model', pt: 'Modelo de Alocação de Pagamentos' },
    'projects.3.tags': { en: 'Machine Learning · Supervised Learning', pt: 'Machine Learning · Aprendizado Supervisionado' },
    'projects.3.desc': {
      en: 'Developed supervised learning model for payment allocation, reducing manual effort by 200+ hours/month and improving financial operation accuracy.',
      pt: 'Desenvolvi modelo de aprendizado supervisionado para alocação de pagamentos, reduzindo esforço manual em mais de 200 horas/mês e melhorando a precisão operacional financeira.'
    },
    'projects.4.title': { en: 'Working Capital Dashboards', pt: 'Dashboards de Capital de Giro' },
    'projects.4.tags': { en: 'Power BI · Snowflake · Forecasting', pt: 'Power BI · Snowflake · Previsão' },
    'projects.4.desc': {
      en: 'Developed dashboards used by 1,100+ users across 7 teams; new KPIs and result forecasting contributed to $6M improvement in working capital.',
      pt: 'Desenvolvi dashboards usados por mais de 1.100 usuários em 7 equipes; novos KPIs e previsão de resultados contribuíram para melhoria de US$ 6M no capital de giro.'
    },

    // Experience
    'experience.heading': { en: 'Experience', pt: 'Experiência' },
    'experience.tab.work': { en: 'Experience', pt: 'Experiência' },
    'experience.tab.edu': { en: 'Education', pt: 'Educação' },

    'experience.1.title': { en: 'Senior Data Scientist & Product Owner', pt: 'Cientista de Dados Sênior & Product Owner' },
    'experience.1.company': { en: 'ExxonMobil | Aug 2025 – Present', pt: 'ExxonMobil | Ago 2025 – Presente' },
    'experience.1.1': {
      en: 'Developed dashboards used by 1,100+ users across 7 teams; new KPIs and result forecasting contributed to $6M improvement in working capital.',
      pt: 'Desenvolvi dashboards usados por mais de 1.100 usuários em 7 equipes; novos KPIs e previsão de resultados contribuíram para melhoria de US$ 6M no capital de giro.'
    },
    'experience.1.2': {
      en: 'Created generative AI chatbot in Celonis to automate data interpretation for ~150 users, reducing average time to generate insights by 20%.',
      pt: 'Criei chatbot de IA generativa no Celonis para automatizar interpretação de dados para ~150 usuários, reduzindo o tempo médio para gerar insights em 20%.'
    },
    'experience.1.3': {
      en: 'Built OCR pipeline with Flask and Azure AI Document Intelligence to transform unstructured PDFs into structured spreadsheets, saving 250 hours/month across 4 teams.',
      pt: 'Construí pipeline OCR com Flask e Azure AI Document Intelligence para transformar PDFs não estruturados em planilhas estruturadas, economizando 250 horas/mês em 4 equipes.'
    },
    'experience.1.4': {
      en: 'Mentored junior analysts and led Power BI, SQL, and Snowflake training for internal communities.',
      pt: 'Mentorei analistas júnior e liderei treinamentos de Power BI, SQL e Snowflake para comunidades internas.'
    },
    'experience.1.5': {
      en: 'Led a global team of 11 as Product Owner, driving process and system improvements across Supply Chain and Customer Service for over 1,000 employees worldwide.',
      pt: 'Liderei uma equipe global de 11 pessoas como Product Owner, impulsionando melhorias de processos e sistemas em Supply Chain e Serviço ao Cliente para mais de 1.000 funcionários mundialmente.'
    },

    'experience.2.title': { en: 'Data Analyst — Finance', pt: 'Analista de Dados — Finanças' },
    'experience.2.company': { en: 'ExxonMobil | Aug 2022 – Jul 2025', pt: 'ExxonMobil | Ago 2022 – Jul 2025' },
    'experience.2.1': {
      en: 'Automated workflows via ETL processes, eliminating 150+ hours/month of manual work and increasing data reliability.',
      pt: 'Automatizei fluxos de trabalho via processos ETL, eliminando mais de 150 horas/mês de trabalho manual e aumentando a confiabilidade dos dados.'
    },
    'experience.2.2': {
      en: 'Developed supervised learning model for payment allocation, reducing manual effort by 200+ hours/month and improving financial operation accuracy.',
      pt: 'Desenvolvi modelo de aprendizado supervisionado para alocação de pagamentos, reduzindo esforço manual em mais de 200 horas/mês e melhorando a precisão operacional financeira.'
    },
    'experience.2.3': {
      en: 'Delivered 100+ hours of Snowflake, Python, and Power BI trainings for global teams.',
      pt: 'Entreguei mais de 100 horas de treinamentos de Snowflake, Python e Power BI para equipes globais.'
    },

    'experience.3.title': { en: 'Financial Data Intern', pt: 'Estagiário em Dados Financeiros' },
    'experience.3.company': { en: 'ExxonMobil | Jan 2022 – Jul 2022', pt: 'ExxonMobil | Jan 2022 – Jul 2022' },
    'experience.3.1': {
      en: 'Developed a dashboard to monitor time registration inconsistencies, enabling 8 analysts to resolve errors faster and saving 40 hours/month.',
      pt: 'Desenvolvi um dashboard para monitorar inconsistências de registro de ponto, permitindo que 8 analistas resolvessem erros mais rapidamente, economizando 40 horas/mês.'
    },

    // Education
    'education.1.degree': { en: "Master's in Statistics and Data Science", pt: 'Mestrado em Estatística e Ciência de Dados' },
    'education.1.school': { en: 'Federal University of Paraná | Sep 2025 – Present', pt: 'Universidade Federal do Paraná | Set 2025 – Presente' },
    'education.2.degree': { en: "Bachelor's in Mechanical Engineering", pt: 'Bacharelado em Engenharia Mecânica' },
    'education.2.school': { en: 'Technological Federal University of Paraná | Feb 2025', pt: 'Universidade Tecnológica Federal do Paraná | Fev 2025' },

    // Contact
    'contact.heading': { en: 'Contact', pt: 'Contato' },
    'contact.subtitle': { en: "Interested in working together? Let's talk.", pt: 'Interessado em trabalhar juntos? Vamos conversar.' },
    'contact.cta': { en: 'Send me an email', pt: 'Envie um email' },

    // Footer
    'footer.copy': { en: '© 2026 Gilmar Telles', pt: '© 2026 Gilmar Telles' }
  };

  function getStoredLang() {
    return localStorage.getItem(STORAGE_KEY) || 'en';
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang]) {
        el.textContent = translations[key][lang];
      }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang-btn') === lang);
    });

    // Update page title
    document.title = lang === 'pt'
      ? 'Gilmar Telles | Cientista de Dados Sênior'
      : 'Gilmar Telles | Senior Data Scientist';

    // Reveal body after translations are applied
    document.body.classList.remove('i18n-loading');
  }

  // Set initial language
  setLang(getStoredLang());

  // Language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang-btn'));
    });
  });
})();