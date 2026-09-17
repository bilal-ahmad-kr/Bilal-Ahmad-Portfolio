// =====================================================================
// CHATBOT KNOWLEDGE BASE
// ---------------------------------------------------------------------
// This is the ONLY information the chatbot knows. It cannot answer
// anything outside this file — so it will never say something wrong
// about you. To teach it something new, just add a new entry below.
//
// Each entry has:
//   keywords -> words a visitor might type (all lowercase)
//   answer   -> what the bot replies (supports \n for new lines)
// =====================================================================

export const knowledgeBase = [
  {
    id: "greeting",
    keywords: ["hi", "hello", "hey", "salam", "assalam", "asalam", "good morning", "good evening"],
    answer:
      "Hello! 👋 I'm Bilal's AI assistant. Ask me anything about his skills, projects, education, certificates, or how to get in touch with him.",
  },
  {
    id: "who",
    keywords: ["who is", "who are you", "about bilal", "tell me about", "introduce", "yourself", "about him"],
    answer:
      "Bilal Ahmad is a Software Engineering student and Full-Stack MERN developer from Pakistan.\n\nHe builds modern, responsive and scalable web applications using React.js, Next.js, Node.js, Express and MongoDB — and is currently in his 6th semester of BS Software Engineering.",
  },
  {
    id: "skills",
    keywords: ["skill", "technology", "technologies", "tech stack", "stack", "what can you do", "languages", "tools", "know"],
    answer:
      "Bilal works mainly with the MERN stack:\n\n• Frontend — React.js, Next.js, JavaScript, TypeScript, Tailwind CSS, HTML5, CSS3\n• Backend — Node.js, Express.js\n• Databases — MongoDB, MySQL\n• Tools — Git, GitHub, Framer Motion\n• Also — Python (basics) and AI / Prompt Engineering",
  },
  {
    id: "education",
    keywords: ["education", "study", "studying", "university", "degree", "college", "semester", "student", "iub", "bahawalpur", "graduate"],
    answer:
      "Bilal is pursuing a BS in Software Engineering at The Islamia University of Bahawalpur (IUB), Pakistan.\n\nHe is currently in his 6th semester and expects to graduate in 2028.",
  },
  {
    id: "projects",
    keywords: ["project", "portfolio", "built", "build", "work", "made", "app", "application", "showcase"],
    answer:
      "Here are Bilal's featured projects:\n\n• MedIXAI — a healthcare appointment platform with authentication, booking and a doctor dashboard (React, Next.js, Tailwind, MongoDB)\n• Portfolio Website — this site, built with React, Tailwind CSS and Framer Motion\n• E-Commerce Store — a responsive store with cart, search and checkout (React, Redux, Node.js, Express, MongoDB, TypeScript)\n\nYou can see all of them in the Projects section, with GitHub links.",
  },
  {
    id: "medixai",
    keywords: ["medix", "medixai", "healthcare", "hospital", "medical", "appointment"],
    answer:
      "MedIXAI is a modern healthcare appointment platform Bilal built. It includes user authentication, appointment booking, a doctor dashboard and a fully responsive UI.\n\nTech used: React, Next.js, Tailwind CSS and MongoDB.",
  },
  {
    id: "ecommerce",
    keywords: ["ecommerce", "e-commerce", "store", "shop", "cart", "nexasphere"],
    answer:
      "The E-Commerce Store is a responsive online shop with a shopping cart, product search and a checkout interface.\n\nTech used: React, Redux, Tailwind CSS, Node.js, Express.js, TypeScript and MongoDB.",
  },
  {
    id: "certificates",
    keywords: ["certificate", "certification", "certified", "course", "coursera", "meta", "ibm", "microsoft", "credential"],
    answer:
      "Bilal has earned several industry certifications:\n\n• Meta Front-End Developer\n• IBM Full-Stack JavaScript Developer\n• Microsoft Python Development\n• One Million Prompters — Dubai Future Foundation\n\nEach one is verifiable from the Certificates section.",
  },
  {
    id: "experience",
    keywords: ["experience", "job", "work experience", "intern", "internship", "years", "worked"],
    answer:
      "Bilal has been building real-world projects since 2025 — React applications, dashboards, healthcare systems and modern web interfaces.\n\nHe is currently open to internships, freelance work and remote frontend/MERN roles.",
  },
  {
    id: "hire",
    keywords: ["hire", "available", "freelance", "remote", "opportunity", "job offer", "recruit", "open to", "work together", "collaborate"],
    answer:
      "Yes — Bilal is open to internships, freelance projects and remote opportunities, including international and Gulf-region roles.\n\nThe fastest way to reach him is email (bilalhassan779966@gmail.com) or WhatsApp (+92 348 6158431).",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "reach", "whatsapp", "phone", "number", "get in touch", "message", "connect", "linkedin", "github"],
    answer:
      "You can reach Bilal here:\n\n• Email — bilalhassan779966@gmail.com\n• WhatsApp — +92 348 6158431\n• GitHub — github.com/bilal-ahmad-kr\n• LinkedIn — linkedin.com/in/bilal-ahmad-kr\n\nOr just use the contact form in the Contact section below.",
  },
  {
    id: "location",
    keywords: ["location", "where", "based", "country", "city", "live", "from", "pakistan", "timezone"],
    answer:
      "Bilal is based in Bahawalpur, Pakistan (PKT, UTC+5). He works comfortably with remote and international teams.",
  },
  {
    id: "resume",
    keywords: ["resume", "cv", "download"],
    answer:
      "You can download Bilal's resume using the Download Resume button in the navigation bar at the top of the page.",
  },
  {
    id: "react",
    keywords: ["react", "frontend", "front-end", "ui", "next.js", "nextjs"],
    answer:
      "React.js is Bilal's strongest skill. He uses it with Tailwind CSS and Framer Motion to build clean, animated and fully responsive interfaces, and also works with Next.js for full-stack and SEO-friendly applications.",
  },
  {
    id: "backend",
    keywords: ["backend", "back-end", "node", "express", "database", "mongodb", "mysql", "api", "server"],
    answer:
      "On the backend Bilal works with Node.js and Express.js, building REST APIs with authentication. For data he uses MongoDB (primary) and MySQL.",
  },
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "shukriya", "appreciate", "great", "awesome", "nice"],
    answer: "You're welcome! 😊 Anything else you'd like to know about Bilal?",
  },
];

// Shown as tappable chips inside the chat window
export const suggestedQuestions = [
  "What technologies do you work with?",
  "Tell me about your projects",
  "What's your education?",
  "Are you available for work?",
  "How can I contact you?",
];

// Reply used when nothing in the knowledge base matches
export const fallbackAnswer =
  "I can only answer questions about Bilal — his skills, projects, education, certificates, experience and contact details.\n\nTry asking something like \"What are your skills?\" or \"How can I contact you?\"";

export const welcomeMessage =
  "Hi! I'm Bilal's AI assistant. 👋\nAsk me anything about his skills, projects, experience, or how to get in touch with him.";

/**
 * Finds the best matching answer by scoring how many keywords appear
 * in the visitor's question. Longer keywords score higher so that
 * "contact" doesn't accidentally beat "how can i contact you".
 */
export function findAnswer(userInput) {
  const text = userInput.toLowerCase().trim();
  if (!text) return fallbackAnswer;

  let best = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (text.includes(keyword)) {
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return best ? best.answer : fallbackAnswer;
}
