export const experienceItems = [
    {
        start: "ACTUAL",
        end: "",
        role: "Desarrollador Fullstack Junior",
        company: "Freelance",
        description: [
            "Diseño de productos web: Estructura, interfaz y decisiones visuales guiadas por el objetivo del producto, priorizando claridad y facilidad de uso.",
            "Desarrollo Frontend: Interfaces responsive, accesibles y mantenibles con React, TypeScript y Tailwind, construidas para producción.",
            "Desarrollo Backend: APIs REST con FastAPI, modelado y gestión de bases de datos (PostgreSQL, Supabase, MongoDB) y autenticación de usuarios.",
            "Entrega y lanzamiento: Preparación técnica, despliegue (Vercel, Render/Railway) y acompañamiento hasta que el producto esté en producción.",
            "Análisis de datos: Limpieza, procesamiento y automatización de datos (Python, ETL), con dashboards e informes que apoyan la toma de decisiones.",
            "Integraciones con IA: Agentes y asistentes basados en RAG (ChromaDB, Qdrant, LlamaIndex, LLMs), conectados a tus herramientas de trabajo."
        ],
    },
    {
        start: "Mar 2026",
        end: "Sep 2026",
        role: "Analista de Datos",
        company: "Open English (Prácticas)",
        description: [
            "Desarrollé un agente de IA basado en arquitectura RAG (LlamaIndex, ChromaDB/Qdrant, Groq LLM) para la capacitación y el onboarding de nuevos integrantes del equipo, con backend en FastAPI e integración a Slack para consultas directas desde el canal de trabajo.",
            "Diseñé y mantuve pipelines ETL en Python que extraen datos desde FTP, APIs y Google Sheets, los transforman y consolidan de forma automática, eliminando la carga manual de datos.",
            "Construí dashboards dinámicos en Looker Studio para visualizar KPIs y métricas operativas, incluyendo analítica de campañas y embudos de marketing, para apoyar la toma de decisiones.",
            "Implementé web scraping con Playwright para automatizar la extracción de información de distintas fuentes web y alimentar los procesos de análisis y reporteria.",
            "Analicé datos de campañas de WhatsApp (tendencias en la tasa de fallos y en el volumen de leads) con Python (pandas, pandas, numpy), Excel y Google Sheets.",
        ],
    },
    {
        start: "Oct 2025",
        end: "Dic 2025",
        role: "Formulador de Proyectos y Analista de Datos",
        company: "Proyecto EXPERTA (Unión Temporal Fessanjose y Triángulo)",
        description: [
            "Automaticé flujos de trabajo con Python, reduciendo tareas manuales repetitivas.",
            "Limpié y depuré las bases de datos de caracterización mediante procesos ETL, eliminando duplicados y registros fallidos para dejar solo candidatos válidos para el análisis y el seguimiento.",
            "Diseñé dashboards en Power BI y, junto con el equipo, presenté los resultados para evaluar el comportamiento de las campañas y ajustar decisiones.",
            "Realicé gestión de investigación para la planeación y ejecución del proyecto, e implementé el monitoreo de indicadores y estrategias de mitigación.",
            "Analicé los datos en Python, Excel y Google Sheets para identificar avances, brechas y necesidades de la población atendida.",
        ],
    },
    {
        start: "Mar 2025",
        end: "Sep 2025",
        role: "Formulador de Proyectos",
        company: "Promise Gestión y Soluciones S.A.S",
        description: [
            "Ingresé y gestioné datos en sistemas como BIZAGI y SUIFP SGR.",
            "Contribuí en la elaboración de la estructura y componentes de los proyectos: objetivos, actividades, presupuesto, cronograma y recursos necesarios.",
            "Parametricé y estructuré proyectos de inversión pública en MGA-Web alineados con la Metodología General Ajustada del DNP.",
            "Formulé, estructuré y di seguimiento a proyectos de inversión con diversas fuentes de financiamiento.",
        ],
    },
];

export const timelineItems: { label: string; from: [number, number]; to?: [number, number] }[] = [
    { label: "Fullstack Jr · Freelance", from: [2024, 10] },
    { label: "Analista de Datos · Open English", from: [2026, 3], to: [2026, 8] },
    { label: "Analista de Datos · EXPERTA", from: [2025, 10], to: [2025, 12] },
    { label: "Formulador · Promise", from: [2025, 3], to: [2025, 9] },
];
