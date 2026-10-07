export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  role: string;
  company: string;
  year: number;
  image: string;
  images: string[];
  techStack: string[];
  liveUrl: string;
  repoUrl: string;
};

export const workData: Project[] = [
  {
    slug: "top-up-suara",
    title: "Top Up Suara",
    subtitle: "Online Top Up & Bill Payment Website",
    description:
      "Top Up Suara is a multi-page top up and bill payment website built for Suara.com, covering e-wallets (GoPay, DANA, OVO, and more), mobile credit, data packages, PLN, and BPJS. It features a complete six-step transaction flow, from choosing a service and entering account details to selecting a payment method (e-wallet, QRIS, or bank virtual account), payment confirmation, and a transaction summary. Built with HTML, Tailwind CSS, and JavaScript, it uses shared page templates driven by a service config to keep the codebase maintainable, and is optimized for performance with WebP images and self-hosted fonts.",
    category: "Website",
    role: "Frontend Developer",
    company: "Suara.com",
    year: 2026,
    image: "/images/project/topup-suara/mockup.webp",
    images: [
      "/images/project/topup-suara/img1.webp",
      "/images/project/topup-suara/img2.webp",
      "/images/project/topup-suara/img3.webp",
      "/images/project/topup-suara/img4.webp",
    ],
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://top-up-suaracom.vercel.app/",
    repoUrl: "",
  },

  {
    slug: "geo-suara",
    title: "Generative Engine Optimization by Suara.com",
    subtitle:
      "Positioning Brand in the AI Search Era: From Citation to Conversion",
    description:
      "A GEO (Generative Engine Optimization) service presentation for Arkadia Digital Media, built to help brands get cited by AI search engines such as ChatGPT, Google AI, Perplexity, and Copilot. It covers the shift from SEO to GEO, a three-tier engagement model (Diagnostic, Implementation, AI Narrative), internal tools for content audit, content creation, and monitoring, and a KPI framework tracking citation rate, AI referral traffic, and conversion. A case study on AI narrative management shows how GEO-formatted Suara.com articles changed the way AI Overview describes a brand.",
    category: "Landing Page",
    role: "Frontend Developer",
    company: "Arkadia Digital Media (Suara.com)",
    year: 2026,
    image: "/images/project/GEO-suara/mockup.webp",
    images: [
      "/images/project/GEO-suara/img1.webp",
      "/images/project/GEO-suara/img2.webp",
      "/images/project/GEO-suara/img3.webp",
      "/images/project/GEO-suara/img4.webp",
    ],
    techStack: ["GEO", "Technical SEO", "Schema Markup", "GA4"],
    liveUrl: "https://geo-suaracom.vercel.app/", // isi kalau ada
    repoUrl: "", // isi kalau ada
  },
  {
    slug: "kalmia-coffee",
    title: "Kalmia Coffee",
    subtitle: "Coffee Shop Landing Page with AI Chatbot",
    description:
      "Kalmia Coffee is a multi-section React and Tailwind CSS landing page built for a coffee shop brand, featuring smooth scroll-triggered animations powered by GSAP. The site includes an integrated AI chatbot widget backed by a Node.js/Express server connected to the Groq API, giving visitors an interactive way to ask questions directly on the page.",
    category: "Landing Page",
    role: "Frontend Developer",
    company: "Personal",
    year: 2026,
    image: "/images/project/kalmia/index.webp",
    images: [
      "/images/project/kalmia/img.png",
      "/images/project/kalmia/img-2.png",
      "/images/project/kalmia/img-3.png",
      "/images/project/kalmia/img-4.png",
    ],
    techStack: ["React", "Tailwind CSS", "GSAP"],
    liveUrl: "https://kalmiacoffee.netlify.app/",
    repoUrl: "https://github.com/username/kalmia-coffee",
  },
  {
    slug: "faza-frame",
    title: "Faza Frame",
    subtitle: "E-Commerce Platform for Art and Frames",
    description:
      "Faza Frame is an e-commerce website developed to digitize the sales process of Faza Frame. The platform enables product management, transaction handling, and online payments integrated with Midtrans, making the sales process more efficient and easily accessible for customers.",
    category: "E-Commerce",
    role: "Fullstack Developer",
    company: "Graduation Project",
    year: 2025,
    image: "/images/project/faza_frame/mockup.webp",
    images: [
      "/images/project/faza_frame/ff1.webp",
      "/images/project/faza_frame/ff2.webp",
      "/images/project/faza_frame/ff3.webp",
      "/images/project/faza_frame/ff4.webp",
    ],
    techStack: ["React", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/kalmia-coffee",
  },
  {
    slug: "cultivo",
    title: "Cultivo",
    subtitle: "Agrotourism Ticket Booking Platform",
    description:
      "Cultivo is a web platform that helps users discover and book nature tourism and agricultural destinations across Indonesia. The website showcases various attractions, enables online ticket booking, and delivers an educational and enjoyable experience.",
    category: "Booking App",
    role: "Fullstack Developer",
    company: "Infinite Learning",
    year: 2024,
    image: "/images/project/cultivo/homepage.webp",
    images: [
      "/images/project/cultivo/cultivo1.webp",
      "/images/project/cultivo/cultivo2.webp",
      "/images/project/cultivo/cultivo3.webp",
      "/images/project/cultivo/cultivo4.webp",
    ],
    techStack: ["React", "Tailwind CSS", "React Router"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/kalmia-coffee",
  },
];
