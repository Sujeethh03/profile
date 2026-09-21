/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE — everything the site says lives here.
 *  Projects come from the pinned repos on github.com/Sujeethh03;
 *  experience, education and certifications from SujeethResume.pdf.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'Sujeeth Godavarthi',
  initials: 'SG',

  role: 'Software Engineer',

  positioning:
    'I build production-ready agentic applications — GenAI and backend systems in Python, LangGraph, FastAPI and RAG, with the evaluation frameworks that keep them honest.',

  // Shown in the contact section so recruiters know where you stand.
  availability: 'Open to SDE and AI engineering roles · Hyderabad, India',

  email: 'sujeeth.godavarthi@gmail.com',
  phone: '+91 99123 56231',
  github: 'https://github.com/Sujeethh03',
  linkedin: 'https://www.linkedin.com/in/sujeeth-godavarthi-16aa69279/',
  resumeUrl: '/resume.pdf',

  photo: '/photo.jpg',
} as const;

export type Project = {
  title: string;
  blurb: string;
  year: string;
  tags: readonly string[];
  href?: string;
  /** Real screenshot pulled from the repo's docs/ folder. Optional. */
  image?: string;
  imageAlt?: string;
};

export const projects: readonly Project[] = [
  {
    title: 'PR Review Agent',
    blurb:
      'Reviews GitHub pull requests the moment they open. Three specialist LLM agents run in parallel for bugs, security, and conventions, then post inline comments with one-click fixes — with confidence-based filtering so low-certainty findings never reach the diff.',
    year: '2026',
    tags: ['LangGraph', 'FastAPI', 'ChromaDB', 'RAG'],
    href: 'https://github.com/Sujeethh03/PR-review-Agent',
    image: '/projects/pr-agent.jpg',
    imageAlt:
      'The agent posting a HIGH-severity infinite-loop finding as an inline GitHub review comment, with a one-click suggested fix.',
  },
  {
    title: 'TripPilot AI',
    blurb:
      'Turns a sentence into a day-by-day itinerary. Coordinated agents pull live data from Google Maps, Places and OpenWeather through FastMCP tool servers, and a deterministic validator checks every plan for feasibility before you see it.',
    year: '2026',
    tags: ['LangGraph', 'FastMCP', 'WebSockets', 'Docker'],
    href: 'https://trip-pilot-ai-ashen.vercel.app/',
    image: '/projects/trippilot.jpg',
    imageAlt:
      'TripPilot: chat refining a Coorg-to-Chennai trip on the left, live itinerary with route map, budget and hotels on the right.',
  },
  {
    title: 'NoteIt',
    blurb:
      'A note-taking app built around staying in flow: notebooks with rich-text editing on TipTap, auto-save as you type, and cloud sync behind Clerk auth with Drizzle over Postgres.',
    year: '2026',
    tags: ['Next.js', 'TipTap', 'Drizzle', 'Clerk'],
    href: 'https://github.com/Sujeethh03/NoteIt',
    // No screenshot: the repo has no docs/ images and the app isn't deployed.
    // Add one at public/projects/noteit.jpg and it renders automatically.
  },
] as const;

export type Role = {
  org: string;
  title: string;
  period: string;
  points: readonly string[];
};

export const experience: readonly Role[] = [
  {
    org: 'QuantJo · Chitrav Research',
    title: 'Software Engineer Intern',
    period: 'Jan – Jun 2026',
    points: [
      'Built core backend infrastructure for an LLM-powered trading platform in Python, FastAPI, PostgreSQL and WebSockets — across retrieval, agent orchestration, evaluation and platform security.',
      'Cut LLM inference cost ~89% by replacing a 20K-token static prompt with a retrieval architecture that fetched only task-relevant context on demand, improving latency and scalability alongside it.',
      'Designed a multi-turn evaluation framework pairing deterministic AST validation with LLM-as-a-Judge scoring, catching code-generation failures, instruction drift and behavioural regressions before deploy.',
      'Engineered a real-time streaming pipeline over FastAPI and WebSockets exposing live agent execution, tool invocations and reasoning events for transparent monitoring and debugging.',
      'Secured third-party integrations with Fernet-encrypted OAuth tokens and environment-isolated key management.',
    ],
  },
  {
    org: 'ACM Student Chapter, KL University',
    title: 'Secretary',
    period: 'Nov 2023 – Sep 2025',
    points: [
      'Planned and ran chapter events, workshops and hackathons — including Novus 2024, engaging 500+ students.',
      'Acted as the primary point of contact for members, and kept records of meetings, events and participation.',
      'Worked with the leadership team on initiatives driving member engagement and chapter growth.',
    ],
  },
] as const;

export type Education = {
  school: string;
  qualification: string;
  period: string;
  result: string;
};

export const education: readonly Education[] = [
  {
    school: 'KL University',
    qualification: 'B.Tech, Computer Science & Engineering',
    period: '2023 – 2027',
    result: 'CGPA 9.40 / 10',
  },
  {
    school: 'Sri Chaitanya College of Education',
    qualification: 'Intermediate (Class XII)',
    period: '2021 – 2023',
    result: '95.1%',
  },
  {
    school: 'Ramadevi Public School',
    qualification: 'Class X',
    period: '2016 – 2020',
    result: '96.7%',
  },
] as const;

export type Certification = {
  name: string;
  issuer: string;
  href: string;
  /** Official badge artwork, self-hosted. Falls back to initials if absent. */
  badge?: string;
};

export const certifications: readonly Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/430a615d-d99d-43b0-891b-7d5cca6bf968/public_url',
    badge: '/certs/aws.jpg',
  },
  {
    name: 'Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    href: 'https://learn.microsoft.com/api/credentials/share/en-us/sujeethgodavarthi-1454/90C526AE8A9E972B?sharingId=33C241AE99286026',
    badge: '/certs/azure.jpg',
  },
  {
    name: 'Certified Advanced Automation Professional',
    issuer: 'Automation Anywhere',
    href: 'https://certificates.automationanywhere.com/3254510a-f0d4-448a-aa5a-dd1ebd1ebf83#acc.ANQU2ayV',
  },
] as const;

export const about = [
  'Final-year CS student in Hyderabad. I like building things that actually work — agents that review real pull requests, planners that check their own math before handing you a plan. Most of the job turns out to be the unglamorous part: making sure the model did not just make it up.',
] as const;

/**
 * `icon` is a simple-icons slug. Skills with no brand mark (RAG, WebSockets)
 * render a small accent dot instead — see Stack.tsx.
 */
export type Skill = { name: string; icon?: string };

export const stack: readonly Skill[] = [
  { name: 'Python', icon: 'python' },
  { name: 'Java', icon: 'openjdk' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'LangGraph', icon: 'langgraph' },
  { name: 'LangChain', icon: 'langchain' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'RAG' },
  { name: 'WebSockets' },
] as const;
