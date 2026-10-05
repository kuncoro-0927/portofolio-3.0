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
