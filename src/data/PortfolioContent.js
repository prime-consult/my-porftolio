import MusicFixShot from "../assets/images/projects/musicfix.jpg";
import OrpheusShot from "../assets/images/projects/orpheus.jpg";
import LockedInShot from "../assets/images/projects/lockedin.jpg";
import CryptoIqShot from "../assets/images/projects/cryptoiq.jpg";
import QurasShot from "../assets/images/projects/quras.jpg";
import VelasShot from "../assets/images/projects/velas.jpg";

export const PortfolioContent = {
  about: {
    tag: "About",
    title: "I ship the",
    titleHighlight: "whole product",
    paragraphs: [
      "I'm William Hein, founder and lead developer at Heitech. I have been shipping production software since May 2021: a 300+ file web client, a Go market-data service across 7+ exchanges, and an autonomous agent of 435+ files and 322 commits.",
      "I design SaaS products, multi-agent strategy systems, and real-time data platforms in TypeScript, Python, Go, and PHP. I own each release from the first commit through containerized deployment.",
    ],
    stats: [
      { number: "5+", label: "Years shipping" },
      { number: "11", label: "Products" },
      { number: "7+", label: "Exchanges" },
    ],
    skills: [
      { name: "TypeScript", level: 94 },
      { name: "Next.js", level: 93 },
      { name: "Python", level: 90 },
      { name: "Go", level: 88 },
      { name: "PostgreSQL", level: 86 },
      { name: "Docker", level: 84 },
    ],
  },

  hero: {
    badge: "Shipping since May 2021",
    greeting: "Aalborg, Denmark",
    name: "William Hein",
    title: "Founder & Lead Developer",
    description:
      "I design SaaS products, multi-agent systems, and real-time data platforms in TypeScript, Python, Go, and PHP — and I take each one from the first commit to a containerized release.",
    buttons: {
      primary: "Let's talk",
      secondary: "View work",
      toptal: "Toptal profile",
    },
    toptal: "https://www.toptal.com/developers/resume/william-hein#WaovPQ",
    stats: [
      { number: "5+", label: "Years shipping" },
      { number: "11", label: "Products" },
      { number: "7+", label: "Exchanges" },
      { number: "435+", label: "Agent files" },
    ],
    technologies: [
      "TypeScript",
      "Go",
      "Python",
      "PHP",
      "Swift",
      "Next.js",
      "React",
      "Flutter",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Firebase",
    ],
  },

  skills: {
    tag: "Stack",
    title: "What I",
    titleHighlight: "build with",
    description:
      "Languages, product surfaces, data systems, and the delivery work that gets a release onto a host.",
    categories: [
      { id: "all", label: "All" },
      { id: "languages", label: "Languages" },
      { id: "frontend", label: "Frontend" },
      { id: "data", label: "Data & services" },
      { id: "delivery", label: "Delivery" },
    ],
    skills: {
      languages: [
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          level: 94,
          description: "Product code, agents, services",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          level: 92,
          description: "Node services and browser clients",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          level: 90,
          description: "Async clients, PyPI packages",
        },
        {
          name: "Go",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
          level: 88,
          description: "Live market-data ingestion",
        },
        {
          name: "PHP",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
          level: 82,
          description: "Compiler pipelines, backends",
        },
        {
          name: "Swift",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
          level: 78,
          description: "Native macOS utilities",
        },
        {
          name: "SQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
          level: 86,
          description: "Schema design and queries",
        },
        {
          name: "Bash",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
          level: 80,
          description: "Hosts, deploys, automation",
        },
      ],
      frontend: [
        {
          name: "Next.js",
          icon: "https://cdn.simpleicons.org/nextdotjs/ffffff",
          level: 93,
          description: "Production web clients",
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 92,
          description: "Dashboards and catalogs",
        },
        {
          name: "Flutter",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
          level: 84,
          description: "iOS and Android",
        },
        {
          name: "HTML5",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          level: 90,
          description: "Semantic structure",
        },
        {
          name: "CSS3",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          level: 88,
          description: "Layout and motion",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
          level: 86,
          description: "Product UI systems",
        },
        {
          name: "React Native",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          level: 78,
          description: "Cross-platform mobile",
        },
      ],
      data: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          level: 90,
          description: "APIs, workers, orchestration",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
          level: 86,
          description: "Normalized product data",
        },
        {
          name: "Prisma",
          icon: "https://cdn.simpleicons.org/prisma/ffffff",
          level: 84,
          description: "Typed data access",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
          level: 80,
          description: "Queues and hot state",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          level: 78,
          description: "Document stores",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
          level: 85,
          description: "Firestore, Functions, billing",
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
          level: 80,
          description: "Typed API contracts",
        },
        {
          name: "Stripe",
          icon: "https://cdn.simpleicons.org/stripe/635BFF",
          level: 84,
          description: "Billing, Connect, webhooks",
        },
      ],
      delivery: [
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
          level: 86,
          description: "Fleets, Portainer, isolation",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
          level: 84,
          description: "VPS hosts and tunnels",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          level: 90,
          description: "Release history",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          level: 76,
          description: "Relational stores",
        },
        {
          name: "AWS",
          icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900",
          level: 78,
          description: "Cloud hosts and delivery",
        },
        {
          name: "Playwright",
          icon: "https://cdn.simpleicons.org/playwright/2EAD33",
          level: 80,
          description: "Browser automation and tests",
        },
      ],
    },
    summary: [
      { number: "8", label: "Languages" },
      { number: "5+", label: "Years shipping" },
      { number: "11", label: "Products" },
      { number: "7+", label: "Exchange feeds" },
    ],
    services: [
      {
        title: "SaaS products",
        text: "Next.js and Flutter products with PostgreSQL, auth, billing, and a release you can put in front of customers.",
      },
      {
        title: "AI agents",
        text: "Multi-agent systems, Claude and OpenAI workflows, and live conversations over Telegram and the web.",
      },
      {
        title: "Trading systems",
        text: "Go market-data services, exchange WebSockets, and real-time dashboards across Binance, Bybit, and Coinbase.",
      },
      {
        title: "API integrations",
        text: "REST and GraphQL, Stripe and Stripe Connect, Twilio, webhooks, and third-party API orchestration.",
      },
      {
        title: "Cloud delivery",
        text: "Docker and Podman, Linux hosts, Firebase, AWS, CI/CD, and a small exposed surface.",
      },
      {
        title: "Data platforms",
        text: "Queues, workers, and pipelines that turn messy vendor feeds into PostgreSQL a product can trust.",
      },
    ],
    focus: [
      {
        title: "Languages",
        items: ["TypeScript", "JavaScript", "Python", "Go", "PHP", "Swift", "SQL", "HTML", "CSS", "Bash"],
      },
      {
        title: "Frameworks",
        items: ["Next.js", "React", "Flutter", "Express", "NestJS", "Django", "FastAPI", "Laravel", "Tailwind", "Electron"],
      },
      {
        title: "APIs",
        items: ["REST", "GraphQL", "Stripe", "OpenAI", "Claude", "Binance", "Coinbase", "Twilio", "WebSockets", "Shopify"],
      },
      {
        title: "Platforms",
        items: ["Docker", "AWS", "Firebase", "Linux", "Node.js", "Vercel", "PostgreSQL", "Redis", "GitHub Actions", "Nginx"],
      },
      {
        title: "Practice",
        items: ["SaaS", "AI agents", "Real-time systems", "Algorithmic trading", "API design", "CI/CD", "Multi-tenant", "Automation"],
      },
    ],
  },

  projects: {
    tag: "Work",
    title: "Selected",
    titleHighlight: "products",
    description:
      "Live sites, data platforms, and open-source tools. Each one was taken from a first commit to something people can open.",
    categories: [
      { id: "all", label: "All" },
      { id: "product", label: "Products" },
      { id: "platform", label: "Platforms" },
      { id: "opensource", label: "Open source" },
    ],
    items: [
      {
        id: 1,
        title: "MusicFix",
        description:
          "A marketplace for booking artists, DJs, and studios. Flutter apps on iOS and Android, a Next.js web client of 300+ files, and a Firebase backend with Firestore rules, Cloud Functions, and Stripe billing.",
        emoji: "🎵",
        mark: "MF",
        kicker: "musicfix.dk",
        cover: "linear-gradient(145deg, #3a1458 0%, #1a0c28 55%, #0c1a2e 100%)",
        category: "product",
        tags: ["Flutter", "Next.js", "Firebase", "Stripe"],
        imageUrl: MusicFixShot,
        liveUrl: "https://musicfix.dk",
        githubUrl: "",
      },
      {
        id: 2,
        title: "Orpheus",
        description:
          "Event platform from 2022 to 2026: automated ticket issuance, QR entry checks, and an admin dashboard for live attendance. A custom PHP compiler (400+ files) turns static layouts into a backend, now deployed in containers with separate admin and public flows.",
        emoji: "🎟️",
        mark: "OR",
        kicker: "orpheus.dk",
        cover: "linear-gradient(145deg, #4a3010 0%, #1c1208 50%, #2a1840 100%)",
        category: "product",
        tags: ["PHP", "Next.js", "PostgreSQL", "Docker"],
        imageUrl: OrpheusShot,
        liveUrl: "https://orpheus.dk",
        githubUrl: "",
      },
      {
        id: 3,
        title: "LockedIn",
        description:
          "Murph, the B2B sales-intelligence product behind LockedIn. Built in Next.js and PostgreSQL from the first commit, with ICP-targeted commenting, third-party reply-intent detection, and a patch for a picomatch ReDoS vulnerability.",
        emoji: "◎",
        mark: "LI",
        kicker: "lockedinsales.com",
        cover: "linear-gradient(145deg, #0e3a32 0%, #0c1618 55%, #1a1040 100%)",
        category: "product",
        tags: ["Next.js", "PostgreSQL", "SaaS"],
        imageUrl: LockedInShot,
        liveUrl: "https://lockedinsales.com/",
        githubUrl: "",
      },
      {
        id: 4,
        title: "CryptoIQ",
        description:
          "Live trading product backed by iq-data-server, a Go service that ingests WebSocket feeds from 7+ exchanges, including Binance, Bybit, and Coinbase. The hot path was cleared of race conditions, head-of-line blocking, unbounded tracker growth, and unsafe upserts.",
        emoji: "◈",
        mark: "IQ",
        kicker: "cryptoiq.com",
        cover: "linear-gradient(145deg, #102848 0%, #0c1020 50%, #241448 100%)",
        category: "platform",
        tags: ["Go", "WebSockets", "Binance", "Bybit"],
        imageUrl: CryptoIqShot,
        liveUrl: "https://cryptoiq.com/",
        githubUrl: "",
      },
      {
        id: 5,
        title: "Colorize",
        description:
          "Photo colorization and restoration. A public product for bringing black-and-white and damaged photographs back into color.",
        emoji: "◐",
        mark: "CL",
        kicker: "colorize.cc",
        cover: "linear-gradient(145deg, #5a2848 0%, #241018 50%, #1a2848 100%)",
        category: "product",
        tags: ["Imaging", "Web"],
        liveUrl: "http://colorize.cc",
        githubUrl: "",
      },
      {
        id: 6,
        title: "Portret",
        description:
          "AI avatar generation. A public product that turns a portrait into a set of generated avatars.",
        emoji: "✦",
        mark: "PT",
        kicker: "portret.ai",
        cover: "linear-gradient(145deg, #3a1848 0%, #140c22 55%, #3a1830 100%)",
        category: "product",
        tags: ["AI", "Web"],
        liveUrl: "https://portret.ai/",
        githubUrl: "",
      },
      {
        id: 7,
        title: "Quras",
        description:
          "Production work on Quras, a privacy blockchain for private transactions and secret contracts, with zero-knowledge proofs and ring signatures on a public chain.",
        emoji: "◉",
        mark: "QR",
        kicker: "quras.io",
        cover: "linear-gradient(145deg, #1a1848 0%, #0c0c20 50%, #10283a 100%)",
        category: "platform",
        tags: ["Blockchain", "Privacy"],
        imageUrl: QurasShot,
        liveUrl: "https://quras.io",
        githubUrl: "",
      },
      {
        id: 8,
        title: "Velas Explorer",
        description:
          "Block explorer for the Velas network. A public surface for inspecting chain activity.",
        emoji: "▣",
        mark: "VX",
        kicker: "explorer.velas.com",
        cover: "linear-gradient(145deg, #0e3048 0%, #08141c 55%, #142848 100%)",
        category: "platform",
        tags: ["Explorer", "Blockchain"],
        imageUrl: VelasShot,
        liveUrl: "https://explorer.velas.com/",
        githubUrl: "",
      },
      {
        id: 9,
        title: "Upwork Agent",
        description:
          "An autonomous freelancing agent — 435+ files and 322 commits — that runs Upwork prospecting end to end and handles live tenant conversations over Telegram. Next.js, SQL storage, multi-agent orchestration, and model-generated proposals and replies.",
        emoji: "⧉",
        mark: "UA",
        kicker: "Autonomous agent",
        cover: "linear-gradient(145deg, #2a1450 0%, #100818 55%, #181830 100%)",
        category: "platform",
        tags: ["Next.js", "Agents", "Telegram", "SQL"],
        liveUrl: "",
        githubUrl: "",
      },
      {
        id: 10,
        title: "sentient-evolve",
        description:
          "A multi-agent engine with a 3-stage loop. It reviews run performance, writes code improvements, and repairs compilation errors inside isolated Docker containers.",
        emoji: "↻",
        mark: "SE",
        kicker: "Multi-agent engine",
        cover: "linear-gradient(145deg, #241040 0%, #0c0818 50%, #103028 100%)",
        category: "platform",
        tags: ["Agents", "Docker", "TypeScript"],
        liveUrl: "",
        githubUrl: "",
      },
      {
        id: 11,
        title: "aioeloverblik",
        description:
          "Async Python client for the Eloverblik energy API, published as v0.1.2 on PyPI after an abandoned library. Typed Customer and Third-Party scopes, paired with a Home Assistant custom component.",
        emoji: "⚡",
        mark: "AE",
        kicker: "PyPI · v0.1.2",
        cover: "linear-gradient(145deg, #143828 0%, #0c1814 55%, #102030 100%)",
        category: "opensource",
        tags: ["Python", "PyPI", "Home Assistant"],
        liveUrl: "",
        githubUrl: "https://github.com/will2022/aioeloverblik",
      },
      {
        id: 12,
        title: "ChargeControl",
        description:
          "Native macOS charge-limit utility in Swift, 35 files, shipped as v1.0.0. System sounds, plist configuration, an automated release-notes pipeline, and a dedicated Homebrew tap.",
        emoji: "🔋",
        mark: "CC",
        kicker: "Homebrew · v1.0.0",
        cover: "linear-gradient(145deg, #1c3020 0%, #10140c 50%, #243018 100%)",
        category: "opensource",
        tags: ["Swift", "macOS", "Homebrew"],
        liveUrl: "",
        githubUrl: "https://github.com/will2022/ChargeControl",
      },
    ],
  },

  experience: {
    tag: "Path",
    title: "Where the",
    titleHighlight: "work happened",
    description:
      "Founder work at Heitech, plus two earlier remote roles in Aarhus. Education and the security practice sit underneath.",
    roles: [
      {
        id: "heitech",
        role: "Founder and Lead Developer",
        org: "Heitech.dk",
        place: "Aarhus",
        period: "May 2021 — Present",
        points: [
          "Shipped Murph, a B2B sales-intelligence dashboard in Next.js and PostgreSQL, including ICP-targeted commenting, reply-intent detection, and a picomatch ReDoS patch.",
          "Architected sentient-evolve, a 3-stage multi-agent loop that reviews runs, writes code improvements, and repairs compile errors inside Docker.",
          "Built iq-data-server in Go for live feeds from 7+ exchanges and cleared race conditions, head-of-line blocking, unbounded tracker growth, and unsafe upserts.",
          "Extended MusicFix on iOS and Android, launched a 300+ file Next.js client, and delivered Firestore rules, Cloud Functions, and Stripe billing.",
          "Engineered a BullMQ ingestion platform that normalizes high-concurrency Ticketmaster listings into PostgreSQL for a public catalog and a Prisma ticketing system.",
          "Released rolly-extension, a Chrome add-on for automated order execution, with randomized event dispatch and heuristic DOM recovery so sessions continue under modern bot-detection checks.",
        ],
      },
      {
        id: "trueenergy",
        role: "Technical Supporter",
        org: "TrueEnergy",
        place: "Aarhus · Remote Denmark",
        period: "May 2022 — September 2023",
        points: [
          "Reproduced defects on the EV charging app and drove each confirmed bug through engineering to a shipped fix across a 17-month engagement.",
          "Coached junior staff on diagnostic methods and day-to-day working standards.",
          "Streamlined inquiry handling and shortened the time to first response.",
        ],
      },
      {
        id: "xspectar",
        role: "Remote Developer",
        org: "XSpectar",
        place: "Aarhus",
        period: "April 2022 — July 2023",
        points: [
          "Built xspectar-nft-daemon, a local WebSocket server on the XRP Ledger stream, so NFT activity reached the product in real time.",
          "Matched live transactions to NFT ownership and updated Discord roles and an internal database as soon as each transfer confirmed.",
        ],
      },
    ],
    notes: [
      {
        title: "Education",
        meta: "July 2024 · Vejle",
        body: "Higher Technical Examination, Communication/IT A and Programming B, at Tekniske Gymnasium. Most of the depth came from multi-year product work alongside the coursework.",
      },
      {
        title: "Languages",
        meta: "Spoken",
        body: "Danish, native or bilingual. English, full professional.",
      },
      {
        title: "Hosts & security",
        meta: "Practice",
        body: "WireGuard so administrative SSH stays on the VPN. Docker fleets through Portainer, moving toward rootless Podman. Competed in Cybermesterskaberne. Solved the 11-stage Odoo hiring challenge in under an hour.",
      },
    ],
  },

  contact: {
    tag: "Contact",
    title: "Start a",
    titleHighlight: "build",
    description:
      "A product, a data platform, or a system that has to stay up. Write with what you want shipped.",
    info: [
      {
        icon: "email",
        title: "Email",
        value: "william.prime.talent@gmail.com",
        href: "mailto:william.prime.talent@gmail.com",
      },
      {
        icon: "phone",
        title: "Phone",
        value: "+45 22 55 75 16",
        href: "tel:+4522557516",
      },
      {
        icon: "location",
        title: "Location",
        value: "Aalborg, Denmark",
      },
      {
        icon: "availability",
        title: "Studio",
        value: "Heitech.dk",
        href: "https://heitech.dk",
      },
    ],
    social: [
      {
        name: "GitHub",
        icon: "https://cdn.simpleicons.org/github/ffffff",
        url: "https://github.com/will2022",
      },
      {
        name: "LinkedIn",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        url: "https://www.linkedin.com/in/hein-william",
      },
      {
        name: "Heitech",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ba80ff' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M2 12h20M12 2a15 15 0 0 1 0 20a15 15 0 0 1 0-20'/%3E%3C/svg%3E",
        url: "https://heitech.dk",
      },
      {
        name: "Toptal",
        icon: "https://cdn.simpleicons.org/toptal/3863A0",
        url: "https://www.toptal.com/developers/resume/william-hein#WaovPQ",
      },
    ],
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "What do you want shipped?",
      submitText: "Send message",
    },
  },

  footer: {
    brand: "William.",
    text: "Founder and lead developer at Heitech. Aalborg, Denmark.",
    links: [
      { label: "About", href: "#about" },
      { label: "Work", href: "#projects" },
      { label: "Path", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    copyright: "All rights reserved.",
    heart: "heitech.dk",
  },

  navbar: {
    brand: "William",
    links: [
      { label: "About", href: "#about" },
      { label: "Stack", href: "#skills" },
      { label: "Work", href: "#projects" },
      { label: "Path", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Contact",
  },
};

export default PortfolioContent;
