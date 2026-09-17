// =====================================================================
// ENHANCED KNOWLEDGE BASE & MATCHING ENGINE
// =====================================================================

export const knowledgeBase = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "salam", "assalam", "asalam", "good morning", "good evening", "greetings"],
    answer: "Hello! 👋 I'm Bilal's AI assistant. Ask me anything about his skills, projects, education, certificates, or how to get in touch with him.",
    suggestions: ["What are your skills?", "Tell me about your projects", "How can I contact you?"]
  },
  {
    id: "who",
    keywords: ["who", "about", "introduce", "yourself", "bilal", "bio"],
    answer: "Bilal Ahmad is a Software Engineering student and Full-Stack MERN developer from Pakistan.\n\nHe builds modern, responsive, and scalable web applications using **React.js**, **Next.js**, **Node.js**, **Express**, and **MongoDB** — and is currently in his 6th semester.",
    suggestions: ["What technologies do you work with?", "What are your projects?", "Where are you located?"]
  },
  {
    id: "skills",
    keywords: ["skill", "skills", "technology", "technologies", "tech", "stack", "languages", "tools", "frameworks"],
    answer: "Bilal works mainly with the MERN stack:\n\n• **Frontend** — React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3\n• **Backend** — Node.js, Express.js\n• **Databases** — MongoDB, MySQL\n• **Tools** — Git, GitHub, Framer Motion\n• **AI** — Python (basics), Prompt Engineering",
    suggestions: ["Tell me about MedIXAI project", "What is your experience?", "Are you available for work?"]
  },
  {
    id: "education",
    keywords: ["education", "study", "studying", "university", "degree", "college", "semester", "iub", "bahawalpur", "degree"],
    answer: "Bilal is pursuing a **BS in Software Engineering** at **The Islamia University of Bahawalpur (IUB)**, Pakistan.\n\nHe is currently in his 6th semester and expects to graduate in 2028.",
    suggestions: ["What certificates do you have?", "What are your skills?", "How can I contact you?"]
  },
  {
    id: "projects",
    keywords: ["project", "projects", "portfolio", "built", "build", "work", "apps", "showcase"],
    answer: "Here are Bilal's featured projects:\n\n• **MedIXAI** — Healthcare appointment platform (React, Next.js, Tailwind, MongoDB)\n• **E-Commerce Store** — Online shop with cart and checkout (React, Redux, Node.js, Express, MongoDB)\n• **Portfolio Site** — Interactive portfolio built with React and Framer Motion",
    suggestions: ["Tell me about MedIXAI", "Tell me about E-Commerce Store", "Can I hire you?"]
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "whatsapp", "phone", "number", "linkedin", "github", "touch", "message"],
    answer: "You can reach Bilal via:\n\n• **Email**: bilalhassan779966@gmail.com\n• **WhatsApp**: +92 348 6158431\n• **GitHub**: [github.com/bilal-ahmad-kr](https://github.com/bilal-ahmad-kr)\n• **LinkedIn**: [linkedin.com/in/bilal-ahmad-kr](https://linkedin.com/in/bilal-ahmad-kr)",
    suggestions: ["Are you open for freelance?", "Where are you based?", "What are your skills?"]
  },
  {
    id: "hire",
    keywords: ["hire", "available", "freelance", "remote", "opportunity", "job", "work", "collaborate"],
    answer: "Yes! Bilal is actively open to **internships**, **freelance projects**, and **remote full-stack/frontend roles** (including international and Gulf-region client projects).",
    suggestions: ["How can I contact you?", "What technologies do you work with?", "What are your projects?"]
  }
];

export const defaultSuggestions = [
  "What technologies do you work with?",
  "Tell me about your projects",
  "Are you available for work?",
  "How can I contact you?"
];

export const fallbackEntry = {
  answer: "I can answer questions about Bilal's skills, projects, education, experience, and contact info.\n\nTry selecting one of the suggested topics below!",
  suggestions: defaultSuggestions
};

export const welcomeMessage = "Hi! I'm Bilal's AI assistant. 👋\nAsk me anything about his skills, projects, experience, or how to get in touch with him.";

/**
 * Intelligent keyword scoring algorithm
 */
export function findAnswer(userInput) {
  const cleanInput = userInput.toLowerCase().replace(/[^\w\s]/gi, "");
  const words = cleanInput.split(/\s+/);

  if (!words.length || !cleanInput.trim()) return fallbackEntry;

  let bestEntry = null;
  let highestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      // Direct string inclusion bonus
      if (cleanInput.includes(keyword)) {
        score += keyword.length * 2;
      }
      // Exact token match bonus
      if (words.includes(keyword)) {
        score += 5;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestEntry = entry;
    }
  }

  // Minimum threshold check to prevent loose inaccurate matches
  return highestScore >= 3 ? bestEntry : fallbackEntry;
}